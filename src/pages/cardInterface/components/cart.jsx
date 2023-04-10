import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, hardRemove, removeFromCart } from "../../../featcures/cartSlice";
import { useEffect, useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
export const Cart = (props) => {
    const { image, title, id, price, cartQuentity, description, category, rating, productIdCart } = props;
    const disPatch = useDispatch()
    const handleOnRemove = () => {
        disPatch(removeFromCart({ id: id }))
    }
    const handleOnAdd = () => {
        disPatch(addToCart({ title: title, id: id, image: image, price: price, description: description, rating: rating, category: category, }))
    }
    const handleOnDelete = () => {
        disPatch(hardRemove({ id: productIdCart }))
    }
    return (
        <section >
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img
                    className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={image}
                    alt={title}
                />
                <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-semibold">
                        {title}
                    </span>
                    <span className="float-right text-gray-400">42EU - 8.5US</span>
                    <p className="text-lg font-bold">{price}</p>
                </div>
            </div>
        </section>
    )
}
