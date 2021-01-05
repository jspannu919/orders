import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import homeActions from './homeActions';

const mapStateToProps = state => ({
    data: state.HomeReducer
});

const mapDispatchToProps = dispatch => ({
    homeActions: bindActionCreators(homeActions, dispatch)
});

const homeRedux = Home => connect(mapStateToProps, mapDispatchToProps) (Home);

export default homeRedux;