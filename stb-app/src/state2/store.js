import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counter.js';
import modulesReducer from './reducers/modules';
const rootReducer = combineReducers({
    counter:counterReducer,
    modules:modulesReducer
});
const store=createStore(rootReducer);

export default store;