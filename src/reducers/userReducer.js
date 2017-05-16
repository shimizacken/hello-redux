import { createStore } from 'redux';

export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'USER_ADDED_SUCCESS':
            return [...state, action.payload]
        case 'USER_REMOVE_SUCCESS':
            // let index = findWithAttr(state, 'id', action.payload);

            // let arr = [...state.splice(index, 1)];

            // return arr;

            const userId = action.payload;
            return state.filter(user => user.id !== userId);
        default:
            return state;
    }
};

function findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}