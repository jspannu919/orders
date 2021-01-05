import homeActionTypes from './homeActionTypes';

const initialState = {
    orders: []
}

const homeReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch(action.type){
        case homeActionTypes.deleteItem:
            return {
                ...state
            }
        default:
            return state;
    }   
}

export default homeReducer;
