import * as yup from "yup"; 
export const validitionPayment = yup.object().shape({
    address: yup.string().required(),
    zip: yup.number().required(),
    
})
export const intialValuesPayment = {
    address: "",
    zip:""
}
