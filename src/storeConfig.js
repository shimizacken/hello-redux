import { combineReducers, createStore } from 'redux';
import {usersReducer} from './reducers/userReducer';

const reducers = combineReducers({
    user: usersReducer
});

const mainStore = createStore(reducers, {});

export default mainStore;