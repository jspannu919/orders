import loginActionTypes from './loginActionTypes';

const initialState = {
    userObj: null,
    isLoggedIn: false
};

const loginReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch(action.type){
        case loginActionTypes.login:
            return {
                ...state,
                isLoggedIn: true,
                userObj: action.userObj
            }
        case loginActionTypes.logout:
            return {
                ...state,
                isLoggedIn: false,
                userObj: null
            }
        default:
            return state;
    }
}

export default loginReducer;