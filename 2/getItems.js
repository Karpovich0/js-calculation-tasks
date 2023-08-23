import { EXCLUDE, INCLUDE } from "./getData.js";
import checkRule from "./checkRule.js";

export default function getItems(rules, data, mode) {
	let includeArray = [];
	rules.forEach((rule) => {
		// after each rule data changes
		if (mode === EXCLUDE) {
			data = filterData(rule);
		} else if (mode === INCLUDE) {
			//add new value and then remove copies
			includeArray = [...new Set([...includeArray, ...filterData(rule)])];
		}
	});

	if (mode === EXCLUDE) {
		return data;
	} else if (mode === INCLUDE) {
		return includeArray;
	}

	function filterData(rule) {
		return data.filter((item) => {
			return checkRule(rule, item, mode);
		});
	}
}
