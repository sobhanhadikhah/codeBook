import React from 'react'

export const SubTotal = () => {
    return (
        <>
            <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Subtotal</p>
                    <p className="font-semibold text-gray-900">$399.00</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Shipping</p>
                    <p className="font-semibold text-gray-900">$8.00</p>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">$408.00</p>
            </div>
        </>
    )
}
