import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { BiUser, BiLockOpenAlt } from 'react-icons/bi';
import { AiFillLock } from "react-icons/ai";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
export const CheckOut = ({ activeDialog, setActiveDialog, CloseDialog }) => {


    const defaultButton =
        'w-full rounded-md flex item-center justify-center  text-center py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-[#1a5cff] md:text-sm text-white hover:shadow-md hover:shadow-blue-500/50 ';
    const defaultInput = `outline-none flex flex-grow p-2 bg-transparent bg-slate-500 rounded-md text-white  px-4 text-md lg:text-base duration-300`;
    return (
        <>
            <div
                className={
                    activeDialog
                        ? 'fixed text-black top-0  left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 '
                        : 'hidden'
                }>
                <div className="relative w-[20rem] font-SFPRODISPLAYMEDIUM md:w-[25rem] text-white p-6 bg-slate-700 shadow-lg rounded-xl">
                    <div
                        onClick={() => setActiveDialog(!activeDialog)}
                        className="absolute -top-1 -right-1 hover:top-0 hover:right-0 p-1.5 rounded-lg bg-white shadow-lg cursor-pointer duration-200">
                        <GrFormClose className="text-primary]" />
                    </div>
                    <div className="space-y-2 md:space-y-4">
                        <h3 className="text-lg md:text-2xl font-semibold flex items-center gap-x-2 text-start">
                            <BsFillCreditCard2BackFill />
                            Card Payment
                        </h3>
                        <div className=" flex flex-col  rounded-md  group">
                            <label className='p-1' htmlFor="name">Name:</label>
                            <input
                                id="name"
                                className={defaultInput}
                                type="text"
                                placeholder="Like Ali"
                            />

                        </div>
                        <div className=" flex flex-col   rounded-md  group">
                            <label className='p-1' htmlFor="name">Email:</label>
                            <input
                                id="emailcard"
                                className={defaultInput}
                                type="email"
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div className="  flex flex-col  rounded-md  group">
                            <label className='p-1' htmlFor="card">Card Number:</label>
                            <input
                                id="card"
                                className={defaultInput}
                                type=""
                                placeholder="0000-0000-0000-0000"
                            />
                        </div>
                        <div className='flex flex-col  group text-white ' >
                            <label htmlFor="expiry" className='p-1' >Expiry Date:</label>
                            <div className='flex   ' >
                                <input type="number" placeholder='Year' name='year' className=' flex max-w-[110px] text-white px-2 py-2 rounded-md mr-3 outline-none bg-slate-500 ' />
                                <input type="number" placeholder='Month' name='month' className=' flex text-white max-w-[110px] px-2 outline-none rounded-md bg-slate-500 ' />
                            </div>
                        </div>
                        <div className='flex flex-col ' >
                            <label className='p-1' htmlFor="card">Security Code:</label>
                            <input
                                id="code"
                                className={defaultInput}
                                type="password"
                                placeholder="*******"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded-lg bg-gray-50 focus:ring-3 focus:ring-blue-500"
                                    required
                                />
                                <small className="text-blue-500 cursor-pointer">
                                    Remember This Card
                                </small>
                            </div>
                        </div>
                        <span className='text-green-500 lg:text-3xl text-lg text-center flex items-center justify-center ' >
                            $99
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

