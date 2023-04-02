import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion"
import { useGetshopbyNameQuery } from "../../../services/fakeShop";
import { filterBarNavVar } from "../../../utils/motion";
import { nanoid } from "@reduxjs/toolkit";
import { handleFilter } from "../../../featcures/cartSlice";
import { filterBarPrice, filterBarRate } from "../../../utils/content";
import { useState } from "react";
import { Radio, RadioGroup } from '@sajari/react-components';
export const FilterBar = ({ FilterBarToggle, intialData, setFilterBarToggle }) => {
    const disPatch = useDispatch();
    const [PriceValue, setPriceValue] = useState(null);
    const [categoryValue, setCategory] = useState(null);
    const [RateValue, setRateValue] = useState(null);
    const { data, isLoading, status } = useGetshopbyNameQuery(`products/categories`);
    const filterBarOptions = (type, intialStae, option) => {
        disPatch(handleFilter({ type: type, intialStae: intialStae, option: option }))
    }
    const handleOnReset = () => {
        filterBarOptions("reset", intialData)
        setPriceValue(null);
        setCategory(null);
        setRateValue(null);
        setFilterBarToggle(!FilterBarToggle)
    }
    const handleOnChangeFilterPrice = (e) => {
        const type = e.target.value
        setPriceValue(type)
        filterBarOptions(type, intialData,)
    }
    const handleOnCategoryFilter = (e) => {
        const category = e.target.value
        setCategory(category)
        filterBarOptions("category", intialData, category)
        setPriceValue(null);
        setRateValue(null);

    }
    const handleOnRate = (e) => {
        const RateMethode = e.target.value;
        setRateValue(RateMethode)
        filterBarOptions(RateMethode)
        setPriceValue(null);

    }


    return (
        <motion.div variants={filterBarNavVar} initial='hidden' animate={FilterBarToggle ? "visible" : "hidden"}
            className='absolute  bg-black border-r-2 border-t-2 border-b-2  left-0 flex w-[300px]  h-screen p-1 rounded-r-sm z-50 ' >
            <button onClick={() => setFilterBarToggle(!FilterBarToggle)} className="absolute flex right-0 p-4 " >X</button>
            <div className="p-4" >
                <h1 className="font-SFPRODISPLAYMEDIUM tracking-widest" >
                    Filter
                </h1>
                <div>
                    <h1 className="bg-red-500 p-1 rounded-md cursor-pointer inline-block" onClick={handleOnReset} >Reset Filter</h1>
                    <h1 className="text-purple-500 font-extrabold " >By Category</h1>
                    <RadioGroup onChange={handleOnCategoryFilter} value={categoryValue} >
                        {data ? data.map((category) => {
                            return (

                                <Radio checked={categoryValue === category ? true : false}
                                    key={nanoid()}
                                    value={category}
                                    className="font-SFPRODISPLAYMEDIUM focus:text-red-500 capitalize cursor-pointer hover:underline "

                                >
                                    {category}
                                </Radio>


                            )
                        })
                            :
                            null}

                    </RadioGroup>
                    <h1 className="text-purple-500 font-extrabold" >By Price </h1>
                    <RadioGroup onChange={handleOnChangeFilterPrice} value={PriceValue} name="price" className="text-white" >
                        {
                            filterBarPrice ? filterBarPrice.map(({ id, type, title }) => {
                                return (

                                    <Radio key={id} placeholder="price"

                                        value={type}
                                        checked={PriceValue === type ? true : false}
                                        name={type} id={type}
                                    >
                                        {title}
                                    </Radio>


                                )
                            })
                                : null
                        }
                    </RadioGroup>
                    <h1 className="text-purple-500" > By Rate </h1>
                    <RadioGroup value={RateValue} onChange={handleOnRate} name="Rate"   >
                        {
                            filterBarRate.map(({ id, title, type }) => {
                                return <Radio value={type} checked={RateValue === type ? true : false} key={id} >{title}</Radio>
                            })
                        }

                    </RadioGroup>

                </div>
            </div>
        </motion.div>
    )
}
