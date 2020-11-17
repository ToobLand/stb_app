import React from "react";
import {
	Router,
	Route,
	useLocation,
	Switch,
	useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCrumbs, saveCrumbs } from "../../../state/breadcrumb/actionCreator";

const Breadcrumb = (props) => {
	const location = useLocation();
	const crumbs = useSelector((state) => state.breadcrumb.crumbs);
	const dispatch = useDispatch();

	React.useEffect(() => {
		handleChange(location.pathname);
	}, [location]);

	const handleChange = (pathname) => {
		dispatch(saveCrumbs(pathname));
	};
	let output_crumbs = "";
	for (let i = 0; i < crumbs.length; i++) {
		output_crumbs += crumbs[i].pathname + " - " + crumbs[i].title + "<Br>";
	}
	return <div>{output_crumbs}</div>;
};
export default Breadcrumb;
