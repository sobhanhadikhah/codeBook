import { motion } from "framer-motion"
import { useGetshopbyNameQuery } from "../../../services/fakeShop";
import { filterBarNavVar } from "../../../utils/motion";
import { nanoid } from "@reduxjs/toolkit";
export const FilterBar = ({ FilterBarToggle }) => {
    const { data, isLoading, status } = useGetshopbyNameQuery(`products/categories`)
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
                        {data ? data.map((item) => {
                            return (
                                <li key={nanoid()} >
                                    <div className="font-mono capitalize "  >
                                        <label name={item} id={item} >
                                            <input type="checkbox" className="m-3" id={item} name={item} />

                                            {item}
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
