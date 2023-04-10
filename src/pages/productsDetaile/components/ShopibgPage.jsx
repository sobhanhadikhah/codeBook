import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Rating, Tooltip, Transition } from '../../../components';
import { useTitle } from '../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { MdFavorite } from "react-icons/md"
import { Link } from 'react-router-dom';
import { addToCart, addToFavorites, hardRemove, removeFromCart, removeFromFavorite } from '../../../featcures/cartSlice';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { RiDeleteBin6Line } from "react-icons/ri";
export const ShopibgPage = (props) => {
    const { title, id, image, price, description, rating, category, } = props;
    const disPatch = useDispatch()
    useTitle(title);
    const [cartQuentityState, setCartQuentityState] = useState(0)
    const handleOnAddToCart = () => {
        disPatch(addToCart({ title: title, id: id, image: image, price: price, description: description, rating: rating, category: category, productIdCart: nanoid() }))
    }

    const [isInCard, setIsInCard] = useState(false);
    const { carts } = useSelector(state => state.cartState)
    useEffect(() => {
        const index = carts.find(item => {
            return item.id === id
        })
        if (index) {
            setIsInCard(true)
            const indexcart = carts.findIndex(item => item.id === id)
            setCartQuentityState(carts[indexcart].cartQuentity)
        } else {
            setIsInCard(false)
        }
    }, [carts, id])


    return (
        <div className='bg-black font-SFPRODISPLAYMEDIUM  ' >
            <Transition>

                <section>
                    <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                        <div>
                            <h1 className="text-2xl font-bold lg:text-3xl">{title}</h1>

                            <p className="mt-1 text-sm text-gray-500">SKU: ${id}</p>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                            <div className="lg:col-span-3">
                                <div className="relative mt-4 justify-center items-center flex  ">
                                    <LazyLoadImage
                                        effect='blur'
                                        alt="Tee"
                                        src={image}
                                        className="h-72  rounded-xl   lg:h-[540px]"
                                    />

                                    <div
                                        className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                            />
                                        </svg>

                                        <span className="ml-1.5 text-xs"> Hover to zoom </span>
                                    </div>
                                </div>


                            </div>

                            <div className="lg:sticky lg:top-0">
                                <div className="space-y-4 lg:pt-8">

                                    <fieldset>
                                        {/* <legend className="text-lg font-bold">Material</legend> */}
                                        <div className='flex flex-col justify-start' >
                                            <Rating rating={rating.rate} />
                                            {/* adding to favoirte page */}

                                            <MdFavorite className={`hover:text-red-700 cursor-pointer `} size={30} />


                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-1">
                                            <label htmlFor="material_cotton" className="cursor-pointer">
                                                <input
                                                    type="radio"
                                                    id="material_cotton"
                                                    name="material"
                                                    className="peer sr-only"

                                                />

                                                <Link to={`/productsbycategory/${category}`}
                                                    className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100"
                                                >
                                                    {category}
                                                </Link>
                                            </label>


                                        </div>
                                    </fieldset>

                                    <div className="rounded border  p-4">
                                        <p className="text-sm">
                                            <span className="block"> Pay as low as $3/mo with 0% APR. </span>

                                            <a href="" className="mt-1 inline-block underline"> Find out more </a>
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xl font-bold">${price}</p>
                                    </div>
                                    {
                                        isInCard ?
                                            (
                                                <>
                                                    <div



                                                        className="w-full flex justify-between items-center text-xl py-3 rounded bg-white px-6  font-SFPRODISPLAYMEDIUM  font-bold uppercase tracking-wide text-black"
                                                    >
                                                        <button className='text-red-500 font-bold  ' onClick={() => disPatch(removeFromCart({ id: id }))} >
                                                            {
                                                                cartQuentityState === 1 ? <RiDeleteBin6Line size={25} /> : "-"
                                                            }
                                                        </button>
                                                        <h1>
                                                            {cartQuentityState}
                                                        </h1>
                                                        <button onClick={() => disPatch(addToCart({ id: id }))} >
                                                            +
                                                        </button>
                                                    </div>

                                                </>
                                            )
                                            :
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 1 }}
                                                onClick={handleOnAddToCart}
                                                type="submit"
                                                className="w-full rounded bg-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                                            >
                                                Add to cart
                                            </motion.button>

                                    }


                                    <button
                                        type="button"
                                        className="w-full rounded border border-gray-300 text-black bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                                    >
                                        Notify when on sale
                                    </button>
                                </div>
                            </div>

                            <div className="lg:col-span-3">
                                <div className="prose max-w-none">
                                    <p className='font-SFPRODISPLAYMEDIUM' >
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Transition>
        </div>
    )
}
