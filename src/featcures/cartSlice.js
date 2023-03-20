import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    carts:[]
}
const cartsSlice = createSlice({
    name:"cartsSlice",
    initialState,
    reducers:{
        addToState: (state,action)=>{
            state.carts.push(action.payload) 
        }
    }
})
export const {addToState} = cartsSlice.actions
export default cartsSlice.reducer;
