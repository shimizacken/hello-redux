import { createStore } from 'redux';

export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'USER_ADDED_SUCCESS':
            return [...state, action.payload]
        case 'USER_REMOVE_SUCCESS':
            const userId = action.payload;
            return state.filter(user => user.id !== userId);
        default:
            return state;
    }
};

export const bulkusersReducer = (state = [], action) => {

    switch (action.type) {
        case 'MULTIPLE_USERS_ADDED_SUCCESS':
            return [action.payload]
        case 'MULTIPLE_USERS_APPEND_SUCCESS':
            let newState = Object.assign(state);
            return newState.concat(action.payload);
        default:
            return state;
    }
};