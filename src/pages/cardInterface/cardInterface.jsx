import { useSelector } from "react-redux";
import { Transition } from "../../components";
import { CartEmpty, CartList } from "./components"
import { useTitle } from "../../hooks";
export const CartPage = () => {
    useTitle(`Carts`)
    const { carts } = useSelector(state => state.cartState);
    return (
        <main className="bg-black " >
            <Transition>

                <div className=" max-w-[1240px] mx-auto  " >

                    {
                        carts.length === 0 ?
                            <CartEmpty />
                            :
                            <CartList carts={carts} />
                    }
                </div>
            </Transition>
        </main>
    )
}
