import React,{useState,useEffect} from 'react'
import {projects}  from '../utils/projects'
import { useSnapshot } from 'valtio'
import state from '../state'
import {AiOutlineRight,AiOutlineLeft,AiOutlineDoubleRight} from 'react-icons/ai'
import {motion} from 'framer-motion'
import CustomButton from './CustomButton'
import {useSwipeable} from 'react-swipeable'

function ProjectsSlide() {
    const bgGradiant = "bg-gradient-to-r from-[#0794D0] via-blue-800  to-[#9E00FF]"
    const snap = useSnapshot(state)
    const [currentProjectIndex,setCurrentProjectIndex] = useState(snap.projectsCount)
    const [previouProjectIndex,setPreviousProjectIndex] = useState(snap.projectsCount - 1)
    const [nextProjectIndex,setNextProjectIndex] = useState(snap.projectsCount + 1)

    // get the width of the screen


    useEffect(() => {
        if(snap.projectsCount < 0) state.projectsCount = projects.length - 1
        setCurrentProjectIndex(snap.projectsCount%projects.length)
        setPreviousProjectIndex((snap.projectsCount - 1)%projects.length)
        setNextProjectIndex((snap.projectsCount + 1)%projects.length)
    },[snap.projectsCount])

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            state.projectsCount++
        },
      });


  return (
    <section
    className='w-[100vw] h-[88vh] overflow-x-hidden pt-[5vh] px-[5vw] relative'
    {...handlers}
    >
        {
            window.innerWidth > 468 && (
                <motion.div
                className={`
                absolute top-[5vh] left-[50%] transform translate-x-[-50%]
                ${bgGradiant} z-0 rounded-2xl p-[2px]
                cursor-pointer
                hidden md:flex
                `}
                key={previouProjectIndex}
                initial={{opacity:0,scale:0.5,x:'-80vw',}}
                animate={{opacity:0.5,scale:0.5,x:'-50vw'}}
                transition={{duration:1,type:"spring"}}
                onClick={() => state.projectsCount--}
                >
                    <div
                    className='lg:w-[28vw] lg:min-h-[70vh] md:w-[38vw] md:min-h-[75vh] w-[60vw] min-h-[65vh] bg-[#010014] rounded-2xl p-[4px]'
                    >
                        <img
                        className='rounded-2xl object-cover w-full max-h-[50%]'
                        src={projects[previouProjectIndex]?.imagePath}
                        />
                        <div
                        className='w-full h-full flex flex-col items-center'
                        >
                            <h1
                            className={`font-bold mt-[3vh] text-3xl
                            text-center text-transparent bg-clip-text ${bgGradiant} 
                            text-tranform:uppercase`}
                            >{projects[previouProjectIndex]?.title}</h1>
                        </div>
                    </div>
                </motion.div>
            )
        }

        <motion.div
        className={`
        absolute top-[5vh] left-[50%] transform translate-x-[-50%]
        ${bgGradiant} z-0 rounded-2xl p-[2px]
        `}
    
        key={currentProjectIndex}
        initial={{opacity:0.5}}
        animate={{opacity:1,scale:1,x:"-50%"}}
        transition={{duration:1,type:"spring"}}
        >
            <div
            className='lg:w-[28vw] lg:min-h-[70vh] md:w-[38vw] md:min-h-[75vh] w-[60vw] min-h-[65vh] bg-[#010014] rounded-2xl p-[4px]'
            >
                <img
                className='rounded-2xl object-cover w-full max-h-[50%]'
                src={projects[currentProjectIndex]?.imagePath}
                />
                <div
                className='w-full h-full flex gap-2 flex-col items-center px-[8%] mt-[3vh]'
                >
                    <h1
                    className={`font-bold text-center text-transparent bg-clip-text ${bgGradiant} text-tranform:uppercase`}
                    >
                        {projects[currentProjectIndex]?.title}
                    </h1>
                    <p className='text-sm text-center'>
                        {projects[currentProjectIndex]?.description}
                    </p>
                    <div
                    className='flex md:flex-row flex-col gap-2 z-40'
                    >
                        <CustomButton 
                            text='Live Demo'
                            isFilled={true}
                            handleClick={() => window.open(projects[currentProjectIndex]?.link)}
                        />
                        <CustomButton 
                            text='Github'
                            isFilled={false}
                            handleClick={() => window.open(projects[currentProjectIndex]?.github)}
                        />
                    </div>
                </div>
            </div>
        </motion.div>

        {window.innerWidth > 468 && (
            <motion.div
            className={`
            absolute top-[5vh] left-[50%] transform translate-x-[-50%]
            ${bgGradiant} z-0 rounded-2xl p-[2px]
            cursor-pointer
            hidden md:flex
            `}
            key={nextProjectIndex}
            initial={{opacity:1,scale:0.5,x:'50vw'}}
            animate={{opacity:0.5,scale:0.5,x:'20vw'}}
            transition={{duration:1,type:"spring"}}
            onClick={() => state.projectsCount++}
            >
                <div
                className='lg:w-[28vw] lg:min-h-[70vh] md:w-[38vw] md:min-h-[75vh] w-[60vw] min-h-[65vh] bg-[#010014] rounded-2xl p-[4px]'
                >
                    <img
                    className='rounded-2xl object-cover w-full max-h-[50%]'
                    src={projects[nextProjectIndex]?.imagePath}
                    />
                    <div
                    className='w-full h-full flex flex-col items-center'
                    >
                        <h1
                        className={`font-bold mt-[3vh] text-3xl
                        text-center text-transparent bg-clip-text ${bgGradiant} 
                        text-tranform:uppercase`}
                        >{projects[nextProjectIndex]?.title}</h1>
                    </div>
                </div>
            </motion.div>    
        )}
        <motion.div
        className='sm:flex absolute top-[70vh] w-2/3 left-[50%] transform 
        translate-x-[-50%] justify-between items-center z-10
        text-4xl hidden 
        '
        >
            <button
            className={`
            p-2 rounded-full 
            ease-in-out duration-500
            `}
            onClick={() => state.projectsCount--}
            ><AiOutlineLeft /></button>
            <button
            className={`
            p-2 rounded-full 
            ease-in-out duration-500
            `}
            onClick={() => state.projectsCount++}
            ><AiOutlineRight /></button>
        </motion.div>

        <motion.div
        className="sm:hidden absolute top-[30vh] right-0 text-xs z-10 
        flex gap-1 items-center bg-gray-400 text-black rounded-l-full p-2"
        initial={{opacity:0,x:'100%'}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.4}}
        >
            Swipe <AiOutlineDoubleRight />
        </motion.div>

        <div
        className='absolute top-[80vh] left-[50%] transform translate-x-[-50%] z-20 flex gap-2'
        >
            {
                projects.map((project,index) => (
                    <div
                    key={index}
                    className={`
                    w-[10px] h-[10px] rounded-full ease-in-out cursor-pointer
                    ${snap.projectsCount%projects.length === index ? bgGradiant : "bg-white"}
                    `}
                    onClick={() => state.projectsCount = index}
                    ></div>
                ))
            }
        </div>

    </section>
  )
}

export default ProjectsSlide