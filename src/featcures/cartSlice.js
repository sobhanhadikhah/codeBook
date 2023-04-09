import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    products:[],
    carts:[],
    totalPrice:0,
    Favorites:[],
    totalQuintity:0
    
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
        },
        addToCart: (state,action)=>{
            const itemIndex = state.carts.findIndex((item)=>{
                return item.id === action.payload.id
            })
            if (itemIndex >= 0 ) {
                state.carts[itemIndex].cartQuentity +=1;
                
            }else{

               const tempProduct =  {...action.payload,cartQuentity :1}
               state.carts.push(tempProduct)
            }

          // localStorage.setItem(`carts`,JSON.stringify(state.carts));
            
        },
        removeFromCart: (state,action)=>{
            const {id} = action.payload
            const itemIndex = state.carts.findIndex((item)=>{
                return item.id === id
            })
            if (itemIndex !== -1) {
                state.carts[itemIndex].cartQuentity--;
                if (state.carts[itemIndex].cartQuentity === 0) {
                    state.carts.splice(itemIndex,1)
                }
            }
            
        }

        
        
    }
    

})
export const {addToProducts,addToFavorites,removeFromFavorite,handleFilter,addToCart,removeFromCart} = cartsSlice.actions
export default cartsSlice.reducer;
