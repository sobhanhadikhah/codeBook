import React from 'react'
import { useTitle } from '../../hooks'
import { Transition } from '../../components'
export const Products = () => {
    useTitle(`Products`)
    return (
        <div className='h-screen bg-black' >
            <Transition>
                <h1>Products</h1>
            </Transition>
        </div>
    )
}
