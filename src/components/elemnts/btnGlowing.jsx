import { Link } from 'react-router-dom'
export const ButttonGlowing = (props) => {
    const { children, to, onClick } = props
    return (
        <Link to={to} onClick={onClick} className="flex  items-center justify-center bg-black">
            <div className="group relative">
                <div className="absolute -inset-1  rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                <button className="relative font-SFPRODISPLAYMEDIUM capitalize rounded-lg bg-black w-44 py-3 text-white">
                    {children}
                </button>
            </div>
            
        </Link>
    )
};
