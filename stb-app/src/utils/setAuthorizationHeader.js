import axios from "axios";

export default (token = null) => {
	console.log("ben hier");
	if (token) {
		axios.defaults.headers.common.authorization = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common.authorization;
	}
};
