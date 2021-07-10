import {applyMiddleware, combineReducers, createStore} from "redux";

import {customReducer} from "./customRecur";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
 users:customReducer
})
 export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))