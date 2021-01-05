import homeActionTypes from './homeActionTypes';

const homeActions={
    deleteItem: (itemId) => ({
        type: homeActionTypes.deleteItem,
        itemId
    })
}

export default homeActions;