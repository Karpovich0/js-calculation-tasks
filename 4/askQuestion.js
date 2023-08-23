import getQuestion from "./getQuestion.js";
import pushQuestion from "./pushQuestion.js";

export const buffer = [];

export default function askQuestion(question) {
	let answerArray = question[Object.keys(question)[0]];
	let rootArray = question[Object.keys(question)[1]];
	let isLastQuestion = question[Object.keys(question)[3]];

	if (isLastQuestion) {
		pushQuestionWithBuffer(false);
		buffer.pop();
		return;
	}

	rootArray.forEach((item, index) => {
		if (item !== false) {
			buffer.push(createResultObject(index));
			askQuestion(getQuestion(item));
		} else {
			pushQuestionWithBuffer(index);
		}
	});

	function createResultObject(index) {
		let resultObject = {};
		if (index !== false) {
			resultObject[Object.keys(question)[0]] = answerArray[index];
		} else {
			resultObject[Object.keys(question)[0]] = answerArray.join("/");
		}

		return resultObject;
	}

	function pushQuestionWithBuffer(index) {
		pushQuestion(createResultObject(index), buffer);
	}
}
