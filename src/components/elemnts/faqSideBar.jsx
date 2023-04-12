import React from 'react'

export const FaqSideBar = (props) => {
    const { ansawre, question } = props

    return (
        <div>
            <div className="py-4 px-3  ">
                <details className="group [&_summary::-webkit-details-marker]:hidden" >
                    <summary
                        className="flex border-2 items-center justify-between p-4 rounded-lg cursor-pointer bg-black "
                    >
                        <h2 className="font-medium text-white">
                            {question}
                        </h2>

                        <svg
                            className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>

                    <p className="px-4 mt-4 leading-relaxed  text-white">
                        {ansawre}
                    </p>
                </details>

            </div>
        </div>
    )
}
