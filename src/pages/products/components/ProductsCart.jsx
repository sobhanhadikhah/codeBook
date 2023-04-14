import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Rating } from "../../../components";
export const ProductsCart = (props) => {

    const { title, price, image, id, rating } = props

    return (
        <>
            <Link to={`/products/${id}`} className="flex shadow-md shadow-gray-700 border-orange-500 rounded-lg  lg:flex-col   bg-black lg:bg-white lg:justify-end justify-start font-SFPRODISPLAYMEDIUM text-white lg:text-black  p-2 lg:w-auto  w-full " id="product__card">
                <div className="hover:underline" >
                    <div className="bg-lightGrey1 rounded-2xl  p-1 relative hover:underline flex lg:flex-col items-center justify-center lg:w-[250px]  cursor-pointer">
                        <div className=" flex items-center " >
                            <LazyLoadImage
                                src={image}
                                alt={title}
                                effect="blur"
                                className="lg:h-[220px] lg:w-[220px] h-[65px] rounded-md w-[65px]  bg-transparent  object-contain"
                            />
                        </div>

                        <div className="pt-2  flex w-full max-w-[240px] ml-6 lg:ml-0 text-sm   hover:text-blue-400   justify-start">
                            <p>{title.length >= 30 ? title.slice(0, 30) + "..." : title}</p>
                        </div>
                    </div>
                    <div>
                        <Rating rating={rating.rate} />
                    </div>
                    <div className="  " >

                        <p className="font-[600] text-lg  ">${price}</p>
                    </div>
                </div>

            </Link>
        </>
    )
}
