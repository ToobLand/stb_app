import * as actionTypes from './actionTypes';
import initialState from './initState.js';


const reducer = (state=initialState, action)=>{
    let copy_state={...state};
    switch(action.type){
        case actionTypes.GETLIST:
            if(action.error){
               
            }else{
                console.log('in reducer');
                copy_state.list=action.data;
            }
            break;
        case actionTypes.SETFOLDERID:
            copy_state.id_folder=action.id;
        break;
        case actionTypes.SETMOVING:
            copy_state.movingState=1;
        break;
        case actionTypes.UNSETMOVING:
            copy_state.movingState=0;
        break;
        case actionTypes.SETMOVINGIDFOLDER:
            copy_state.moving_id_folder=action.id;
        break;
        default:
            break;
    }
    return copy_state;
}

export default reducer;