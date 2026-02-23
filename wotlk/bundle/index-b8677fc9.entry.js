import "./index-6d46f689.chunk.js";
import { aq as Database, en as WindowedDetailedResults } from "./detailed_results-5dd1f24b.chunk.js";
const index = "";
Database.get();
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("cssClass")) {
  document.body.classList.add(urlParams.get("cssClass"));
}
const isIndividualSim = urlParams.has("isIndividualSim");
if (isIndividualSim) {
  document.body.classList.add("individual-sim");
}
document.body.classList.add("new-tab");
new WindowedDetailedResults(document.body);
//# sourceMappingURL=index-b8677fc9.entry.js.map
