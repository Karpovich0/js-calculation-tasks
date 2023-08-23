import generateAsteroidPosition from "./generateAsteroidPosition.js";
import findDistance from "./findDistance.js";
import resultTemplate from "./resultTemplate.js";

export const position = { x: 0, y: 0, z: 0 };
let asteroidPosition = generateAsteroidPosition();
const distanceToAsteroid = findDistance(position, asteroidPosition);
let currentDistance = distanceToAsteroid;

console.log("asteroid: ", asteroidPosition);

export function stepPosition(prop, step) {
	let i = 0;
	//positions
	let oldPosition = position[prop];
	let resultPosition = 0;
	//distances
	let prevDistance = currentDistance;
	let distance;
	do {
		// counter
		resultTemplate.result.probes.count++;
		position[prop] = position[prop] + step;
		//store a probe
		resultTemplate.result.probes.coordinates.push({ ...position });
		// find distance for a new probe
		distance = findDistance(position, asteroidPosition);
		if (distance < prevDistance) {
			// saving a position that is definitely less than a position of asteroid to avoid subtraction [read below]
			resultPosition = oldPosition;
			// saving a position that is the closest to asteroid's position to check it in the next iteration of cycle
			oldPosition = position[prop];
			// saving a distace that belongs to resultPosition to avoid subtraction [read below]
			currentDistance = prevDistance;
			// saving the closest distance to asteroid to check it in the next iteration of cycle
			prevDistance = distance;
			i++;
		} else {
			// we need first condition for optimization - without it, it will still work(but take away "+5" form "resultPosition + 5"), but it will increase number of probes on 15 points
			if (step === 10 && resultPosition === 0) {
				position[prop] = resultPosition;
			} else if (step === 10) {
				// +5 appears from logic that, for example, 40 is closer to asteroid than 30, but we still take 30, because actual position can be 36, and if we will take 40, we will need to do subtraction from 40 to 36 [read here]
				position[prop] = resultPosition + 5;
			} else {
				position[prop] = oldPosition;
			}
			break;
		}
	} while (i < 16);
	//we need i < 16 for situation when resultPosition === 0 and potential coordinate of asteroid can be 14, for all other situations i < 10 is enough
}
