import resultTemplate from "./resultTemplate.js";

export default function pushQuestion(resultObject, buffer) {
	let microBuffer = [...buffer];
	microBuffer.push(resultObject);
	resultTemplate.paths.list.push(microBuffer);
}
