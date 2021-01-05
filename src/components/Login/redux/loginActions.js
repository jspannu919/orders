import loginActionTypes from './loginActionTypes';

const loginActions = {
    login: userObj => ({
        type: loginActionTypes.login,
        userObj
    }),
    logout: () => ({
        type: loginActionTypes.logout,
    })
};

export default loginActions;