import { userCart } from "./userCart";
import { authUser } from "./authUser";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    user: authUser,
    cart: userCart
})