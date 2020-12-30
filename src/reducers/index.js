import { combineReducers } from 'redux'
import product from './product'
import message from './message'
import cart from './cart'
const appReducer = combineReducers({
    products: product,
    cart,
    message,
});

export default appReducer;