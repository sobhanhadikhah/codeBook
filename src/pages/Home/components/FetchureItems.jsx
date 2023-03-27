import { useEffect } from "react";
import { CategoryItem, ProductsCart } from "../../../components"
import { useGetshopbyNameQuery } from "../../../services/fakeShop";
import { nanoid } from "@reduxjs/toolkit";
import { AiOutlineLoading } from "react-icons/ai"
export const FetchureItems = () => {
    const { data, status, isLoading, isSuccess, isError, error } = useGetshopbyNameQuery('products/categories')

    useEffect(() => {
        console.log(error);
    }, [error])
    return (

        <div className=" justify-center      max-w-[1240px] mx-auto font-SFPRODISPLAYMEDIUM items-center pb-24  " >
            <div className="pb-11  " >
                <h1 className="text-center items-center neonText justify-center grid place-content-center lg:text-6xl text-4xl " >Featured eBook</h1>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-center gap-11  " >
                {isLoading ? <div className="flex justify-center items-center text-center " > <AiOutlineLoading className="animate-spin" size={30} /> </div> : null}
                {isError ? <h1>{error}</h1> : null}
                {data ? data.map(item => {
                    return <CategoryItem key={nanoid()} category={item} />
                }) : null}


            </div>
        </div>
    )
}
