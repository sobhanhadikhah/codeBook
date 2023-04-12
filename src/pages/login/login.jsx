import { Transition } from "../../components"
import { FormSignIn } from "./components/form";
import { handleOnSubmite, intialVaues, validitionSchema } from "../../schema/validitionLogin";
import { toast } from 'react-toastify';
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTitle } from "../../hooks";
export const Login = () => {
    useTitle(`Login`)
    const navigate = useNavigate()
    const [btnDisable, setBtnDisable] = useState(false)
    const formik = useFormik({
        initialValues: intialVaues,
        validationSchema: validitionSchema,
        onSubmit: (value) => {
            handleOnSubmite(value, btnDisable, setBtnDisable)
        }
    })
    return (
        <Transition>
            <FormSignIn btnDisable={btnDisable} formik={formik} />

        </Transition>
    )
}
