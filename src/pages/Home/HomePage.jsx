import React from 'react'
import { useTitle } from '../../hooks'
import { Faq, FetchureItems, Hero, TestoMotion } from './components';
import { Transition } from '../../components';
export const HomePage = () => {
    useTitle(`Home`)
    return (
        <main className=' bg-black  ' >
            <Transition  >
                <Hero />
                <FetchureItems />
                <TestoMotion />
                <Faq />
            </Transition>
        </main>

    )
}

