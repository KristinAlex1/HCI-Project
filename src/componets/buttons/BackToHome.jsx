
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function BackToHome() {
  return (
    <div className='flex justify-center'>  
    <motion.div className='flex justify-center'
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: .8}}>
        <NavLink to="/" className='bg-gray-500 rounded-2xl text-white flex items-center text-2xl px-4 py-2 shadow-xl'>Back</NavLink>
    </motion.div>
    </div>
  )
}
