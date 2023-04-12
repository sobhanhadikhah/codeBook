import { Navigate } from "react-router-dom"
import { token } from "../schema/validitionLogin"
export const AccessRouteHigh = ({ children }) => {

    return token ? <Navigate to={`/`} /> : children
}
