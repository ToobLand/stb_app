import * as actionTypes from './actionTypes';
import initialState from './initState.js';


const reducer = (state=initialState, action)=>{
    let copy_state={...state};
    switch(action.type){
        case actionTypes.GETTHEORY:
            if(action.error){
               
            }else{
                
                copy_state.theory=action.data;
            }
            break;
        case actionTypes.SAVETHEORY:
            if(action.error){
               
            }else{
                
                copy_state.theory=action.data;
            }
        break;
        default:
            break;
    }
    return copy_state;
}

export default reducer;