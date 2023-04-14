import { FaileOrder } from "./components";
import { SucssesOrder } from "./components";
import { useLocation, useParams } from "react-router-dom";

export const OrderPage = () => {
    const { state } = useLocation()
    const { nano } = useParams()
    return (
        <main className="bg-black h-screen  " >
            <div className="max-w-[1240px] mx-auto" >

                {
                    state.status ? <SucssesOrder state={state} orderId={nano} /> : <FaileOrder state={state} orderId={nano} />
                }
            </div>
        </main>
    )
}
