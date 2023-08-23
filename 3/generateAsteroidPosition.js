import randomIntFromInterval from "./randomIntFromInterval.js";

function generatePosition() {
	return randomIntFromInterval(0, 100);
}

function generateAsteroidPosition() {
	return { x: generatePosition(), y: generatePosition(), z: generatePosition() };
}

export default generateAsteroidPosition;
