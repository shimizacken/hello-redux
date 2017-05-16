import { combineReducers, createStore } from 'redux';
import {usersReducer, userReducer} from './reducers/userReducer';

const reducers = combineReducers({
    user: userReducer,
    users: usersReducer,
});

const mainStore = createStore(reducers, {
    users: []
});

export default mainStore;