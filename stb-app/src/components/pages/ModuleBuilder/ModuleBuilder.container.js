import { connect } from 'react-redux';
import ModuleBuilder from './ModuleBuilder.component';
import * as actionCreators from '../../../state/module/actionCreators';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentModule:state.module.currentModule,
    contentblocks:state.module.contentblocks
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    getModule: (id_module)=>dispatch(actionCreators.getModule(id_module)),
    getContentblocks: (id_module)=>dispatch(actionCreators.getContentblocks(id_module))
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(ModuleBuilder));
