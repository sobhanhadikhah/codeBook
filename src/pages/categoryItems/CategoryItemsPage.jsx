import { useParams } from "react-router-dom";
import { useGetshopbyNameQuery } from "../../services/fakeShop";
import { Loading, ProductsCart } from "../../components";
import { nanoid } from "@reduxjs/toolkit";
export const CategoryItemsPage = () => {
    const { category } = useParams()
    const { data, isLoading, error, isError, isSuccess } = useGetshopbyNameQuery(`/products/category/${category}`);

    return (
        <div className="bg-black" >
            <div className="max-w-[1240px] mx-auto " >
                <div className="flex flex-wrap justify-center items-center gap-3  " >
                    {isLoading ? <Loading /> : data && data.map((items) => {
                        return <ProductsCart key={nanoid()} {...items} />
                    })}
                </div>
            </div>
        </div>
    )
}
