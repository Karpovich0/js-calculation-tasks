import { inputDataJson } from "./inputDataJson.js";
import getData from "./getData.js";

try {
	console.log(getData(inputDataJson));
} catch (err) {
	console.log("Error " + err.name + ": " + err.message + "\n" + err.stack);
}
