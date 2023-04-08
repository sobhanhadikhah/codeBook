import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { token } from "../../../schema/validition";
export const CartEmpty = () => {

    return (
        <div className="flex mx-4 font-SFPRODISPLAYMEDIUM flex-col h-screen  justify-center  items-center place-content-center " >

            <main className="   w-full text-center rounded-md" >
                <div className="" >
                    <div className="items-center flex justify-center p-4 animate-pulse " >
                        <FaShoppingCart size={130} />
                    </div>
                    <h1 className="p-4 lg:text-5xl text-3xl " >
                        Oops! Your cart look like  is empty !
                    </h1>
                    <div className="p-4 flex justify-center items-start " >
                        <Link to={`/products`} className="bg-sky-500 flex items-center justify-center   p-3 rounded-full mt-5 " >
                            Continiu Shopping <span className="ml-1" ><FaShoppingCart /></span>
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    )
}
