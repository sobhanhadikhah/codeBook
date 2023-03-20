import React from 'react'
import { useTitle } from '../../hooks'
import { Hero } from './components';
import { Transition } from '../../components';
export const HomePage = () => {
    useTitle(`Home`)
    return (
        <div className='h-screen bg-black ' >
            <Transition  >

                <div  >
                    in the Home page

                </div>
            </Transition>
        </div>

    )
}

