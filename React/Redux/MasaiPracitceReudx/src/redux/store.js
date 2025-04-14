import { taskReducer } from "./taskReducer";
import {thunk} from "redux-thunk";
import logger from 'redux-logger';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

const middelware = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({
    tasks: taskReducer
})

export const store = createStore(rootReducer, middelware);