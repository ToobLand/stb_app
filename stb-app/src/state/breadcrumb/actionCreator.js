import * as actionTypes from "./actionTypes";

export const getCrumbs = () => {
	return {
		type: actionTypes.GETCRUMBS,
	};
};

export const saveCrumbs = (pathname) => {
	return {
		type: actionTypes.SAVECRUMBS,
		pathname: pathname,
	};
};
