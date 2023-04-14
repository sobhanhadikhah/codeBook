import { CgDanger } from "react-icons/cg";
import { useTitle } from "../../../hooks";
import { Link } from "react-router-dom";
export const FaileOrder = (props) => {
    const { state, orderId } = props;
    const { email, cardHolder } = state.data;
    useTitle("Faile")

    return (
        <div className="m-3  " >
            <div className="border-2 border-red-600 rounded-md  p-3 " >
                <div className="flex flex-col text-center items-center justify-center mt-5 " >
                    <div className="bg-red-500 rounded-full w-20 h-20 flex items-center justify-center " >
                        <CgDanger size={130} />
                    </div>
                    <div className="my-5 flex flex-col gap-6 " >
                        <p className="lg:text-3xl text-xl text-red-500 font-bold" >Faile!</p>
                        <p>Order Id: <span className="font-bold" >{orderId} </span></p>
                        <p>We Send You Detaile To <a className="text-sky-500 hover:underline" href={`mailto:${email}?subject = Feedback&body = Message`} >{email}</a></p>
                    </div>

                    <div className="flex flex-col gap-6 p-3" >
                        <Link to={`/`} className="block bg-red-500 p-3 rounded-lg font-semibold " >Back To Home</Link>
                        <Link to={`/carts`} className="block bg-sky-700 p-3 rounded-lg font-semibold " >Check Again</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
