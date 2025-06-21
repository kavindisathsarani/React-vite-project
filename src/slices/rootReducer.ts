import {combineReducers} from "redux";
import productReducer from "./productsSlice.ts";
import cartReducer from "./cartSlice.ts";

combineReducers({
    products:productReducer,
    cart:cartReducer
});

export const rootReducer = combineReducers({products:productReducer,cart:cartReducer});

export type RootState = ReturnType<typeof rootReducer>;