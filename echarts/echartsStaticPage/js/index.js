import jobChart from "./jobChart.js";
import personChart from "./personChart.js";
import ageChart from "./ageChart.js";
import technicalChart from "./technicalChart.js";
import playChart from "./playChart.js";

window.addEventListener("resize", function () {
	jobChart.resize();
	personChart.resize();
	ageChart.resize();
	technicalChart.resize();
	playChart.resize();
});
