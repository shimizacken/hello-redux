import { createStore } from 'redux';

export const userReducer = (state = [], action) => {

    switch (action.type) {
        case 'LOAD_USER_SUCCESS':

            return [...state, action.payload]
        default:
            return state;
    }
};

export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'USER_ADDED_SUCCESS':
            return [...state, action.payload]
        default:
            return state;
    }
};