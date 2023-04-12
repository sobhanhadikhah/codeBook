import axios from "axios";
import { toast } from "react-toastify";
import * as Yup from "yup";
export const validitionSchema = Yup.object().shape({
    username: Yup.string().required().min(4),
    password:Yup.string().required().min(4),
    /* confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"), */
});
export const intialVaues = {
    username:"",
    password:""
} 
export const handleOnSubmite = async (value,btnDisable, setBtnDisable) => {
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
            window.location = "/";
        }, 3000);
        
        
    } catch (error) {
        setBtnDisable(false);
        console.log(`wrong `);
        console.log(error);
        toast.error(`somthing wrong please try agine`);
    }
}
export const token = sessionStorage.getItem(`token`) 