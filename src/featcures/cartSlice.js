import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    products:[],
    carts:[]
}
const cartsSlice = createSlice({
    name:"cartsSlice",
    initialState,
    reducers:{
        addToProducts: (state,action)=>{
            state.products.push(action.payload) 
        }
    }
})
export const {addToProducts} = cartsSlice.actions
export default cartsSlice.reducer;
