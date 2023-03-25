import React from 'react'
import { useTitle } from '../../hooks';
import { useGetshopbyNameQuery } from '../../services/fakeShop';
import { ProductsCart, Transition } from '../../components'
import { CgMenuGridO } from 'react-icons/cg'
export const Products = () => {
    const { data, status, isLoading } = useGetshopbyNameQuery(`products`)

    useTitle(`Products`)
    return (
        <div className=' bg-black   ' >
            <Transition>
                <section className='py-5 max-w-[1240px] mx-auto ' >
                    <div className='my-5 mx-3 flex justify-between' >
                        <span className='text-2xl font-semibold mb-4' >
                            All Products
                        </span>
                        <span>
                            <button className='inline-block' >
                                <CgMenuGridO size={25} />
                            </button>
                        </span>
                    </div>
                    <div className=' flex flex-wrap mx-3  gap-2 justify-center  ' >
                        {data ? data.map(items => {
                            return <ProductsCart key={items.id}  {...items} />
                        }) : null}

                    </div>

                </section>
            </Transition>
        </div>
    )
}
