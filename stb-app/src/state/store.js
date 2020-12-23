import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import folderReducer from "./folder/reducers";
import moduleReducer from "./module/reducers";
import theoryReducer from "./theory/reducers";
import authReducer from "./auth/reducers";

const rootReducer = combineReducers({
	folder: folderReducer,
	module: moduleReducer,
	theory: theoryReducer,
	auth: authReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
