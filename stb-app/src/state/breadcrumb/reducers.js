import * as actionTypes from "./actionTypes";
import initialState from "./initState.js";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SAVECRUMBS:
			let new_crumb = { pathname: action.pathname, title: "don't know yet" };
			console.log("crumb reducer");
			return {
				...state,
				crumbs: [...state.crumbs, new_crumb],
			};
			break;
	}
	return state;
};

export default reducer;
