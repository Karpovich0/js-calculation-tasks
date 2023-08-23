export default function roundValue(value) {
	return Math.round((value + Number.EPSILON) * 100) / 100;
}
