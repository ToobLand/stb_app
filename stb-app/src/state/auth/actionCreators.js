import * as actionTypes from "./actionTypes";
import axios from "axios";
import setAuthorizationHeader from "../../utils/setAuthorizationHeader";
import jwt from "jwt-decode";

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START,
	};
};

export const authSuccess = (data) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		data: data,
	};
};

export const authFail = () => {
	return {
		type: actionTypes.AUTH_FAIL,
	};
};

export const auth = (data) => {
	return (dispatch) => {
		dispatch(authStart());
		return axios
			.post("https://stb-app-core.herokuapp.com/custom/login/", {
				email: data.payload.email,
				password: data.payload.password,
			})
			.then((response) => {
				if (response.data.result.hasOwnProperty("token")) {
					localStorage.setItem("token", response.data.result.token);
					//console.log(jwt(response.data.result.token)); decode token for payload
					setAuthorizationHeader(response.data.result.token);
					dispatch(authSuccess(response.data.result));
				} else {
					localStorage.removeItem("token");
					setAuthorizationHeader();
					dispatch(authFail());
				}
			})
			.catch((error) => {
				throw error;
			});
	};
};
export const checkAuth = () => {
	return (dispatch) => {
		if (localStorage.getItem("token")) {
			console.log("ben hier1");
			setAuthorizationHeader(localStorage.getItem("token"));
			dispatch(authSuccess(localStorage.getItem("token")));
		}
	};
};
