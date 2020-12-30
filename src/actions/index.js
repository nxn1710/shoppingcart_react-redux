import * as types from "../constants/ActionTypes";

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity,
    };
};

export const changMessage = (message) => {
    return {
        type: types.CHANGE_MSG,
        message,
    };
};

export const actUpateQuantity = (product, quantity) => {
    return {
        type: types.UPDATE_TO_CART,
        product,
        quantity,
    };
};

export const actDeleteCartItem = (product) => {
    return {
        type: types.DELETE_FROM_CART,
        product,
    };
};
