import { combineReducers } from "redux";
import apiDataReducer from "./apiData";
import loadingDataReducer from "./loadingData";
import localDataReducer from "./localData";
const temporaryReducers = combineReducers({
    localData: localDataReducer,
    apiData: apiDataReducer,
    loadingData: loadingDataReducer
    
});

export { temporaryReducers };