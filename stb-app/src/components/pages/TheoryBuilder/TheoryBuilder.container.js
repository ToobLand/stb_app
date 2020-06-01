import { connect } from 'react-redux';
import TheoryBuilder from './TheoryBuilder.component';
import * as actionCreators from '../../../state/theory/actionCreators';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    theory:state.theory.theory
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    getTheory: (id)=>dispatch(actionCreators.getTheory(id)),
    saveTheory: (id_contentblock,jsonText)=>dispatch(actionCreators.saveTheory(id_contentblock,jsonText)),
    updateTheory: (id,jsonText)=>dispatch(actionCreators.saveTheory(id,jsonText))
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(TheoryBuilder));
