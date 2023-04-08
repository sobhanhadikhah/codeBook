import { Routes, Route } from "react-router-dom"
import { Err404, HomePage, Products, ProductsDetaile, CategoryItemsPage, Login, CartPage } from "../pages"
import { AnimatePresence } from "framer-motion"
const AllRoutes = () => {
  return (
    <AnimatePresence mode="wait" >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetaile />} />
        <Route path="/productsbycategory/:category" element={<CategoryItemsPage />} />
        <Route path="login" element={<Login />} />
        <Route path="carts" element={<CartPage />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AllRoutes