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