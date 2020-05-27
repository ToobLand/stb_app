import * as actionTypes from './actionTypes';
import initialState from './initState.js';


const reducer = (state=initialState, action)=>{
    let copy_state={...state};
    switch(action.type){
        case actionTypes.GETMODULE:
            if(action.error){
               
            }else{
                
                copy_state.currentModule=action.data;
            }
            break;
        case actionTypes.GETCONTENTBLOCKS:
            if(action.error){
               
            }else{
                
                copy_state.contentblocks=action.data;
            }
        break;
        default:
            break;
    }
    return copy_state;
}

export default reducer;