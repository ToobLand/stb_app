import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getTheorySynch = (data) => {
	return {
		type: actionTypes.GETTHEORY,
		data: data,
	};
};

export const getTheory = (id_contentblock) => {
	return (dispatch) => {
		return axios
			.post("https://stb-app-core.herokuapp.com/get/theory/", {
				id_contentblock: id_contentblock,
			})
			.then((response) => {
				dispatch(getTheorySynch(response.data.result[0]));
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const saveTheory = (id_contentblock, id_theorytemplate, text) => {
	return (dispatch) => {
		return axios
			.post("https://stb-app-core.herokuapp.com/save/theory/", {
				id_contentblock: id_contentblock,
				id_theorytemplate: id_theorytemplate,
				id_user: "1",
				text: text,
			})
			.then((response) => {
				const state_respons = {
					id: response.data.result.rows[0].id,
					id_contentblock: id_contentblock,
					id_theorytemplate: id_theorytemplate,
					id_user: "1",
					text: text,
				};
				dispatch(saveTheorySynch(state_respons));
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const updateTheory = (id_theory, id_theorytemplate, text) => {
	return (dispatch) => {
		return axios
			.post("https://stb-app-core.herokuapp.com/save/theory/", {
				id: id_theory.toString(),
				id_theorytemplate: id_theorytemplate.toString(),
				text: text,
			})
			.then((response) => {
				dispatch(saveTheorySynch(response.data.result));
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const saveTheorySynch = (data) => {
	return {
		type: actionTypes.SAVETHEORY,
		data: data,
	};
};
