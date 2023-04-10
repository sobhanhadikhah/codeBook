import { Cart } from "./cart"
import { ShippingMethods } from "./shippingMethods"

export const CardSummery = ({ carts }) => {
    return (
        <>
            <div className="px-4 pt-8">
                <p className="text-xl font-medium">Order Summary</p>
                <p className="text-gray-400">
                    Check your items. And select a suitable shipping method.
                </p>
                <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 overflow-y-auto max-h-[320px]">

                    {carts ? carts.map((item) => {
                        return <Cart key={item.productIdCart} {...item} />
                    }) : null}
                </div>
                {/* Shipping Methods */}
                <ShippingMethods />
            </div>
        </>
    )
}
