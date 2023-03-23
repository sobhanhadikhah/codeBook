import React from 'react'
import { useTitle } from '../../hooks'
import { Hero } from './components';
import { Transition } from '../../components';
export const HomePage = () => {
    useTitle(`Home`)
    return (
        <main className='h-screen bg-black  ' >
            <Transition  >
                <div>
                    <Hero />
                </div>

            </Transition>
        </main>

    )
}

