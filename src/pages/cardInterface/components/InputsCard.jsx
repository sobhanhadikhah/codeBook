import { ErrorMessage } from 'formik'
import React from 'react'
import { FaCreditCard } from "react-icons/fa"

export const InputsCard = (props) => {
    const { formik, } = props
    return (
        <>
            <label htmlFor={"cardNumber"} className="mt-4 mb-2 block text-sm font-medium">
                Card
            </label>
            <div className="relative  ">
                <input


                    {...formik.getFieldProps("cardNumber")}
                    type={"text"}
                    className="w-full text-black rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={`**** **** **** ****`}
                />

                <div className="pointer-events-none text-black absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <FaCreditCard />
                </div>
            </div>
            <ErrorMessage name='cardNumber'  >{msg => <span className='text-xs text-red-500 ' >{msg}</span>}</ErrorMessage>
            <div className='flex justify-between gap-6' >
                <input
                    {...formik.getFieldProps("date")}
                    type={"text"}
                    className="w-full text-black rounded-md border border-gray-200  py-1 pl-4 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={`MM/DD`}
                />

                <input
                    {...formik.getFieldProps("cvc")}
                    type={"text"}
                    className="w-full text-black rounded-md border border-gray-200 px-2 py-1 pl-4 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={`CVC`}
                />
            </div>
            <div className='flex justify-between  ' >
                <ErrorMessage name='date'  >{msg => <span className='text-xs text-red-500' >{msg}</span>}</ErrorMessage>
                <ErrorMessage name='cvc'  >{msg => <span className='text-xs text-red-500' >{msg}</span>}</ErrorMessage>

            </div>

        </>
    )
}
