import { motion } from "framer-motion"
export const Transition = ({ children }) => {
    const animationConfiguration = {
        initial: { opacity: 0, y: +50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
    };
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7, type: "spring" }}
        >
            {children}
        </motion.div>
    )
}



