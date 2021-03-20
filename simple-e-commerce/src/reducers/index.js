import { userCart } from "./userCart";
import { authUser } from "./authUser";
import { combineReducers } from "redux";

export const allReducers = combineReducers({ userCart, authUser })