 
import { applyMiddleware, combineReducers, legacy_createStore}from "redux"
import {thunk}from "redux-thunk";
import{logger} from "redux-logger"
import reducer from "./Signin/Reducer";






export const rootreducer=combineReducers({
  sign:reducer,
})



 export const store=legacy_createStore(
    rootreducer,
    applyMiddleware(logger,thunk)
 )