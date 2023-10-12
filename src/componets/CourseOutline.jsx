

import { motion } from 'framer-motion'
import BackToHome from './buttons/BackToHome'
import BackToTop from './buttons/BackToTop'

export default function CourseOutline() {
  return (
    <motion.div className='flex flex-col gap-24'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: .5}}>

      <BackToHome/>



        {/* Course Setup Title*/}
        <div className='flex justify-center'>
          <div className='bg-cyan-700 rounded-2xl text-white flex justify-center items-center text-2xl px-4 py-4 drop-shadow-2xl'>
            <h1 className=''>
              Course Outline
            </h1>
          </div>
        </div>


      <div className='flex justify-center'>
        <div className='flex lg:grid lg:grid-cols-2 flex-col justify-center gap-12'>

          
          {/* Grading box*/}
          <motion.div className='lg:w-80 bg-cyan-900 rounded-2xl text-white flex flex-col gap-4 justify-between items-center text-2xl px-8 py-8 shadow-2xl text-center'
                      whileHover={{scale: 1.1}}>
            
            <div className='flex flex-col justify-center'>
              <p className='text-5xl px-2 py-2'>
                <p className=''>
                  Grading
                </p>
              </p>
              <div className='border-b-2 border-gray-350 w-full mt-2'/>
            </div>
            
            <p className=''>
              Weekly quizzes - 15%
            </p>
            <p className=''>
              Project - 55%
            </p>
            <p className=''>
              Final - 30%
            </p>
          </motion.div>



          {/* Project box*/}
          <motion.div className='lg:w-80 bg-cyan-900 rounded-2xl text-white flex flex-col gap-8 justify-between items-center text-2xl px-8 py-8 shadow-2xl text-center'
                      whileHover={{scale: 1.1}}>
            
            <div className='flex flex-col justify-center'>
              <p className='text-5xl px-2 py-2'>
                <p className=''>
                  Project
                </p>
              </p>
              <p className='text-lg px-2 py-2'>
                *grading schemes copied from the lecture 1 slides*
              </p>
              <div className='border-b-2 border-gray-350 w-full mt-2'/>
            </div>
            

            <p className='mt-2'>
              Proposal: 5%
            </p>
            <div className='flex flex-col gap-2'>
            <p className=''>
              Implementation: 25%
            </p>
            <p className='text-lg'>
              -- Concerns incorporating lessons learned from
              class: 10%
            </p>
            <p className='text-lg'>
            -- Peer evaluation: 5%
            </p>
            </div>
            <p className=''>
              Final - 30%
            </p>
          </motion.div>

          {/* Text Book */}
          <motion.div className='lg:w-80 bg-cyan-900 rounded-2xl text-white flex flex-col gap-6 justify-between items-center text-2xl px-8 py-8 shadow-2xl text-center'
                      whileHover={{scale: 1.1}}>
            <p className='text-4xl px-2 py-2'>
              <p className=''>
                Text Book
              </p>
              <div className='border-b-2 border-gray-350 w-full mt-2'/>
            </p>
            <p className=''>
              Required: <br/> Interaction Design: beyond human-computer interaction
              (5th edition)
            </p>
            <p className=''>
              Recommended: <br/> Designing the User Interface: Strategies for Effective
              Human-Computer Interaction, 6th Edition
            </p>
          </motion.div>



          {/* Academic Dishonesty */}
          <motion.div className='lg:w-80 bg-cyan-900 rounded-2xl text-white flex flex-col gap-8 justify-start items-center text-2xl px-8 py-8 shadow-2xl text-center'
                      whileHover={{scale: 1.1}}>
            <p className='text-4xl px-2 py-2'>
              <p className=''>
                Academic Dishonesty
              </p>
              <div className='border-b-2 border-gray-350 w-full mt-2'/>
            </p>
            <p className=''>
              Don’t cheat
            </p>
            <p className=''>
              Don’t use someone else’s project or code
            </p>
            <div className='flex flex-col gap-2'>
              <p className=''>
                Just to clarify: 
              </p>
              <p className='text-lg'>
                Asking someone for help working out a bug or how to
                approach a problem is not academic dishonesty. This is
                learning, and we encourage it.
              </p>
              <p className='text-lg'>
                However, asking someone to write your code or coping code written by another and passing it in as your own IS a form of Academic Dishonesty
              </p>
            </div>
          </motion.div>



        </div>

      </div>


      <div className='flex justify-center'>
        {/* Course Subjects OUTSIDE OF GRID/FLEX*/}
        <motion.div className='lg:w-80 w-screen bg-cyan-900 rounded-2xl text-white flex flex-col gap-8 justify-start items-center text-2xl px-8 py-8 shadow-2xl text-center'
                        whileHover={{scale: 1.1}}>
              <p className='text-4xl px-2 py-2'>
                <p className=''>
                  Subjects
                </p>
                <div className='border-b-2 border-gray-350 w-full mt-2'/>
              </p>

              <p className=''>
                - Theory
              </p>
              <p className=''>
                - Development
              </p>
              <p className=''>
                - Data Gathering 
              </p>
              <p className=''>
                - Data Analysis
              </p>
              <p className=''>
                - Evaluation
              </p>
                
        </motion.div>
      </div>

      {/* New Container with Grid for lG */}
      <div className='lg:flex lg:justify-center'>
        <div className='flex lg:grid lg:grid-cols-2 flex-col justify-center gap-12'>


          {/* Theory */}
          <motion.div className='lg:w-80 bg-cyan-900 rounded-2xl text-white flex flex-col gap-4 justify-between items-center text-2xl px-8 py-8 shadow-2xl text-center'
                            whileHover={{scale: 1.1}}>
                  <p className='text-4xl px-2 py-2'>
                    <p className=''>
                      Theory
                    </p>
                    <div className='border-b-2 border-gray-350 w-full mt-2'/>
                  </p>

                  <p className=''>
                    Emotional Response
                  </p>
                  <p className=''>
                    Cognition
                  </p>
                    
          </motion.div>


          {/* Data Gathering */}
          <motion.div className='lg:w-80 bg-cyan-900 rounded-2xl text-white flex flex-col gap-4 justify-between items-center text-2xl px-8 py-8 shadow-2xl text-center'
                            whileHover={{scale: 1.1}}>
                  <p className='text-4xl px-2 py-2'>
                    <p className=''>
                      Data Gathering
                    </p>
                    <div className='border-b-2 border-gray-350 w-full mt-2'/>
                  </p>

                  <p className=''>
                    Interview/Questionnaire
                  </p>
                  
          </motion.div>


          {/* Data Gathering */}
          <motion.div className='lg:w-80 bg-cyan-900 rounded-2xl text-white flex flex-col gap-4 justify-start items-center text-2xl px-8 py-8 shadow-2xl text-center'
                            whileHover={{scale: 1.1}}>
                  <p className='text-4xl px-2 py-2'>
                    <p className=''>
                      Data Gathering
                    </p>
                    <div className='border-b-2 border-gray-350 w-full mt-2'/>
                  </p>

                  <p className=''>
                    Interview/Questionnaire
                  </p>
                  
          </motion.div>


          {/* Data Analysis */}
          <motion.div className='lg:w-80 bg-cyan-900 rounded-2xl text-white flex flex-col gap-4 justify-between items-center text-2xl px-8 py-8 shadow-2xl text-center'
                            whileHover={{scale: 1.1}}>
                  <p className='text-4xl px-2 py-2'>
                    <p className=''>
                      Data Analysis
                    </p>
                    <div className='border-b-2 border-gray-350 w-full mt-2'/>
                  </p>

                  <p className=''>
                    Drowning in information, starving for knowledge
                  </p>
                  
          </motion.div>


          {/* Self Evaluation */}
          <motion.div className='lg:w-80 bg-cyan-900 rounded-2xl text-white flex flex-col gap-4 justify-start items-center text-2xl px-8 py-8 shadow-2xl text-center'
                            whileHover={{scale: 1.1}}>
                  <p className='text-4xl px-2 py-2'>
                    <p className=''>
                      Evaluation
                    </p>
                    <div className='border-b-2 border-gray-350 w-full mt-2'/>
                  </p>

                  <p className=''>
                  (self done)
                  </p>
                  
          </motion.div>


          {/* Participation / Attendance */}
          <motion.div className='lg:w-80 bg-cyan-900 rounded-2xl text-white flex flex-col gap-4 justify-center items-center text-2xl px-8 py-8 shadow-2xl text-center'
                            whileHover={{scale: 1.1}}>
                  <p className='text-4xl px-2 py-2'>
                    <p className=''>
                    Participation & Attendance
                    </p>
                    <div className='border-b-2 border-gray-350 w-full mt-2'/>
                  </p>

                  <p className=''>
                    Not required, but encouraged
                  </p>
                  
          </motion.div>


        </div>
      </div>


      {/* new div for wider and single col */}
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center gap-12'>

           {/* Class Goal */}
           <motion.div className='lg:w-full bg-cyan-900 rounded-2xl text-white flex flex-col gap-4 justify-start items-center text-2xl px-8 py-8 shadow-2xl text-center'
                            whileHover={{scale: 1.1}}>
                  <p className='text-4xl px-2 py-2'>
                    <p className=''>
                      Class Goals
                    </p>
                    <div className='border-b-2 border-gray-350 w-full mt-2'/>
                  </p>

                  <p className=''>
                    - Understanding the concept of a 'good' design
                  </p>

                  <p className=''>
                    - Being able to create a 'good' design
                  </p>

                  <p className=''>
                    - Testing knowledge and leanring
                  </p>

                  <p className=''>
                    - Analysis knowledge
                  </p>

                  <p className=''>
                    - Skills for presentating
                  </p>
                  
          </motion.div>



          {/* Tips for Sucess */}
          <motion.div className='lg:w-full bg-cyan-900 rounded-2xl text-white flex flex-col gap-4 justify-start items-center text-2xl px-8 py-8 shadow-2xl text-center'
                            whileHover={{scale: 1.1}}>
                  <p className='text-4xl px-2 py-2'>
                    <p className=''>
                      How to be Sucessful in this Class
                    </p>
                    <div className='border-b-2 border-gray-350 w-full mt-2'/>
                  </p>

                  <p className=''>
                    - Participart / Attend Class
                  </p>

                  <p className=''>
                    - Read and study the required Text Book
                  </p>

                  <p className=''>
                    - Don't be afraid to reach out!
                  </p>

                  <p className=''>
                    - Do Not Cheat
                  </p>
                  
          </motion.div>
        </div>
      </div>


      <BackToTop/>


    </motion.div>
  )
}
