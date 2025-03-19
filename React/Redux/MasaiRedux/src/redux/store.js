import taskReducer from "./taskReducer";
import {legacy_createStore as createStore, combineReducers} from "redux";

const rootReducer = combineReducers({
    taskReducer,
})

const store = createStore(rootReducer);

export default store