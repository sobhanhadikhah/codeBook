import { Transition } from "../../components"
import { FormSignIn } from "./components/form";
import { intialVaues, validitionSchema } from "../../schema/validition";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
    const navigate = useNavigate()
    const handleOnSubmite = async (value) => {
        try {
            const option = {
                url: "https://fakestoreapi.com/auth/login",
                method: "POST",
                data: value
            }
            console.log(value);
            const { data } = await axios.request(option)
            console.log(data);
            localStorage.setItem(`token`, data.token);
            toast.success(`sucsses`)
            navigate(`/`)

        } catch (error) {
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
            <FormSignIn formik={formik} />
            <ToastContainer />
        </Transition>
    )
}
