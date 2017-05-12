import { createStore } from 'redux';

export const usersReducer = (state = {}, action) => {

    switch (action.type) {
        case 'LOAD_USERS_SUCCESS':
            return action.payload;
        default:
            return state;
    }
};