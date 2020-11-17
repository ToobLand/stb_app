import React from "react";
import { Provider } from "react-redux";
import {
	LandingPage,
	ModuleBuilder,
	TheoryBuilder,
	SignIn,
	SignUp,
	ExerciseBuilder,
} from "./components/pages/index.js";
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

export const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<Provider store={store}>
				<CssBaseline />
				<div className="App">
					<Switch>
						<Route path="/signin/" component={SignIn} />
						<Route path="/signup/" component={SignUp} />
						<Route path="/folder/:id_folder/" component={LandingPage} />

						<Route path="/module/:id_module/" component={ModuleBuilder} />
						<Route
							path="/theoryblock/:id_contentblock/"
							component={TheoryBuilder}
						/>
						<Route
							path="/questionblock/:id_contentblock/"
							component={ExerciseBuilder}
						/>

						<Route path="/" component={LandingPage} />
					</Switch>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
