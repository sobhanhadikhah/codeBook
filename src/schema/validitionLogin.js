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
export const intialValues = {
    username:"",
    password:""
} 

export const token = localStorage.getItem(`token`)