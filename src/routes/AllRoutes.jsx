import { Routes, Route } from "react-router-dom"
import { Err404, HomePage, Products } from "../pages"
import { AnimatePresence } from "framer-motion"
const AllRoutes = () => {
  return (
    <AnimatePresence mode="wait" >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AllRoutes