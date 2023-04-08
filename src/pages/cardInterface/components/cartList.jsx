import { useState } from 'react'
import { Cart } from './cart'
import { CheckOut } from './checkOut'
import { GrFormNextLink } from "react-icons/gr";
import { motion } from 'framer-motion'
import { listVaritions } from '../../../utils/motion'
export const CartList = ({ carts, localCarts }) => {
    const [activeDialog, setActiveDialog] = useState(false);
    const dialog = () => {
        setActiveDialog(true);
    };

    const CloseDialog = () => {
        setActiveDialog(!activeDialog);
    };

    return (
        <div className='mt-8 mx-2 ' >

            <div>
                <div className='text-center ' >
                    <h1>
                        All Carts ({carts.length})
                    </h1>
                </div>
                <ul className='flex flex-col gap-4'  >
                    {
                        carts.map((item) => {
                            return <Cart key={item.productIdCart} {...item} />
                        })
                    }

                </ul>
            </div>
            <div className='flex justify-between' >
                <div>
                    total count:
                </div>
                <div>
                    $
                </div>
            </div>
            <div className='border-gray-500 border' />
            <div className='flex justify-end' >
                <button onClick={() => setActiveDialog(true)} className='bg-sky-600  text-white  font-semibold flex justify-center items-center  p-3 rounded-lg m-3' >
                    Place Order <GrFormNextLink size={30} />

                </button>

                <CheckOut CloseDialog={CloseDialog} activeDialog={activeDialog} setActiveDialog={setActiveDialog} />

            </div>

        </div>
    )
}
