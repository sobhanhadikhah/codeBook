import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://fakestoreapi.com/"}),
    endpoints: (biulder) => ({
        getshopbyName: biulder.query({
            query: (name) => `${name}`
        })
    })
})
export const {useGetshopbyNameQuery} = shopApi