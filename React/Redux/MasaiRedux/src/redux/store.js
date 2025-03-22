import taskReducer from "./taskReducer";
import {legacy_createStore as createStore, combineReducers} from "redux";

const rootReducer = combineReducers({
    tasks: taskReducer
})

const store = createStore(rootReducer);

export default store