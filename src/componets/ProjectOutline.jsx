import { motion } from "framer-motion"

import BackToHome from "./buttons/BackToHome"
import BackToTop from "./buttons/BackToTop"


export default function ProjectOutline() {
  return (
    <motion.div className='flex flex-col gap-24'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: .5}}>

      <BackToHome/>

      {/* Project OutLine Title */}
      <div className='flex justify-center'>
          <div className='bg-teal-700 rounded-2xl text-white flex justify-center items-center text-2xl px-4 py-4 drop-shadow-2xl'>
            <h1 className=''>
              Project OutLine
            </h1>
          </div>
      </div>


      {/* Project OutLine Container */}
      <div className='flex justify-center'>
          <motion.div className='bg-teal-900 rounded-2xl text-white flex flex-col gap-16 justify-center items-center text-2xl px-6 py-4 drop-shadow-2xl'
                      whileHover={{scale: 1.1}}>

          {/* Project */}
          <div className='flex flex-col justify-center'>
              <p className='text-6xl px-2 py-2'>
                <p className=''>
                 Project
                </p>
              </p>
              <div className='border-b-2 border-gray-350 w-full mt-2'/>
            </div>


            {/* Team Formation */}
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                  Team Formation
              </h1>

              <h1 className="text-2xl">
                  - Groups of 3-5
              </h1>
            </div>



            {/* Proposal */}
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                  Proposal
              </h1>

              <h1 className="text-2xl">
                  ~2 pages with big picture goals
              </h1>
            </div>

            {/* Implementation */}
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                Implementation
              </h1>

              <h1 className="text-2xl">
                - In your language of choice
              </h1>

              <h1 className="text-2xl">
                - But it has to work
              </h1>
            </div>


            {/* User studies/Data Gathering */}
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                User studies/Data Gathering
              </h1>

              <h1 className="text-2xl">
                - User studies
              </h1>
            </div>


            {/* Data analysis */}
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                Data analysis
              </h1>

              <h1 className="text-2xl">
                - Pulling important statistics
              </h1>
            </div>


             {/* Paper, presentation */}
             <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                Paper, presentation
              </h1>

              <h1 className="text-2xl">
                - Slideshow for the class
              </h1>

              <h1 className="text-2xl">
                - Short, conference style
              </h1>
            </div>

          </motion.div>
      </div>




       {/* Project Timeline Container */}
       <div  className='flex justify-center'>
          <motion.div className='bg-teal-900 rounded-2xl text-white flex flex-col gap-16 justify-center items-center text-2xl px-6 py-4 drop-shadow-2xl'
                      whileHover={{scale: 1.1}}>

          {/* Project Timeline */}
          <div className='flex flex-col justify-center'>
              <p className='text-6xl px-2 py-2'>
                <p className=''>
                  Timeline
                </p>
              </p>
              <div className='border-b-2 border-gray-350 w-full mt-2'/>
            </div>


            {/* Team Formation */}
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                  Team Formation
              </h1>

              <h1 className="text-2xl">
                  - Due Sept 15
              </h1>
            </div>



            {/* Proposal */}
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                  Proposal
              </h1>

              <h1 className="text-2xl">
                  - Due Sept 22
              </h1>
            </div>

            {/* Implementation */}
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                Implementation
              </h1>

              <h1 className="text-2xl">
                - Oct 27
              </h1>

            </div>


            {/* User studies/Data Gathering */}
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                User studies/Data Gathering
              </h1>

              <h1 className="text-2xl">
                - Oct 23, 25, 27
              </h1>
            </div>


            {/* Data analysis */}
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                Data analysis
              </h1>

              <h1 className="text-2xl">
                - Nov 6/8 ~ Nov 24
              </h1>
            </div>


             {/* Paper */}
             <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                Paper
              </h1>

              <h1 className="text-2xl">
                - Nov 6/8 ~ Nov 24
              </h1>
            </div>

            {/* Paper */}
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl">
                Paper
              </h1>

              <h1 className="text-2xl">
                - Nov 6/8 ~ Nov 24
              </h1>
            </div>


          </motion.div>
      </div>

      <BackToTop/>
    </motion.div>
  )
}
