export default function sortByItems(rule, data) {
	data.sort((a, b) => (a[rule] > b[rule] ? 1 : -1));
}
