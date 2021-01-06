
import homeActionTypes from './homeActionTypes';
import data from '../../../data/data.json';

const initialState = {
    orders: localStorage.getItem('ordersData') ? JSON.parse(localStorage.getItem('ordersData')) : data
}

const homeReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch(action.type){
        case homeActionTypes.deleteOrder:
            return {
                orders: state.orders.filter((order) => order.key !== action.orderId)
            }
        case homeActionTypes.addOrder:
            return {
                orders: [
                    action.order,
                    ...state.orders
                ]
            }
        default:
            return state;
    }   
}

export default homeReducer;
