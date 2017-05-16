import { createStore } from 'redux';

export const userReducer = (state = [], action) => {

    switch (action.type) {
        case 'LOAD_USER_SUCCESS':

            return [...state, action.payload]
        default:
            return state;
    }
};

function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'USER_ADDED_SUCCESS':
            return [...state, action.payload]
        case 'USER_REMOVE_SUCCESS':

            let index = findWithAttr(state, 'id', action.payload);

            return [...state.splice(1, index)];
        default:
            return state;
    }
};