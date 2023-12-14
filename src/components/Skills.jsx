import React from 'react'
import {skills} from '../utils/skills'
import {motion} from 'framer-motion'

function Skills() {
  const bgGradiant = "bg-gradient-to-r from-[#9E00FF] via-blue-800  to-[#0794D0]"
  return (
    <section
    className='w-full overflow-x-hidden px-[3vw] pt-[2vh] flex flex-col items-center gap-5 pb-[5vh]'
    >
      <motion.h1 className={`text-center font-bold text-3xl 
      text-transparent bg-clip-text ${bgGradiant}
      `}
      initial={{opacity:0,y:'-2vh'}}
      animate={{opacity:1,y:0}}
      transition={{duration:1,type:"spring"}}
      >
        My skills
      </motion.h1>
      <div
      className='grid md:grid-cols-2 grid-cols-1 gap-5 w-full'
      >
        {
          skills.map((skill,index) => (
            <motion.div
            key={index}
            className={`flex flex-col gap-1`}
            >
              {skill.name}
              <div className='w-[450px] rounded-full flex gap-4 items-center justify-between'>
                <div className='w-5/6'>
                  <motion.div
                    className={`
                    h-[10px] ${bgGradiant} rounded-2xl
                    w-[${(skill.level*378)/100 + ''}px]
                    `}
                    initial={{width:0}}
                    animate={{width:(skill.level*378)/100}}
                    transition={{duration:1,type:"spring"}}
                  />
                </div>
              </div>
            </motion.div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills