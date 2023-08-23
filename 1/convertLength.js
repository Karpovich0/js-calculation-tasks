import convertationRules from "./convertationRules.js";
import roundValue from "./roundValue.js";
import parseInput from "./parseInput.js";

export default function convertlength(inputDataJson) {
	const { distance, convertTo } = parseInput(inputDataJson);

	const { unit, value } = distance;

	const unitRule1 = convertationRules[unit].conversion;
	const unitRule2 = convertationRules[convertTo].conversion;
	let result = (value * unitRule1) / unitRule2;
	result = roundValue(result);

	return JSON.stringify({ unit: convertTo, value: result });
}
