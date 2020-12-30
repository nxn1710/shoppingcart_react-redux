import * as Message from "../constants/Message";
import * as types from "../constants/ActionTypes"
let initalState = Message.WELCOME_MSG;

const message = (state = initalState, action) => {
    switch (action.type) {
        case types.CHANGE_MSG:
            return action.message;
        default:
            return state;
    }
};

export default message;