import * as types from "../constants/ActionTypes";

let cartStore = JSON.parse(localStorage.getItem("cart"));
let initialState = cartStore ? cartStore : [];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            state = addToCart(state, action.product);
            localStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        case types.UPDATE_TO_CART:
            state = updateToCart(state, action.product, action.quantity);
            localStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        case types.DELETE_FROM_CART:
            state = deleteProduct(state, action.product);
            localStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
};

const deleteProduct = (state, product) => {
    let index = findIndex(state, product);
    // if (state[index].quantity > 1 && state[index].product.inventory) {
    state.splice(index, 1);
    // }
    return state;
};

const updateToCart = (state, product, quantity) => {
    let index = findIndex(state, product);
    // if (state[index].quantity > 1 && state[index].product.inventory) {
    state[index].quantity += quantity;
    // }
    return state;
};

const findIndex = (state, product) => {
    let i = -1;
    state.forEach((element, index) => {
        if (element.product.id === product.id) {
            i = index;
        }
    });
    return i;
};

const addToCart = (state, product) => {
    let index = findIndex(state, product);
    if (index !== -1) {
        state[index].quantity++;
    } else {
        state = [...state, { product, quantity: 1 }];
    }
    return state;
};

export default cart;
