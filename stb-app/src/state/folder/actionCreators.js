import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getListSynch = (data) => {
	return {
		type: actionTypes.GETLIST,
		data: data,
	};
};

export const getList = (id_folder) => {
	return (dispatch) => {
		let getFolders = "";
		let getModules = "";
		return axios
			.post("https://stb-app-core.herokuapp.com/get/folder/", {
				id_folder: id_folder,
			})
			.then((response) => {
				getFolders = response.data;
				if (getFolders.result.length == 0) {
					getFolders.result = "empty";
				}
				axios
					.post("https://stb-app-core.herokuapp.com/get/module/", {
						id_folder: id_folder,
					})
					.then((response) => {
						getModules = response.data;
						if (getModules.result.length == 0) {
							getModules.result = "empty";
						}
						const combineObj = {
							folders: getFolders.result,
							modules: getModules.result,
						};

						dispatch(getListSynch(combineObj));
					})
					.catch((error) => {
						throw error;
					});
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const saveFolder = (data) => {
	return (dispatch) => {
		return axios
			.post("https://stb-app-core.herokuapp.com/folder/save/", {
				id_user: "1",
				id_folder: data.payload.id_folder,
				title: data.payload.title,
				description: data.payload.description,
			})
			.then((response) => {
				dispatch(getList(data.payload.id_folder));
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const getById = (id) => {
	return (dispatch) => {
		return axios
			.post("https://stb-app-core.herokuapp.com/get/folder/", {
				id: id,
			})
			.then((response) => {
				dispatch(getByIdSynch(response.data.result[0]));
			})
			.catch((error) => {
				throw error;
			});
	};
};
export const getByIdSynch = (data) => {
	return {
		type: actionTypes.GETBYID,
		data: data,
	};
};
export const setFolderId = (id) => {
	return {
		type: actionTypes.SETFOLDERID,
		id: id,
	};
};

export const setMoving = () => {
	return {
		type: actionTypes.SETMOVING,
	};
};
export const unsetMoving = () => {
	return {
		type: actionTypes.UNSETMOVING,
	};
};
export const setMovingIdFolder = (id) => {
	return {
		type: actionTypes.SETMOVINGIDFOLDER,
		id: id,
	};
};
