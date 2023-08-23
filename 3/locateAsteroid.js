import { stepPosition, position } from "./stepPosition.js";
import resultTemplate from "./resultTemplate.js";

export default function locateAsteroid() {
	for (let i = 0; i < Object.keys(position).length; i++) {
		stepPosition(Object.keys(position)[i], 10);
		stepPosition(Object.keys(position)[i], 1);
	}

	resultTemplate.result.location = position;

	return JSON.stringify(resultTemplate);
}
