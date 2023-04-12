import { Navigate } from "react-router-dom";
import { token } from "../schema/validitionLogin";
export const ProtechtedRoutes = ({ children, path }) => {
  return token ? children : <Navigate to={path} />
}
