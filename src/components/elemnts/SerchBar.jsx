import { IoIosSearch, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { seacrhBarParentVar } from "../../utils/motion";
export const SerchBar = ({ setSerchToggle, serchToggle }) => {
    return (
        <motion.div variants={seacrhBarParentVar} initial="hidden" animate={serchToggle ? "visible" : "hidden"} className="bg-red h-screen   w-full absolute lg:top-auto top-0 bg-white backdrop-blur backdrop-filter    bg-opacity-5 " >
            <IoMdClose size={30} className="right-0 absolute lg:hidden  mt-14 mr-6 " onClick={() => setSerchToggle(!serchToggle)} />
            <div className="bg-black h-[50vh]" >
                <div className="max-w-[1240px] mx-auto  " >
                    <div className="pt-20 lg:ml-0 ml-12 " >
                        <div className="flex items-center" >
                            <IoIosSearch size={30} className="ml-3" />
                            

                                <input type="search" placeholder="Search"
                                    className="bg-transparent text-white font-SFPRODISPLAYMEDIUM text-3xl outline-none focus:outline-none placeholder:text-gray-400 p-3 w-full " />
                            
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
