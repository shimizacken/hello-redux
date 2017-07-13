import {combineReducers, createStore} from 'redux';
import {usersReducer, bulkusersReducer} from './reducers/userReducer';

const reducers = combineReducers({
    user: usersReducer,
    bulkusers: bulkusersReducer
});

const mainStore = createStore(reducers, {});

export default mainStore;