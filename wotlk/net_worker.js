importScripts('wasm_exec.js');

const go = new Go();
let mod, inst;

// 1. Define the handshake function
function wasmready() {
    postMessage({ msg: "ready" });
}

// 2. The Bulletproof Loader (Safe for Cloudflare)
fetch("lib.wasm")
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes, go.importObject))
  .then(async result => {
      mod = result.module;
      inst = result.instance;
      console.log("WASM loaded successfully");
      await go.run(inst);
  })
  .catch(err => console.error("Critical WASM Load Error:", err));

var workerID = "";

// 3. The Listener (The logic you found that actually runs the sim)
addEventListener('message', async (e) => {
    const msg = e.data.msg;
    const id = e.data.id;
    let handled = false;

    [
        ['bulkSimAsync', (data) => {
            return bulkSimAsync(data, (result) => {
                postMessage({ msg: "progress", outputData: result, id: id + "progress" });
            });
        }],
        ['computeStats', computeStats],
        ['computeStatsJson', computeStatsJson],
        ['raidSim', raidSim],
        ['raidSimJson', raidSimJson],
        ['raidSimAsync', (data) => {
            return raidSimAsync(data, (result) => {
                postMessage({ msg: "progress", outputData: result, id: id + "progress" });
            });
        }],
        ['statWeights', statWeights],
        ['statWeightsAsync', (data) => {
            return statWeightsAsync(data, (result) => {
                postMessage({ msg: "progress", outputData: result, id: id + "progress" });
            });
        }],
    ].forEach(funcData => {
        const funcName = funcData[0];
        const func = funcData[1];

        if (msg == funcName) {
            const outputData = func(e.data.inputData);
            postMessage({ msg: funcName, outputData: outputData, id: id });
            handled = true;
        }
    });

    if (handled) return;

    if (msg == "setID") {
        workerID = id;
        postMessage({ msg: "idconfirm" });
    }
}, false);