/* all redux states and function in my webApp */
import {createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    products:[],
    carts: localStorage.getItem(`carts`) ? JSON.parse(localStorage.getItem(`carts`)) : [] ,
    totalPrice: localStorage.getItem(`totalPrice`) ? JSON.parse(localStorage.getItem(`totalPrice`)) : 0 ,
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
            const {id,price,} = action.payload
            const itemIndex = state.carts.findIndex((item)=>{
                return item.id === id
            })
            if (itemIndex >= 0 ) {
                state.carts[itemIndex].cartQuentity +=1;
            }else{
                const tempProduct =  {...action.payload,cartQuentity :1}
                state.carts.push(tempProduct) 
                toast.success(`${action.payload.title} Added To cart.`)

            }
           localStorage.setItem(`carts`,JSON.stringify(state.carts));
            
        },
        removeFromCart: (state,action)=>{
            const {id,price} = action.payload
            const itemIndex = state.carts.findIndex((item)=>{
                return item.id === id
            })
            if (itemIndex !== -1) {
                state.carts[itemIndex].cartQuentity--;
                
                if (state.carts[itemIndex].cartQuentity === 0) {
                    state.carts.splice(itemIndex,1)


                    
                }
            }
           localStorage.setItem(`carts`,JSON.stringify(state.carts));
           toast.error(`item Removed`)

            
        },
        hardRemove: (state,action) =>{
                const {id,price,cartQuentity} = action.payload;
                const index = state.carts.findIndex((item)=>{
                    return item.productIdCart === id
                })
                state.carts.splice(index,1)
                toast.error(`item Deleted`)


           localStorage.setItem(`carts`,JSON.stringify(state.carts));
        },
        subtotalPrice: (state,action)=>{
            let {cartQuentity,total} = state.carts.reduce(
                (cartTotal,cartItem)=>{
                    const {price,cartQuentity} = cartItem;
                    const itemTotal = price *cartQuentity;
                    cartTotal.total +=  itemTotal;
                    cartTotal.cartQuentity += cartQuentity
                    return cartTotal

                },
                {
                    total:0,
                    cartQuentity:0
                }
                
                )                    
                state.totalPrice = total
                state.totalQuintity = cartQuentity
        },
        cardClear: (state,action) =>{
            state.carts = [];
            localStorage.setItem(`carts`,JSON.stringify(state.carts));
        
        }
        

        
        
    }
    

})
export const {addToProducts,cardClear,subtotalPrice,addToFavorites,removeFromFavorite,handleFilter,addToCart,removeFromCart,hardRemove} = cartsSlice.actions
export default cartsSlice.reducer;
