import { combineReducers } from 'redux';

//import reducers
import HomeReducer from '../components/Home/redux/homeReducer';
import LoginReducer from '../components/Login/redux/loginReducer';

const rootReducer = combineReducers({
    HomeReducer,
    LoginReducer,
  });

export default rootReducer;
  