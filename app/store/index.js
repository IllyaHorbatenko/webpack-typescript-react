import AppReducer from './reducers';

import {applyMiddleware, createStore, compose} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(AppReducer, composeEnhancers(applyMiddleware(promise(), thunk, logger())));