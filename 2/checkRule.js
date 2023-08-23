import { EXCLUDE, INCLUDE } from "./getData.js";

export default function checkRule(rule, item, mode) {
	// calculate number of rules
	let length = Object.keys(rule).length;
	for (let i = 0; i < length; i++) {
		// checking rules
		if (item[Object.keys(rule)[i]] !== rule[Object.keys(rule)[i]]) {
			// if ANY of properties didn't satisfy to the rule - go to the next item
			if (mode === INCLUDE) {
				return false;
			} else if (mode === EXCLUDE) {
				return true;
			}
		}
	}
	//all rules(rule) were satisfied
	if (mode === INCLUDE) {
		return true;
	} else if (mode === EXCLUDE) {
		return false;
	}
}
