import { motion } from 'framer-motion'
import { err404Var } from '../../utils/motion';
import { useTitle } from '../../hooks';
export const Err404 = () => {
    useTitle(`Error 404`)
    return (
        <div className='bg-black h-screen grid place-content-center ' >
            <motion.div variants={err404Var} initial="hidden" whileInView="visible" className='grid place-content-center text-center justify-center  ' >
                <h1 className='lg:text-9xl text-4xl font-Shadows-Into-Light underline rounded-2xl ' >Error 404 </h1>

            </motion.div>
        </div>
    )
}
