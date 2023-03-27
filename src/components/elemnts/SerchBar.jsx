import { useState, useRef, useEffect, useMemo } from "react";
import { useGetshopbyNameQuery } from "../../services/fakeShop";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { seacrhBarParentVar } from "../../utils/motion";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
export const SerchBar = ({ setSerchToggle, serchToggle }) => {
    const { data, isLoading } = useGetshopbyNameQuery(`products`);
    const [items, setItems] = useState([])
    const [querry, setQuerry] = useState('')
    const filterItems = useMemo(() => {
        return data && data.filter(({ title }) => {
            return title.toLowerCase().includes(querry.toLowerCase())
        })
    }, [data, querry])
    const handleOnChange = (e) => {

        setQuerry(e.target.value)

        setItems(filterItems);
    }
    const handleOnSubmite = (e) => {
        e.preventDefault();
    }

    return (
        <motion.div variants={seacrhBarParentVar} initial="hidden" animate={serchToggle ? "visible" : "hidden"} className="bg-red h-screen   w-full absolute lg:top-auto top-0 bg-white backdrop-blur backdrop-filter    bg-opacity-5 " >
            <IoMdClose size={30} className="right-0 absolute lg:hidden  mt-14 mr-6 " onClick={() => setSerchToggle(!serchToggle)} />
            <div className="bg-black h-[50vh]" >
                <div className="max-w-[1240px] mx-auto  " >
                    <div className="pt-20 lg:ml-0 ml-12 " >
                        <form onSubmit={handleOnSubmite} className="flex items-center" >
                            <IoIosSearch size={30} className="ml-3" />


                            <input value={querry} onChange={handleOnChange} type="search" placeholder="Search"
                                className="bg-transparent text-white font-SFPRODISPLAYMEDIUM text-3xl outline-none focus:outline-none placeholder:text-gray-400 p-3 w-full " />

                        </form>
                        <div className="" >
                            {items && items.map(({ title, id }) => {
                                return <Link onClick={() => setSerchToggle(!serchToggle)} to={`/products/${id}`} key={nanoid()} >{title}</Link>
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
