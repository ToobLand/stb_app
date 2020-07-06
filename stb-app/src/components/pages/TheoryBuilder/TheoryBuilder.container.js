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
    getTheory: (id_contentblock)=>dispatch(actionCreators.getTheory(id_contentblock)),
    saveTheory: (id_contentblock,id_theoryTemplate,jsonText)=>dispatch(actionCreators.saveTheory(id_contentblock,id_theoryTemplate,jsonText)),
    updateTheory: (id,id_theoryTemplate,jsonText)=>dispatch(actionCreators.updateTheory(id,id_theoryTemplate,jsonText))
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(TheoryBuilder));
