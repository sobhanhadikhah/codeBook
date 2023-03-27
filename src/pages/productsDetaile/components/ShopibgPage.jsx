import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Rating } from '../../../components';
import { useTitle } from '../../../hooks';
export const ShopibgPage = (props) => {
    const { title, id, image, price, description, rating, category } = props
    useTitle(title)
    return (
        <div className='bg-black font-SFPRODISPLAYMEDIUM  ' >
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

                            {/* <ul class="mt-1 flex gap-1">
                                <li>
                                    <img
                                        alt="Tee"
                                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                        class="h-16 w-16 rounded-md object-cover"
                                    />
                                </li>

                                <li>
                                    <img
                                        alt="Tee"
                                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                        class="h-16 w-16 rounded-md object-cover"
                                    />
                                </li>

                                <li>
                                    <img
                                        alt="Tee"
                                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                        class="h-16 w-16 rounded-md object-cover"
                                    />
                                </li>

                                <li>
                                    <img
                                        alt="Tee"
                                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                        class="h-16 w-16 rounded-md object-cover"
                                    />
                                </li>
                            </ul> */}
                        </div>

                        <div className="lg:sticky lg:top-0">
                            <form className="space-y-4 lg:pt-8">
                                {/* <fieldset>
                                    <legend class="text-lg font-bold">Color</legend>

                                    <div class="mt-2 flex flex-wrap gap-1">
                                        <label for="color_green" class="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_green"
                                                name="color"
                                                class="peer sr-only"
                                                checked
                                            />

                                            <span
                                                class="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label for="color_blue" class="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_blue"
                                                name="color"
                                                class="peer sr-only"
                                            />

                                            <span
                                                class="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label for="color_pink" class="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_pink"
                                                name="color"
                                                class="peer sr-only"
                                            />

                                            <span
                                                class="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label for="color_red" class="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_red"
                                                name="color"
                                                class="peer sr-only"
                                            />

                                            <span
                                                class="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label for="color_indigo" class="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_indigo"
                                                name="color"
                                                class="peer sr-only"
                                            />

                                            <span
                                                class="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>
                                    </div>
                                </fieldset>
 */}
                                <fieldset>
                                {/* <legend className="text-lg font-bold">Material</legend> */}
                                    <Rating rating={rating.rate} />

                                    <div className="mt-2 flex flex-wrap gap-1">
                                        <label htmlFor="material_cotton" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="material_cotton"
                                                name="material"
                                                className="peer sr-only"

                                            />

                                            <span
                                                className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100"
                                            >
                                                {category}
                                            </span>
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

                                <button
                                    type="submit"
                                    className="w-full rounded bg-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                                >
                                    Add to cart
                                </button>

                                <button
                                    type="button"
                                    className="w-full rounded border border-gray-300 text-black bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                                >
                                    Notify when on sale
                                </button>
                            </form>
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
        </div>
    )
}
