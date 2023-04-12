import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { BiUser, BiLockOpenAlt } from 'react-icons/bi';
import { AiFillLock } from "react-icons/ai";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
export const CheckOut = ({ activeDialog, setActiveDialog, CloseDialog, totalPrice }) => {


    const defaultButton =
        'w-full rounded-md flex item-center justify-center  text-center py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-[#1a5cff] md:text-sm text-white hover:shadow-md hover:shadow-blue-500/50 ';
    return (
        <>
            <div
                className={
                    activeDialog
                        ? 'fixed text-black top-0  left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 '
                        : 'hidden'
                }>
                <div className="relative w-[20rem] font-SFPRODISPLAYMEDIUM md:w-[25rem] text-white p-6 bg-orange-500 shadow-lg rounded-xl">
                    <div
                        onClick={() => setActiveDialog(!activeDialog)}
                        className="absolute -top-1 -right-1 hover:top-0 hover:right-0 p-1.5 rounded-lg bg-white shadow-lg cursor-pointer duration-200">
                        <GrFormClose className="text-primary]" />
                    </div>
                    <div className="space-y-2 md:space-y-4  ">
                        <h3 className="text-lg md:text-2xl font-semibold flex items-center gap-x-2 text-start">
                            <BsFillCreditCard2BackFill />
                            Card Payment
                        </h3>
                        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="w-full text-black rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="your.email@gmail.com"
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </div>
                        </div>
                        <label
                            htmlFor="card-holder"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Card Holder
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="card-holder"
                                name="card-holder"
                                className="w-full text-black rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Your full name here"
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <label
                            htmlFor="card-no"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Card Details
                        </label>
                        <div className="flex gap-x-3 ">
                            <div className="relative text-black w-7/12 flex-shrink-0">
                                <input
                                    type="text"
                                    id="card-no"
                                    name="card-no"
                                    className="w-full rounded-md text-black border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="xxxx-xxxx-xxxx-xxxx"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                        className="h-4 w-4 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                    </svg>
                                </div>
                            </div>

                            <input
                                type="text"
                                name="credit-expiry"
                                className="w-full rounded-md text-black border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="MM/YY"
                            />
                            <input
                                type="text"
                                name="credit-cvc"
                                className="w-1/6 flex-shrink-0 text-black rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="CVC"
                            />

                        </div>
                        <div>
                            <label
                                htmlFor="security"
                                className="mt-4 mb-2 block text-sm font-medium"
                            >
                                Security Code
                            </label>
                            <input
                                name='security'
                                type="password"
                                className='uppercase w-full rounded-md p-3 text-black '
                                placeholder='Security Code '
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 text-black rounded-lg bg-gray-50 focus:ring-3 focus:ring-blue-500"
                                    required
                                />
                                <small className="text-blue-500 cursor-pointer">
                                    Remember This Card
                                </small>
                            </div>
                        </div>

                        <span className='text-green-500 lg:text-3xl text-lg text-center flex items-center justify-center ' >
                            ${totalPrice}
                        </span>
                        <button className={defaultButton}>
                            PAY NOW <span><AiFillLock className='ml-1 items-center ' /></span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

