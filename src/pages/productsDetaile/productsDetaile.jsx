import { useParams } from "react-router-dom"
import { useGetshopbyNameQuery } from "../../services/fakeShop";
import { ErrorMessege, Loading } from "../../components";
import { ShopibgPage } from "./components";
export const ProductsDetaile = () => {
    const { id } = useParams();
    const { data, isLoading, isError, isSuccess, status, error } = useGetshopbyNameQuery(`products/${id}`);


    return (
        <div className="bg-black " >
            <div className='  max-w-[1240px] mx-auto ' >
                {isLoading ? <Loading /> : data ?

                    <div>
                        <ShopibgPage {...data} />
                    </div>

                    : <ErrorMessege />}

            </div>
        </div>
    )
}
