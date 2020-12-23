import * as actionTypes from "./actionTypes";
import initialState from "./initState.js";

const reducer = (state = initialState, action) => {
	let copy_state = { ...state };
	switch (action.type) {
		case actionTypes.AUTH_START:
			if (action.error) {
			} else {
				copy_state.token = "";
				copy_state.loading = true;
				copy_state.error = "";
			}
			break;
		case actionTypes.AUTH_SUCCESS:
			if (action.error) {
			} else {
				copy_state.token = action.data.token;
				copy_state.loading = false;
				copy_state.error = "";
			}
			break;
		case actionTypes.AUTH_FAIL:
			if (action.error) {
			} else {
				copy_state.token = "";
				copy_state.loading = false;
				copy_state.error = "Onjuiste inloggevens";
			}
			break;
		default:
			break;
	}
	return copy_state;
};

export default reducer;
