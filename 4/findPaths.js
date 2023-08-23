import parseInput from "./parseInput.js";
import resultTemplate from "./resultTemplate.js";
import getQuestion from "./getQuestion.js";
import askQuestion, { buffer } from "./askQuestion.js";

export let inputData;

export default function findPaths(inputDataJson) {
	inputData = parseInput(inputDataJson);
	inputData.forEach((item, index) => {
		let AllowedToVisitFromStart = item[Object.keys(item)[2]];
		// we are creating a questions' tree from an object where AllowedToVisitFromStart === true
		if (AllowedToVisitFromStart) {
			askQuestion(getQuestion(index));
		} else {
			// after whole questions' tree was processed we clear a buffer for a next questions' tree from an object where AllowedToVisitFromStart === true
			buffer.splice(0, buffer.length);
		}
		// all paths were found so we count their number
		resultTemplate.paths.number = resultTemplate.paths.list.length;
	});
	return JSON.stringify(resultTemplate);
}
