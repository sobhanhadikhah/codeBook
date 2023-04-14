import axios from "axios";
import { toast } from "react-toastify";

export const logIn = async (value,btnDisable, setBtnDisable) => {
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
        localStorage.setItem(`token`, data.token)
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