import { NavbarContent } from "../../utils/content";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi"
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io"
import { NavHumbergerVar, NavLargParentVar, listVaritions, seacrhBarParentVar } from "../../utils/motion";
import { AiFillShopping } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io"
import { SerchBar } from "../elemnts/SerchBar";



export const Header = () => {
    const [NavToggle, setNavToggle] = useState(false);
    const [serchToggle, setSerchToggle] = useState(false);


    return (
        <motion.header variants={NavLargParentVar} initial="hidden" animate="visible" className="bg-black   top-0 sticky z-30 text-white  " >
            <nav className="max-w-[1240px]   mx-auto h-[98px] flex items-center  " >

                <h3 to={`/`} className=" font w-full ml-3 tracking-widest   font-Caveat text-3xl   " >
                    <Link to={`/`} >CodeBook</Link>
                </h3>
                <div className="mx-3" >
                    {/* larg display navbar contents */}
                    <ul className="lg:flex flex-row  gap-x-6 hidden font-Shadows-Into-Light text-xl tracking-widest font-semibold " >
                        {NavbarContent.map(({ id, title, path }) =>
                            <motion.li variants={listVaritions} key={id} >

                                <Link to={path} >{title}</Link>
                            </motion.li>
                        )}
                        <IoIosSearch size={30} className="cursor-pointer" onClick={() => setSerchToggle(!serchToggle)} />

                        <div className="hover:scale-150 tra " >
                            <AiFillShopping size={25} className="cursor-pointer   " />
                        </div>
                        |
                        <button className="bg-sky-500 px-3 flex justify-center items-center text-center font-SFPRODISPLAYMEDIUM py-1 transition duration-150 ease-in-out rounded-md  text-sm hover:bg-sky-600  " >SignIn</button>
                        <button className=" px-3 flex tracking-widest justify-center items-center text-center py-1 rounded-md font-SFPRODISPLAYMEDIUM hover:bg-purple-600 text-sm transition duration-150 ease-in-out  " >signUp</button>

                    </ul>

                    {/* phone and tablet navbar contents */}
                    <div className="lg:hidden flex" >
                        <IoIosSearch size={30} className="cursor-pointer mr-3 " onClick={() => setSerchToggle(!serchToggle)} />
                        <AiFillShopping size={25} className="mx-3" />


                        <HiMenuAlt4 size={30} onClick={() => setNavToggle(!NavToggle)} />
                    </div>
                </div>
            </nav>
            <motion.div variants={NavHumbergerVar}
                initial="hidden" animate={NavToggle ? "visible" : "hidden"}

                className=" absolute top-0 lg:hidden   justify-start w-screen z-50 h-screen  bg-black   " >

                <TfiClose size={25} onClick={() => setNavToggle(!NavToggle)} className="right-0  absolute mr-3 mt-8  " />
                <ul className="   grid grid-flow-row   gap-4 pl-8 pt-20   justify-start text-[#e8e8ed] text-[28px]
                  font-Shadows-Into-Light  tracking-widest font-semibold " >
                    {NavbarContent.map(({ id, title, path }) =>
                        <motion.li variants={listVaritions} key={id}  >
                            <Link onClick={() => setNavToggle(!NavToggle)} className=" text-3xl font-SFPRODISPLAYMEDIUM " to={path} >{title}</Link>
                        </motion.li>
                    )}
                </ul>
            </motion.div>
            {/* search bar */}
            {serchToggle ? <SerchBar serchToggle={serchToggle} setSerchToggle={setSerchToggle} /> : null}

        </motion.header>
    )
}
