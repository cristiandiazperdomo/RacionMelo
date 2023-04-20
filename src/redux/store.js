import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { rootReducers } from './reducers/index.js';

const composedEnhansers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(rootReducers, composedEnhansers);

export default store;