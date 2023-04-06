import { Transition } from "../../components"
import { FormSignIn } from "./components/form";
import { intialVaues, validitionSchema } from "../../schema/validition";
import { toast } from 'react-toastify';
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Login = () => {
    const navigate = useNavigate()
    const [btnDisable, setBtnDisable] = useState(false)
    const handleOnSubmite = async (value) => {
        try {
            const option = {
                url: "https://fakestoreapi.com/auth/login",
                method: "POST",
                data: value
            }
            setBtnDisable(true)

            console.log(value);
            const { data } = await axios.request(option)
            console.log(data);
            setBtnDisable(true)
            sessionStorage.setItem(`token`, data.token)
            setTimeout(async () => {
                toast.success(`sucsses`)
                navigate(`/`)
            }, 3000);


        } catch (error) {
            setBtnDisable(false);
            console.log(`wrong`);
            console.log(error);
            toast.error(`somthing wrong please try agine`);
        }
    }
    const formik = useFormik({
        initialValues: intialVaues,
        validationSchema: validitionSchema,
        onSubmit: (value) => {
            handleOnSubmite(value)
        }
    })
    return (
        <Transition>
            <FormSignIn btnDisable={btnDisable} formik={formik} />

        </Transition>
    )
}
