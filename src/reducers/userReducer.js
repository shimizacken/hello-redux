import { createStore } from 'redux';

export const userReducer = (state = {}, action) => {

    switch (action.type) {
        case 'LOAD_USER_SUCCESS':
            return action.payload;
        default:
            return state;
    }
};