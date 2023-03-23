import React from 'react'
import { Link } from 'react-router-dom'

export const ButttonGlowing = (props) => {
    const { children, to } = props
    return (
        <Link to={to} class="flex items-center justify-center bg-black">
            <div class="group relative">
                <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                <button class="relative font-SFPRODISPLAYMEDIUM capitalize rounded-lg bg-black w-44 py-3 text-white">
                    {children}
                </button>
            </div>
            {/* <div className="relative justify-center items-center min-h-screen flex  " >
                <div aria-hidden="true"
                    className="absolute inset-0 inset-x-0 w-[40%] h-[30%] left-0 top-96 opacity-75 rounded-full rotate-45 bg-gradient-to-b
                     from-blue-500 to-white blur-3xl mx-auto scale-y-150 " />
                <div aria-hidden="true"
                    className="absolute inset-0 inset-x-0 w-[40%] h-[30%] left-16 top-52 opacity-75 rounded-full rotate-45 bg-gradient-to-b
                     from-sky-200 to-sky-600 blur-3xl mx-auto scale-y-150 " />
                <div aria-hidden="true"
                    className="absolute inset-0 inset-x-0 w-[40%] h-[30%] left-0 top-0 opacity-75 rounded-full rotate-45 bg-gradient-to-b
                     from-pink-600 to-purple-600 blur-3xl mx-auto scale-y-150 " />
                hey mamad
            </div> */}
        </Link>
    )
}
