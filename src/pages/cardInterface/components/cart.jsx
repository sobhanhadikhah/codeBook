import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../featcures/cartSlice";
export const Cart = (props) => {
    const { image, title, id, price, cartQuentity, description, category, rating } = props;
    const disPatch = useDispatch()
    const handleOnRemove = () => {
        disPatch(removeFromCart({ id: id }))
    }
    const handleOnAdd = () => {
        disPatch(addToCart({ title: title, id: id, image: image, price: price, description: description, rating: rating, category: category, }))
    }
    return (
        <section >
            <li className="flex items-center gap-4  ">
                <Link to={`/products/${id}`} className="flex gap-4 hover:underline items-center" >
                    <img
                        src={image}
                        alt=""
                        className="h-16 w-16 rounded object-cover"
                    />
                    <div>
                        <h3 className="text-sm text-white">{title}</h3>
                        <dl className="mt-0.5 space-y-px text-base text-white">
                            <div>
                                <dt className="inline  ">Price:</dt>
                                <dd className="inline ml-1  font-bold ">${price}</dd>
                            </div>
                        </dl>
                    </div>
                </Link>
                <div className="flex flex-1 items-center justify-end gap-2">
                    <div>
                        <label className="sr-only">
                            {" "}
                            Quantity{cartQuentity}
                        </label>
                        <div className="flex gap-4 items-center " >
                            <button onClick={handleOnAdd} className="bg-sky-600 flex text-xl w-10 h-10 text-center items-center justify-center rounded-full" >+</button>
                            <span>{cartQuentity}</span>
                            <button onClick={handleOnRemove} className="bg-red-500 flex text-xl w-10 h-10 text-center items-center justify-center rounded-full" >-</button>


                        </div>
                    </div>
                    <button className="text-white transition hover:text-red-600">
                        <span className="sr-only">Remove item</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                    </button>
                </div>
            </li>

        </section>
    )
}
