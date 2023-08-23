import { inputDataJson } from "./inputDataJson.js";
import convertlength from "./convertLength.js";

try {
	console.log(convertlength(inputDataJson));
} catch (err) {
	console.log("Error " + err.name + ": " + err.message + "\n" + err.stack);
}
