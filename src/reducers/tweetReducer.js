import { createStore } from 'redux';

export const tweetsReducer = (state = {}, action) => {

    switch (action.type) {
        case 'TWEET_POST_SUCCESS':
            return action.payload;
        default:
            return state;
    }
};

