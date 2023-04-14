import * as Yup from "yup";
export const validitionCheckout = Yup.object().shape({
    email: Yup.string().email().required("required"),
    cardHolder: Yup.string().min(3).required("required"),
    cardNumber: Yup.number().min(16).required("required"),
    date:Yup.number().required("required"),
    cvc:Yup.number().required("required"),
    securityCode: Yup.number().min(6).required("required"),
   // rememberCard: Yup.boolean(false).required()
})
export const  intialValueCheckout = {
        email: "",
        cardHolder: "",
        cardNumber: "",
        date: "",
        cvc:"",
        securityCode: "",
      //  rememberCard:false
}
