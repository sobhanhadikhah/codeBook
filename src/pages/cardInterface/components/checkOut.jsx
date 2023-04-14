import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { AiFillLock } from "react-icons/ai";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { InputCheckout } from './inputs';
import { Formik, Field, ErrorMessage } from 'formik';
import { validitionCheckout, intialValueCheckout } from '../../../schema/validitionCheckOut';
import { GrSecure } from "react-icons/gr";
import { InputsCard } from './InputsCard';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { cardClear } from '../../../featcures/cartSlice';
import { nanoid } from '@reduxjs/toolkit';
export const CheckOut = ({ activeDialog, setActiveDialog, totalPrice }) => {
    const disPatch = useDispatch()
    const navigate = useNavigate();
    const handleOnSubmite = (value) => {
        try {
            console.log(`its ok`);
            console.log(value);
            throw new Error("somthing Wrong")
            disPatch(cardClear());

            navigate(`/order/${nanoid()}`, { state: { status: true, data: value } })
            toast.success(`ALL DONE`)

        } catch (error) {
            navigate(`/order/${nanoid()}`, { state: { status: false, data: value } })
            toast.error("Somthing went Wrong")

        }
    }
    const defaultButton =
        'w-full rounded-md flex item-center justify-center  text-center py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-[#1a5cff] md:text-sm text-white hover:shadow-md hover:shadow-blue-500/50 ';
    return (
        <Formik initialValues={intialValueCheckout} validationSchema={validitionCheckout} onSubmit={data => handleOnSubmite(data)} >
            {(formik) => {
                return (
                    <form
                        onSubmit={formik.handleSubmit}
                        className={activeDialog
                            ? 'fixed text-black top-0  left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '
                            : 'hidden'}>
                        <div className="relative w-[20rem] font-SFPRODISPLAYMEDIUM md:w-[25rem] text-white p-6 bg-slate-600 shadow-lg rounded-xl">
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

                                {/* input  */}
                                <Field component={InputCheckout} placeholder="Email" name="email" lable="Email" id="email">
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
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>

                                </Field>
                                <ErrorMessage name='email'>{msg => <span className='text-red-500 text-xs capitalize '>{msg}</span>}</ErrorMessage>
                                <Field placeholder="Card Holder" name="cardHolder" lable="Card Holder" component={InputCheckout}>
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
                                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>
                                </Field>
                                <ErrorMessage name='cardHolder'>{msg => <span className='text-red-500 text-xs capitalize '>{msg}</span>}</ErrorMessage>

                                <InputsCard formik={formik} />
                                <Field name="securityCode" placeholder="Security Code" lable="securityCode" id="securityCode" component={InputCheckout}>
                                    <GrSecure />
                                </Field>
                                <ErrorMessage name='securityCode'>{msg => <span className='text-red-500 text-xs capitalize '>{msg}</span>}</ErrorMessage>
                                <span className='text-green-500 lg:text-3xl text-lg text-center flex items-center justify-center '>
                                    ${totalPrice}
                                </span>
                                <button type='submit' className={defaultButton}>
                                    PAY NOW <span><AiFillLock className='ml-1 items-center ' /></span>
                                </button>
                            </div>
                        </div>
                    </form>
                );
            }}

        </Formik>
    );
};

