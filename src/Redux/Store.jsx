 
import { applyMiddleware, combineReducers, legacy_createStore}from "redux"
import {thunk}from "redux-thunk";
import{logger} from "redux-logger"
import reducer from "./Signin/Reducer";
import cartReducer from "./Cart.jsx/cartreducer";






export const rootreducer=combineReducers({
  sign:reducer,
  cart:cartReducer
})



 export const store=legacy_createStore(
    rootreducer,
    applyMiddleware(logger,thunk)
 )