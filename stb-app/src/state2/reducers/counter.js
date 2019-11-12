import * as actionTypes from '../actions';
import initialState from '../initialState.js';

const reducer = (state=initialState, action)=>{
    let copy_state={...state};
    switch(action.type){
        case actionTypes.INCREMENT:
            copy_state.counter=state.counter+action.payload.value;
            break;
        case actionTypes.CHANGEVAL:
            if(action.payload.value==='' || action.payload.value===null){
                action.payload.value=0;
            }
            copy_state.changeVal=parseInt(action.payload.value);
            break;
    }
    return copy_state;
}

export default reducer;