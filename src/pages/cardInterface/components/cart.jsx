import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, hardRemove, removeFromCart, subtotalPrice } from "../../../featcures/cartSlice";
import { useEffect, useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
export const Cart = (props) => {
    const { image, title, id, price, cartQuentity, description, category, rating, productIdCart, } = props;
    const disPatch = useDispatch()
    const handleOnRemove = () => {
        disPatch(removeFromCart({ id: id }))
    }
    const handleOnAdd = () => {
        disPatch(addToCart({ title: title, id: id, image: image, price: price, description: description, rating: rating, category: category, cartQuentity: cartQuentity, total: 0 }))
        disPatch(subtotalPrice({ id: id, cartQuentity: cartQuentity, price: price }))
    }
    const handleOnDelete = () => {
        disPatch(hardRemove({ id: id, price: price, cartQuentity: cartQuentity }))
    }

    return (
        <section >
            <div className=" flex rounded-lg bg-white border sm:flex-row  lg:hover:scale-105  ">
                <div className="flex  " >
                    <img
                        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                        src={image}
                        alt={title}
                    />
                    <div className="flex w-full flex-col px-4 py-4">
                        <Link to={`/products/${id}`} className="font-semibold hover:text-sky-400 hover:underline text-sm ">
                            {title.length >= 30 ? title.slice(0, 30) + "..." : title}
                        </Link>
                        {/* <span className="float-right text-gray-400">{productIdCart}</span> */}
                        <p className="text-lg font-bold">${price}</p>
                    </div>
                </div>
                <div className="flex  justify-end items-center p-3   " >
                    <div className="flex  gap-6  text-xl  " >
                        <button onClick={handleOnAdd} className="hover:text-sky-400 " >+</button>
                        {cartQuentity}
                        <button onClick={handleOnRemove} className="hover:text-red-500" >-</button>
                        <RiDeleteBin7Fill onClick={handleOnDelete} className="hover:text-red-500 cursor-pointer" />
                    </div>

                </div>
            </div>
        </section>
    )
}
