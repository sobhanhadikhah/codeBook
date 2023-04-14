import { useDispatch } from "react-redux"
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
//const dispatch = useDispatch(); 
import { addToProducts } from "../featcures/cartSlice"
export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://fakestoreapi.com/"}),
    endpoints: (biulder) => ({
        getshopbyName: biulder.query({
            query: (name) => `${name}`
        }),
        
    })
    
})
export const {useGetshopbyNameQuery} = shopApi;