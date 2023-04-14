import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cardClear } from "../featcures/cartSlice";
import { toast } from "react-toastify";

    const disPatch = useDispatch()
    const navigate = useNavigate();
  export  const handleOnSubmiteCheckout = (value) => {
        try {
            console.log(`its ok`);
            console.log(value);
            
            // throw new Error("somthing Wrong")
            navigate(`/order/${nanoid()}`, { state: { status: true, data: value } })
            disPatch(cardClear());
            toast.success(`ALL DONE`)

        } catch (error) {
            navigate(`/order/${nanoid()}`, { state: { status: false, data: value } })
            toast.error("Somthing went Wrong")

        }
    }