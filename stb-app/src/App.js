import React, { useEffect } from "react";
import { Provider } from "react-redux";
import {
	LandingPage,
	ModuleBuilder,
	TheoryBuilder,
	SignIn,
	SignUp,
	ExerciseBuilder,
} from "./components/pages/index.js";
import { PrivateRoute } from "./components/commons/index";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "./state/store";
import { createBrowserHistory } from "history";
import {
	Router,
	Route,
	useLocation,
	Switch,
	useParams,
} from "react-router-dom";
import { checkAuth } from "./state/auth/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import Handler401 from "./utils/handler401";

export const history = createBrowserHistory();

function AppWrapper() {
	return (
		<Router history={history}>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	);
}

function App() {
	let setHeader = async () => {
		// auth
		if (localStorage.getItem("token")) {
			setAuthorizationHeader(localStorage.getItem("token"));
			//dispatch(authSuccess(localStorage.getItem("token")));
		}
		Handler401();
		return true;
	};
	setHeader();

	return (
		<div>
			<CssBaseline />
			<div className="App">
				<Switch>
					<Route path="/signin/" component={SignIn} />
					<Route path="/signup/" component={SignUp} />
					<PrivateRoute path="/folder/:id_folder/" component={LandingPage} />

					<PrivateRoute path="/module/:id_module/" component={ModuleBuilder} />
					<PrivateRoute
						path="/theoryblock/:id_contentblock/"
						component={TheoryBuilder}
					/>
					<PrivateRoute
						path="/questionblock/:id_contentblock/"
						component={ExerciseBuilder}
					/>

					<PrivateRoute path="/" component={LandingPage} />
				</Switch>
			</div>
		</div>
	);
}

export default AppWrapper;
