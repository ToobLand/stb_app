import * as actionTypes from '../actions';
import initialState from '../initialState.js';

const reducer = (state=initialState, action)=>{
    let copy_state={...state};
    
    return copy_state;
}

export default reducer;