import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer.js';
import { itemReducer } from './itemReducer.js';
import { commentsReducer } from './commentsReducer.js';
import { userReducer } from './userReducer.js';

export const rootReducers = combineReducers({
    cartReducer,
    itemReducer,
    commentsReducer,
    userReducer,
});