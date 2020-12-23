import axios from "axios";
import setAuthorizationHeader from "./setAuthorizationHeader";
import store from "../state/store";

import * as actionCreators from "../state/auth/actionCreators";
const UNAUTHORIZED = 401;
const { dispatch } = store;

export default () => {
	axios.interceptors.response.use(
		async (response) => {
			if (response.data.refreshToken) {
				console.log("refreshing token in storage");
				localStorage.removeItem("token");
				localStorage.setItem("token", response.data.refreshToken);
				setAuthorizationHeader();
				setAuthorizationHeader(response.data.refreshToken);
			}
			return response;
		},
		(error) => {
			const { status } = error.response;
			if (status === UNAUTHORIZED) {
				console.log("Setting interceptors");
				localStorage.removeItem("token");
				setAuthorizationHeader();

				dispatch(actionCreators.authFail());
				window.location.href = "/signin/";
			}
			return Promise.reject(error);
		}
	);
};
