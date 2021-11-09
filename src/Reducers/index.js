import counterReducer from "./counter";
import loogedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers =  combineReducers({
    counter:counterReducer,
    logged:loogedReducer
})

export default allReducers;