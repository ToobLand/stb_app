import * as actionTypes from "./actionTypes";
import { getList } from "../folder/actionCreators";
import axios from "axios";

export const getContentblocksSynch = (data) => {
	return {
		type: actionTypes.GETCONTENTBLOCKS,
		data: data,
	};
};

export const getContentblocks = (id_module) => {
	return (dispatch) => {
		return axios
			.post("https://stb-app-core.herokuapp.com/get/contentblock/", {
				id_module: id_module,
			})
			.then((response) => {
				dispatch(getContentblocksSynch(response.data.result));
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const saveContentblock = (data) => {
	return (dispatch) => {
		return axios
			.post("https://stb-app-core.herokuapp.com/save/contentblock/", {
				id_user: data.payload.id_user.toString(),
				id_module: data.payload.id_module.toString(),
				contenttype: data.payload.type,
			})
			.then((response) => {
				dispatch(getContentblocks(data.payload.id_module.toString()));
			})
			.catch((error) => {
				throw error;
			});
	};
};
export const updateContentblockTitle = (id, title) => {
	return (dispatch) => {
		return axios
			.post("https://stb-app-core.herokuapp.com/save/contentblock/", {
				id: id,
				title: title.toString(),
			})
			.then((response) => {
				dispatch(updateContentblockTitleSynch(response));
			})
			.catch((error) => {
				throw error;
			});
	};
};
export const updateContentblockTitleSynch = (data) => {
	return {
		type: actionTypes.UPDATECONTENTBLOCKTITLE,
		data: data,
	};
};
export const saveModule = (data) => {
	return (dispatch) => {
		const id_folder = data.payload.id_folder;
		return axios
			.post("https://stb-app-core.herokuapp.com/save/module/", {
				id_user: "1",
				id_folder: data.payload.id_folder,
				title: data.payload.title,
				description: data.payload.description,
			})
			.then((response) => {
				dispatch(getList(id_folder));
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const getModuleSynch = (data) => {
	return {
		type: actionTypes.GETMODULE,
		data: data,
	};
};

export const getModule = (id_module) => {
	return (dispatch) => {
		let getModule = "";
		return axios
			.post("https://stb-app-core.herokuapp.com/get/module/", { id: id_module })
			.then((response) => {
				getModule = response.data.result[0];
				dispatch(getModuleSynch(getModule));
			})
			.catch((error) => {
				throw error;
			});
	};
};
