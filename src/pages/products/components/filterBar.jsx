import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion"
import { useGetshopbyNameQuery } from "../../../services/fakeShop";
import { filterBarNavVar } from "../../../utils/motion";
import { nanoid } from "@reduxjs/toolkit";
import { filterItemsByCategory } from "../../../featcures/cartSlice";
export const FilterBar = ({ FilterBarToggle, intialData }) => {
    const disPatch = useDispatch();

    const { data, isLoading, status } = useGetshopbyNameQuery(`products/categories`);
    return (
        <motion.div variants={filterBarNavVar} initial='hidden' animate={FilterBarToggle ? "visible" : "hidden"}
            className='absolute  bg-black border-r-2 border-t-2 border-b-2  left-0 flex w-[300px]  h-screen p-1 rounded-r-sm z-50 ' >
            <div className="p-4" >
                <h1 className="font-SFPRODISPLAYMEDIUM tracking-widest" >
                    Filter
                </h1>
                <div>
                    <h1 className="text-purple-500 font-extrabold " >By Category</h1>
                    <div className="border-2" />
                    <ul>
                        {data ? data.map((category) => {
                            return (
                                <li key={nanoid()} >
                                    <div className="font-mono capitalize "  >
                                        <label name={category} id={category} >
                                            <input onClick={() => disPatch(filterItemsByCategory({ category: category, intialStae: intialData }))}
                                                type="radio" className="m-3" id={category} name={category} />

                                            {category}
                                        </label>   </div>
                                </li>
                            )
                        }) : null}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}
