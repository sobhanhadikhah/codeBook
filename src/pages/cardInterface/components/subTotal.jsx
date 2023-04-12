import React from 'react'

export const SubTotal = ({ totalPrice }) => {

    return (
        <>
            <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white">Subtotal</p>
                    <p className="font-semibold text-white">${totalPrice}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white">Shipping</p>
                    <p className="font-semibold text-white">Free</p>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-white">Total</p>
                <p className="text-2xl font-semibold text-white">${totalPrice} </p>
            </div>
        </>
    )
}
