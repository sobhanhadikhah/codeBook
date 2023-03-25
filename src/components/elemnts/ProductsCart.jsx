import { Link } from "react-router-dom"
import { useGetshopbyNameQuery } from "../../services/fakeShop"
import { ButttonGlowing } from "./btnGlowing"
import { BsHeartFill } from 'react-icons/bs';
import { RiMessage3Fill } from 'react-icons/ri';
import { BsTruck } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion"
export const ProductsCart = (props) => {
    const { title, price, image, id } = props
    return (
        <>
            <Link to={`/products/${id}`} className="flex flex-col justify-end bg-white font-SFPRODISPLAYMEDIUM text-black p-2 " id="product__card">
                <div className="bg-lightGrey1 rounded-2xl  p-1 relative flex items-center justify-center w-[250px] cursor-pointer">
                    <img
                        src={image}
                        alt={title}
                        className="h-[220px] bg-transparent w-[220px] object-contain"
                    />

                    <div
                        className={`cart-btn absolute top-3 right-3 p-1 text-[28px] bg-white rounded-[0.3rem] hover:bg-primaryColor hover:text-purple-400 `}

                    >
                        <AiOutlineShoppingCart />
                    </div>
                </div>

                <div className="pt-2 flex w-full max-w-[240px]  justify-start">
                    <p>{title}</p>
                </div>
                <div className="  " >

                    <p className="font-[600] text-lg">${price}</p>
                </div>

            </Link>
        </>
    )
}
