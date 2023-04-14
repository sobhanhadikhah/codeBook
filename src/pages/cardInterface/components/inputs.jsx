export const InputCheckout = ({
    id,
    placeholder,
    lable,
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    children,
    ...props
}) => {

    return (
        <>
            <label htmlFor={id ? id : "setId"} className="mt-4 mb-2 block text-sm font-medium">
                {lable ? lable : "lable"}
            </label>
            <div className="relative">
                <input

                    {...field}
                    {...props}
                    type={"text"}
                    className="w-full text-black rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={placeholder}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    {children}
                </div>
            </div>
        </>



    )
}
