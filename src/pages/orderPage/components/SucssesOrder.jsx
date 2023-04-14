import { MdOutlineDone } from "react-icons/md"
import { useTitle } from "../../../hooks";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
export const SucssesOrder = (props) => {
    const { state, orderId } = props;
    const { email, cardHolder } = state.data
    useTitle("success")

    return (
        <div className="m-3  " >
            <div className="border-2 rounded-md   p-3 " >
                <div className="flex flex-col text-center items-center justify-center mt-5 " >
                    <div className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center " >
                        <MdOutlineDone size={130} />
                    </div>
                    <div className="my-5 flex flex-col gap-6" >
                        <p className="lg:text-3xl text-xl text-green-500 font-bold" >Thank You For Your Purchus</p>
                        <p>Order Id: <span className="font-bold" >{orderId} </span></p>
                        <p>We Send You Detaile To <a className="text-sky-500 hover:underline" href={`mailto:${email}?subject = Feedback&body = Message`} >{email}</a></p>
                    </div>
                    <div className="p-3" >
                        <Link to={`/products`} className="flex items-center gap-3 bg-sky-600 p-3 rounded-lg font-semibold  " >Continue To Shoping <FaShoppingCart /> </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
