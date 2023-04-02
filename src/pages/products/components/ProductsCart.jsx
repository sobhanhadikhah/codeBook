import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion"
import { MdFavorite } from "react-icons/md"
import { Rating } from "../../../components";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../../featcures/cartSlice";
export const ProductsCart = (props) => {
    const disPatch = useDispatch()
    const { title, price, image, id, rating } = props

    return (
        <>
            <Link to={`/products/${id}`} className="flex flex-col justify-end bg-white font-SFPRODISPLAYMEDIUM text-black p-2 " id="product__card">
                <div className="bg-lightGrey1 rounded-2xl  p-1 relative flex items-center justify-center w-[250px] cursor-pointer">
                    <LazyLoadImage
                        src={image}
                        alt={title}
                        effect="blur"
                        className="h-[220px] bg-transparent w-[220px] object-contain"
                    />
                    <div
                        className={`cart-btn absolute top-3 right-3 p-1 text-[28px] bg-white rounded-[0.3rem] hover:bg-primaryColor hover:text-purple-400 `}>
                        <div className="text-black hover:text-red-500" >
                            {/* <MdFavorite onClick={() => disPatch(addToFavorites({ title: title }))} /> */}
                        </div>
                    </div>

                </div>

                <div className="pt-2 flex w-full max-w-[240px]  justify-start">
                    <p>{title}</p>
                </div>
                <div>
                    <Rating rating={rating.rate} />
                </div>
                <div className="  " >

                    <p className="font-[600] text-lg">${price}</p>
                </div>

            </Link>
        </>
    )
}
