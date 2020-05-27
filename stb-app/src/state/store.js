import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import folderReducer from './folder/reducers';
import moduleReducer from './module/reducers';
const rootReducer = combineReducers({
    folder:folderReducer,
    module:moduleReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;