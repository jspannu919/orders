import homeActionTypes from './homeActionTypes';

const homeActions={
    deleteOrder: (orderId) => ({
        type: homeActionTypes.deleteOrder,
        orderId
    }),
    addOrder: (order) => ({
        type: homeActionTypes.addOrder,
        order
    })
}

export default homeActions;