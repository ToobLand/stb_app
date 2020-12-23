import * as actionTypes from "./actionTypes";
import axios from "axios";

export const saveNewQuestion = (
	id_contentblock,
	id_questionType,
	text,
	answers
) => {
	return async (dispatch) => {
		return axios
			.post("https://stb-app-core.herokuapp.com/save/question/", {
				id_contentblock: id_contentblock,
				id_questionType: id_questionType,
				text: text,
			})
			.then(async (response) => {
				const id_question = response.data.result.rows[0].id;
				let answerText, answerResult;
				for (let i = 0; i < answers.length; i++) {
					answerText = answers[i].text;
					answerResult = answers[i].result;
					try {
						let result = await axios.post(
							"https://stb-app-core.herokuapp.com/save/question/",
							{
								id_contentblock: id_contentblock,
								id_question: id_question,
								text: answerText,
								result: answerResult,
							}
						);
					} catch (error) {
						throw error;
					}
				}

				dispatch(saveNewQuestionSynch(id_question));
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const saveNewQuestionSynch = (id_question) => {
	return {
		type: actionTypes.SAVEQUESTION,
		id_question: id_question,
	};
};
