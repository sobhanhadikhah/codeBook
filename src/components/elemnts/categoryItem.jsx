import { Link } from "react-router-dom"

export const CategoryItem = (props) => {
    const { category } = props
    return (
        <>
            <Link  className="flex items-center justify-center bg-black cursor-pointer ">
                <div className="group relative">
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                    <div className="relative grid place-content-center text-5xl text-center font-SFPRODISPLAYMEDIUM capitalize rounded-lg bg-black w-[300px] h-[300px]  py-3 text-white">
                        {category}

                    </div>
                </div>
            </Link>
        </>
    )
}
