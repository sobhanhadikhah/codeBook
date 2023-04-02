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
        removeFromFavorite:(state,action)=>{
            
        state.Favorites = state.Favorites.filter((items)=>{
            return items.id !== action.payload
          })  
        },
        handleFilter:(state,action)=>{
            switch (action.payload.type){
                case `reset`:
                    state.products = action.payload.intialStae
                break;
                case `category`:
                    const {option,intialStae}= action.payload
                    state.products = intialStae.filter((items)=> items.category === option )
                break;
                case `lowPriceToHigh`:
                    state.products.sort((a,b)=> {
                        return Number(a.price) - Number(b.price)
                    })
                break;
                case `highPriceToLow`:
                    state.products.sort((a,b)=> {
                        return Number(b.price) - Number(a.price)
                    })
                    break;
                case `lowRateToHigh`:
                    state.products.sort((a,b)=>{
                        return Number(a.rating.rate) - Number(b.rating.rate)
                    })
                    break;
                case `highRateToLow`:
                    state.products.sort((a,b)=>{
                        return Number(b.rating.rate) - Number(a.rating.rate)
                    })
                    break;
                
                default:
                    break;
            }
        }
        
        
    }
    

})
export const {addToProducts,addToFavorites,removeFromFavorite,handleFilter} = cartsSlice.actions
export default cartsSlice.reducer;
