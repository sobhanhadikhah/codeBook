import { NavbarContent } from "../../utils/content";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { NavHumbergerVar, NavLargParentVar, listVaritions, seacrhBarParentVar } from "../../utils/motion";
import { AiFillShopping } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io"
import { SerchBar } from "../elemnts/SerchBar";
import { ButttonGlowing } from "../elemnts/btnGlowing";
import { token } from "../../schema/validition";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
export const Header = () => {
    const [NavToggle, setNavToggle] = useState(false);
    const [serchToggle, setSerchToggle] = useState(false);
    const navigate = useNavigate();
    const handleOnLogout = () => {
        sessionStorage.removeItem(`token`)
        toast.error(`loged out !`)
        //navigate(`login`)
        setNavToggle(false)
        window.location = "login";
    }
    const { carts } = useSelector(state => state.cartState);
    console.log(carts);
    return (
        <motion.header variants={NavLargParentVar} initial="hidden" animate="visible" className="bg-black   top-0 sticky z-30 text-white  " >
            <nav className="max-w-[1240px]   mx-auto h-[98px] flex items-center  " >

                <h3 to={`/`} className=" font w-full ml-3 tracking-widest   font-Caveat text-3xl   " >
                    <Link to={`/`} >CodeBook</Link>
                </h3>
                <div className="mx-3" >
                    {/* larg display navbar contents */}
                    <ul className="lg:flex flex-row  gap-x-6 hidden font-Shadows-Into-Light text-xl items-center text-center justify-center tracking-widest font-semibold " >
                        {NavbarContent.map(({ id, title, path }) =>
                            <motion.li variants={listVaritions} key={id} >

                                <Link to={path} >{title}</Link>
                            </motion.li>
                        )}
                        <IoIosSearch size={30} className="cursor-pointer" onClick={() => setSerchToggle(!serchToggle)} />

                        <Link to={`carts`} className="flex  font-SFPRODISPLAYMEDIUM  " >
                            <AiFillShopping size={30} className="cursor-pointer" />
                            <span className="absolute z-50 bottom-7 m-6 p-1 text-white  rounded-full  text-sm items-center justify-center text-center " >
                                {carts.length}
                            </span>
                        </Link>
                        |
                        {
                            token ? <h1 onClick={handleOnLogout} className="cursor-pointer" >Logout</h1> :
                                (
                                    <>
                                        <Link to={`Login`} className="bg-sky-500 px-3 flex justify-center items-center text-center font-SFPRODISPLAYMEDIUM py-1 transition duration-150 ease-in-out rounded-md  text-sm hover:bg-sky-600  " >
                                            Login
                                        </Link>
                                        <Link to={`Register`} className=" px-3 flex tracking-widest justify-center items-center text-center py-1 rounded-md font-SFPRODISPLAYMEDIUM hover:bg-purple-600 text-sm transition duration-150 ease-in-out  " >
                                            Register
                                        </Link>

                                    </>
                                )
                        }

                    </ul>

                    {/* phone and tablet navbar contents */}
                    <div className="lg:hidden flex" >
                        <IoIosSearch size={30} className="cursor-pointer mr-3 " onClick={() => setSerchToggle(!serchToggle)} />
                        <Link to={`carts`} className="flex items-center justify-center text-center " >
                            <span className="absolute  z-50  bottom-1 m-6 p-1 text-black font-semibold rounded-full text-lg   items-center justify-center text-center " >
                                {carts.length}
                            </span>
                            <AiFillShopping size={30} className="mx-3" />
                        </Link>


                        <HiMenuAlt4 size={30} onClick={() => setNavToggle(!NavToggle)} />
                    </div>
                </div>
            </nav>
            <motion.div variants={NavHumbergerVar}
                initial="hidden" animate={NavToggle ? "visible" : "hidden"}

                className=" absolute top-0 lg:hidden    w-screen z-50 h-screen  bg-black   " >

                <TfiClose size={25} onClick={() => setNavToggle(!NavToggle)} className="right-0  absolute mr-3 mt-8  " />
                <ul className="   grid grid-flow-row   gap-4 pl-8 pt-20   justify-start text-[#e8e8ed] text-[28px]
                  font-Shadows-Into-Light  tracking-widest font-semibold " >
                    {NavbarContent.map(({ id, title, path }) =>
                        <motion.li variants={listVaritions} key={id}  >
                            <Link onClick={() => setNavToggle(!NavToggle)} className=" text-3xl font-SFPRODISPLAYMEDIUM " to={path} >{title}</Link>
                        </motion.li>
                    )}
                    <div className="flex absolute bottom-7 flex-col gap-8 text-base justify-center items-center   " >
                        <div className="flex flex-col gap-8 items-center justify-center " >
                            {
                                token ? <ButttonGlowing onClick={handleOnLogout} >Logout</ButttonGlowing> :
                                    (
                                        <>
                                            <ButttonGlowing to={`/register`} onClick={() => setNavToggle(!NavToggle)} >
                                                Register
                                            </ButttonGlowing>
                                            <ButttonGlowing to={`login`} onClick={() => setNavToggle(!NavToggle)} >
                                                login
                                            </ButttonGlowing>
                                        </>
                                    )
                            }
                        </div>

                    </div>
                </ul>


            </motion.div>
            {/* search bar */}
            {serchToggle ? <SerchBar serchToggle={serchToggle} setSerchToggle={setSerchToggle} /> : null}

        </motion.header>
    )
}
