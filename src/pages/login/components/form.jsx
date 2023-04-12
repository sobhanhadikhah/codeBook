import { ButttonGlowing } from "../../../components"
import { Formik, Form, Field, useFormik } from "formik";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai"
export const FormSignIn = ({ formik, btnDisable }) => {
    const disableBtn = "cursor-not-allowed bg-opacity-50 ";
    const { handleSubmit, } = formik;
    return (
        <div className="bg-black font-SFPRODISPLAYMEDIUM " >
            <div className="max-w-[1240px] mx-auto bg-black " >
                <section className="relative flex flex-wrap bg-black lg:h-screen lg:items-center">
                    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                        <div className="mx-auto max-w-lg text-center">
                            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                            <p className="mt-4 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                                eaque error neque ipsa culpa autem, at itaque nostrum!
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mx-auto text-black mt-8 mb-0 max-w-md space-y-4">
                            <div className="flex  flex-col   text-black mt-4  " >
                                <div className="my-2" >
                                    <label className="text-white my-1 " htmlFor="email">UserName</label>
                                    <input type="text" {...formik.getFieldProps(`username`)} className="w-full focus:outline-none  p-2 rounded-md " />
                                    {formik.touched.username && formik.errors.username ?
                                        <div className="text-red-500 tracking-widest" >{formik.errors.username}</div>
                                        : null}
                                </div>
                                <div className="my-2" >
                                    <label className="text-white my-1" htmlFor="password">Password</label>
                                    <input type="password"  {...formik.getFieldProps(`password`)} className="w-full focus:outline-none  p-2 rounded-md " />
                                    {formik.touched.password && formik.errors.password ?
                                        <div className="text-red-500 tracking-widest" >{formik.errors.password}</div>
                                        : null}
                                </div>
                                <button disabled={btnDisable} type="submit"
                                    className={`bg-sky-600 text-white my-4 p-2 rounded-md  ${btnDisable === true ? "cursor-not-allowed flex items-center justify-center bg-blue-400 " : null} `} >
                                    {btnDisable ?
                                        <AiOutlineLoading3Quarters className="animate-spin" size={25} />
                                        :
                                        "Login"
                                    }
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                        <img
                            alt="Welcome"
                            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </section>
            </div>
        </div>

    )
}
