import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'


export default function HomePage() {
  return (
    <motion.div className='flex justify-center flex-col gap-24 items-cener'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: .5}}>

        <div className='flex justify-center lg:mt-24'>
            <motion.div className='bg-gradient-to-r from-slate-400 via-slate-400 to-slate-500 h-44 w-96 flex justify-center rounded-2xl items-center shadow-2xl'>
                <h1 className=''> Welcome to COMP 3583</h1>
            </motion.div>
        </div>

        <div className='flex flex-col justify-center gap-12 items-center'>

          <motion.div initial={{opacity: 0, x: 20}}
                      whileInView={{opacity: 1, x: 0}}
                      transition={{delay: .1}}
                      exit={{opacity: 0, x: 20}}>
            <motion.div
                      whileHover={{scale: 1.1}}>
              <NavLink to="CourseOutline" className='bg-cyan-900 rounded-2xl text-white flex items-center text-4xl px-4 py-2 shadow-xl'>Course Outline</NavLink>
            </motion.div>
          </motion.div>

          <motion.div initial={{opacity: 0, x: 20}}
                      whileInView={{opacity: 1, x: 0}}
                      transition={{delay: .2}}
                      exit={{opacity: 0}}>
            <motion.div
                      whileHover={{scale: 1.1}}>
              <NavLink to="ProjectOutline" className='bg-teal-900 rounded-2xl text-white flex items-center text-4xl px-4 py-2 shadow-xl'>Project Outline</NavLink>
            </motion.div>
          </motion.div>

          <motion.div initial={{opacity: 0, x: 20}}
                      whileInView={{opacity: 1, x: 0}}
                      transition={{delay: .3}}
                      exit={{opacity: 0}}>
            <motion.div
                      whileHover={{scale: 1.1}}>
              <NavLink to="ConceptualizeDesign" className='bg-red-900 rounded-2xl text-white flex items-center text-4xl px-4 py-2 shadow-xl'>Conceptualize Design</NavLink>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{opacity: 0, x: 20}}
                      whileInView={{opacity: 1, x: 0}}
                      transition={{delay: .4}}
                      exit={{opacity: 0}}>
            <motion.div
                      whileHover={{scale: 1.1}}>
              <NavLink to="MemoryLearning" className='bg-purple-950 rounded-2xl text-white flex items-center text-4xl px-4 py-2 shadow-xl'>Memory and learning</NavLink>
            </motion.div>
          </motion.div>

        </div>
    </motion.div>
  )
}
