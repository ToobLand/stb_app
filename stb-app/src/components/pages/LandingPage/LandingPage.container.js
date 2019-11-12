import { connect } from 'react-redux';
import LandingPage from './LandingPage.component';
import * as actionTypes from '../../../state2/actions';
const mapStateToProps = state => {
  return {
    ctr:state.counter.counter,
    change:state.counter.changeVal
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onIncrementCounter: (value)=>dispatch({type:actionTypes.INCREMENT,payload:{value:value}}),
    changeVal: (value)=>dispatch({type:actionTypes.CHANGEVAL,payload:{value:value}})
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(LandingPage);
