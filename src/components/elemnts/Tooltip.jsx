import React from 'react'

export const Tooltip = (props) => {
    const { children, textH1, textP } = props
    return (
        <div className="relative  transition duration-200 ease-in-out flex flex-col items-center group font-SFPRODISPLAYMEDIUM  ">
            <div className="w-6 h-6 flex items-center justify-center border-2 border-gray-500 dark:border-white rounded-full">
                {children}
            </div>
            <div className="absolute bottom-4 hidden flex flex-col items-center mb-6 group-hover:flex  ">
                <span className="relative z-10 p-3 text-xs leading-none text-gray-600  dark:text-white whitespace-nowrap bg-white dark:bg-black shadow-lg rounded-lg space-y-1">
                    <h1 className='text-base font-medium'>{textH1}</h1>
                    <p className='text-xs md:text-sm'>{textP}</p>
                </span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-200 dark:bg-black  shadow-lg"></div>
            </div>
        </div>

    )
}
