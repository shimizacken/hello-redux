import { combineReducers, createStore } from 'redux';
import {userReducer} from './reducers/userReducer';
import {usersReducer} from './reducers/usersReducer';
import {tweetsReducer} from './reducers/tweetReducer';

const reducers = combineReducers({
    user: userReducer,
    users: usersReducer,
    tweets: tweetsReducer
});

const mainStore = createStore(reducers, {});

export default mainStore;