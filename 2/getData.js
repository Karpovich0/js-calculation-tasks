import getItems from "./getItems.js";
import sortByItems from "./sortByItems.js";
import parseInput from "./parseInput.js";

export const INCLUDE = "include";
export const EXCLUDE = "exclude";

export default function getData(inputDataJson) {
	let { data, condition } = parseInput(inputDataJson);
	const { exclude, include, sortBy } = condition;
	let result;
	if (exclude) {
		result = getItems(exclude, data, EXCLUDE);
		// we need change data value to result for below include operation (in case if we will have exclude + include)
		data = result;
	}
	if (include) {
		result = getItems(include, data, INCLUDE);
	}
	if (sortBy) {
		sortByItems(sortBy[sortBy.length - 1], result);
	}

	return JSON.stringify({
		result: result,
	});
}
