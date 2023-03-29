import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    products:[],
    carts:[],
    Favorites:[]
    
}
const cartsSlice = createSlice({
    name:"cartsSlice",
    initialState,
    reducers:{
        addToProducts: (state,action)=>{
            state.products = action.payload 
        },
        addToFavorites:(state,action)=>{
            state.Favorites.push(action.payload)
            
        },
        filterItemsByCategory:(state,action)=>{
            const {category,intialStae}= action.payload
            state.products = intialStae.filter((items)=> items.category === category )
        }
        
    }
    

})
export const {addToProducts,addToFavorites,filterItemsByCategory} = cartsSlice.actions
export default cartsSlice.reducer;
