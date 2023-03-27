import { MdError } from "react-icons/md"
export const ErrorMessege = () => {
    return (
        <div className="grid place-content-center  h-screen bg-black items-center " >
            <div className="flex items-center text-center animate-pulse flex-col " >
                <MdError className="text-red-500  " size={30} />
                <span className="text-center font-mono " >Somthing wend wrong!</span>

            </div>
        </div>
    )
}
