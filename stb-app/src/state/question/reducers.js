import * as actionTypes from "./actionTypes";
import initialState from "./initState.js";

const reducer = (state = initialState, action) => {
	let copy_state = { ...state };
	switch (action.type) {
		case actionTypes.SAVEQUESTION:
			if (action.error) {
			} else {
				copy_state.question.id_question = action.id_question;
			}
			break;

		default:
			break;
	}
	return copy_state;
};

export default reducer;
