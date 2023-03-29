import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react"
import { FilterBar } from './components';
import { useTitle } from '../../hooks';
import { useGetshopbyNameQuery } from '../../services/fakeShop';
import { Loading, ProductsCart, Transition } from '../../components'
import { CgMenuGridO } from 'react-icons/cg'
import { addToProducts } from "../../featcures/cartSlice";
export const Products = () => {
    const disPatch = useDispatch();
    const Products = useSelector(state => state.cartState.products);
    const { data, status, isLoading } = useGetshopbyNameQuery(`products`)
    const [FilterBarToggle, setFilterBarToggle] = useState(false);
    const handleOnFilterBar = () => {
        setFilterBarToggle(!FilterBarToggle)
    }
    useTitle(`Products`)

    return (
        <div className=' bg-black   ' >
            <Transition  >
                <FilterBar FilterBarToggle={FilterBarToggle} />
                <section className='py-5 max-w-[1240px] mx-auto ' >
                    <div className='my-5 mx-3 flex justify-between' >
                        <span className='text-2xl font-semibold mb-4' >
                            All Products ({data ? data.length : null})
                        </span>
                        <span>
                            <button className='inline-block' >
                                <CgMenuGridO size={25} onClick={handleOnFilterBar} />
                            </button>
                        </span>
                    </div>
                    <div className=' flex flex-wrap mx-3  gap-2 justify-center  ' >
                        {data ? Products.map(items => {
                            return <h1>{items.title}</h1>
                        }) : <Loading />}

                    </div>

                </section>
            </Transition>
        </div>
    )
}
