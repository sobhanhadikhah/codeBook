import { Routes, Route } from "react-router-dom"
import { Err404, HomePage, Products, ProductsDetaile, CategoryItemsPage, Login, CartPage, OrderPage } from "../pages"
import { AnimatePresence } from "framer-motion"
import { ProtechtedRoutes } from "./ProtechtedRoutes"
import { AccessRouteHigh } from "./AccessRouteHigh"
const AllRoutes = () => {
  return (
    <AnimatePresence mode="wait" >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetaile />} />
        <Route path="/productsbycategory/:category" element={<CategoryItemsPage />} />
        <Route path="login" element={<AccessRouteHigh><Login /></AccessRouteHigh>} />
        <Route path="carts" element={<ProtechtedRoutes path={`/login`} ><CartPage /></ProtechtedRoutes>} />
        <Route path="/order/:nano" element={<OrderPage />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AllRoutes