import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import {setupListeners} from '@reduxjs/toolkit/query';
import { shopApi } from "../services/fakeShop"; 
export const store = configureStore({
    reducer:{
        cartState:cartSlice,
        [shopApi.reducerPath]: shopApi.reducer    
    },
    middleware: (getDefualtMiddeware)=>
    getDefualtMiddeware().concat(shopApi.middleware)
    
})
setupListeners(store.dispatch)