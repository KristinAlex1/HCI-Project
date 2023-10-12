
import { motion } from 'framer-motion'


export default function BackToTop() {

    const backToTop = () => {
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

  return (
    <div className='flex justify-center'>  
    <motion.div className='flex justify-center'
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: .8}}>
        <button onClick={backToTop} className='bg-gray-500 rounded-2xl text-white flex items-center text-2xl px-4 py-2 shadow-xl'>Back to Top</button>
    </motion.div>
    </div>
  )
}
