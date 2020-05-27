import { connect } from 'react-redux';
import CardList from './CardList.component';
import * as actionCreators from '../../../../../state/folder/actionCreators';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    list:state.folder.list,
    id_folder:state.folder.id_folder,
    movingState:state.folder.movingState,
    moving_id_folder:state.folder.moving_id_folder
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    setMoving: ()=>dispatch(actionCreators.setMoving()),
    unsetMoving: ()=>dispatch(actionCreators.unsetMoving()),
    setMovingIdFolder: (id)=>dispatch(actionCreators.setMovingIdFolder(id))
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(CardList));
