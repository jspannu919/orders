import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import loginActions from './loginActions';

const mapStateToProps = state => ({ data: state.LoginReducer });

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
});

const loginRedux = Login => connect(mapStateToProps, mapDispatchToProps) (Login);

export default loginRedux;