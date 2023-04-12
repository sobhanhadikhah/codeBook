import { useFormik } from 'formik'
import { CheckOut } from './checkOut'
import { SubTotal } from './subTotal'
import { useSelector } from 'react-redux'
import { intialValuesCheckout, validitionPayment } from '../../../schema/validitionPayment'
export const PaymentMethode = (props) => {
    const { CloseDialog, activeDialog, setActiveDialog, dialog, carts } = props
    const { totalPrice } = useSelector(state => state.cartState)
    const formik = useFormik({
        initialValues: intialValuesCheckout,
        validationSchema: validitionPayment,
        onSubmit: (value) => {
            console.log(value);
            setActiveDialog(true)
        }

    })
    return (
        <>
            <form onSubmit={formik.handleSubmit} className="mt-10 text-white bg-black px-4 pt-8 lg:mt-0 h-screen ">
                <p className="text-xl font-medium">Payment Details</p>
                <p className="text-gray-400">
                    Complete your order by providing your payment details.
                </p>
                <div className="">

                    <label
                        htmlFor="address"
                        className="mt-4 mb-2 block text-sm font-medium"
                    >
                        Billing Address
                    </label>
                    <div className="flex flex-col sm:flex-row">
                        <div className="relative flex-shrink-0 sm:w-7/12  ">
                            <input
                                {...formik.getFieldProps(`address`)}
                                type="text"
                                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm bg-black shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Street Address"
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <img
                                    className="h-4 w-4 object-contain"
                                    src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <input
                            {...formik.getFieldProps(`zip`)}
                            type="number"
                            className="flex-shrink-0 rounded-md border bg-black border-gray-200  px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="ZIP"
                        />
                    </div>
                    {formik.touched.zip || formik.touched.address ? (
                        <ul className='mt-3 p-3   ' >
                            {formik.touched.zip ? <li className='text-red-500 ' >{formik.errors.zip}</li> : null}
                            {formik.touched.address ? <li className='text-red-500' >{formik.errors.address}</li> : null}

                        </ul>
                    ) : null}

                    {/* Total */}
                    <SubTotal totalPrice={totalPrice} />
                </div>
                {/* place order */}
                <button type='submit' className="mt-4 mb-8 w-full rounded-md bg-sky-600 px-6 py-3 font-medium text-white">
                    Place Order
                </button>

            </form>
            <CheckOut totalPrice={totalPrice} CloseDialog={CloseDialog} activeDialog={activeDialog} setActiveDialog={setActiveDialog} />

        </>
    )
}
