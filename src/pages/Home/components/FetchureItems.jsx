import { useEffect } from "react";
import { motion } from "framer-motion";
import { CategoryItem, ProductsCart } from "../../../components"
import { useGetshopbyNameQuery } from "../../../services/fakeShop";
import { nanoid } from "@reduxjs/toolkit";
import { AiOutlineLoading } from "react-icons/ai"
import { NavHumbergerVar, err404Var } from "../../../utils/motion";
export const FetchureItems = () => {
    const { data, status, isLoading, isSuccess, isError, error } = useGetshopbyNameQuery('products/categories')
    return (

        <div className=" justify-center      max-w-[1240px] mx-auto font-SFPRODISPLAYMEDIUM items-center pb-24  " >
            <div className="pb-11  " >
                <h1 className="text-center items-center neonText justify-center grid place-content-center lg:text-6xl text-4xl " >Featured eBook</h1>
            </div>

            <motion.div variants={NavHumbergerVar} initial="hidden" whileInView="visible" className="grid  lg:grid-cols-2 md:grid-cols-1 justify-center gap-11  " >
                {isLoading ? <div className="flex justify-center items-center text-center " > <AiOutlineLoading className="animate-spin" size={30} /> </div>
                    : null
                }
                {isError ? <h1 className="h-screen grid justify-center items-center place-content-center text-center"  >Error</h1> : null}
                {data ? data.map(item => {
                    return <CategoryItem key={nanoid()} category={item} />
                }) : null}


            </motion.div>
        </div>
    )
}
