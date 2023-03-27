import { AiOutlineLoading } from "react-icons/ai";
export const Loading = () => {
    return (
        <div className='grid place-content-center h-screen  ' >
            <AiOutlineLoading className="animate-spin" size={30} />
        </div>
    )
}
