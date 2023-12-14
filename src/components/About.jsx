import React,{useState} from 'react'
import {motion} from 'framer-motion'

function About() {
    const bgGradiant = "bg-gradient-to-r from-[#9E00FF] via-blue-800  to-[#0794D0]"
    const [is2020Visible,setIs2020Visible] = useState(false)
    const [is2021Visible,setIs2021Visible] = useState(false)
    const [is2022Visible,setIs2022Visible] = useState(false)
    const [is2023Visible,setIs2023Visible] = useState(false)
    return (
        <section
        className='grid grid-cols-1 lg:grid-cols-2 p-[3vw] gap-3 overflow-x-hidden'
        >
            <div
            className='flex flex-col gap-5 col-span-1 px-5'
            >
                <motion.h1
                className={`
                font-bold text-3xl
                text-transparent bg-clip-text ${bgGradiant}
                text-center lg:text-left
                `}
                initial={{opacity:0,x:'-10vw'}}
                animate={{opacity:1,x:0}}
                transition={{duration:1,type:"spring"}}
                >
                    About me:
                </motion.h1>
                <motion.p
                className='leading-10
                text-center lg:text-left 
                '
                initial={{opacity:0,x:'-10vw'}}
                animate={{opacity:1,x:0}}
                transition={{duration:1,delay:0.2,type:"spring"}}
                >
                    I am a full stack web developer with a passion for creating beautiful and functional user experiences on the web.
                    Also I am a student at ESTIN Bajaia for a an engeneering degree in artificial intelligence and data science.
                </motion.p>
                <motion.p
                className='leading-10
                text-center lg:text-left
                '
                initial={{opacity:0,x:'-10vw'}}
                animate={{opacity:1,x:0}}
                transition={{duration:1,delay:0.4,type:"spring"}}
                >
                    I see myself as a good problem solver and a fast learner, I am always looking for new challenges and new technologies to learn.

                </motion.p>
            </div>
            <div
            className='flex flex-col px-5 gap-2'
            >
                <motion.h1
                className={`
                font-bold text-3xl
                text-transparent bg-clip-text ${bgGradiant}
                text-center lg:text-left
                `}
                initial={{opacity:0,x:'-10vw'}}
                animate={{opacity:1,x:0}}
                transition={{duration:1,type:"spring"}}
                >
                    My path:
                </motion.h1>
                <div
                className='flex flex-col gap-2 items-center'
                >
                    <motion.div
                    className='h-[25px] w-[10px] bg-blue-700 rounded-full'
                    initial={{opacity:0,y:'-10vh'}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:1,delay:0.2,type:"spring"}}
                    />
                    <motion.div
                    className='h-[25px] w-[10px] bg-blue-700 rounded-full'
                    initial={{opacity:0,y:'-10vh'}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:1,delay:0.4,type:"spring"}}
                    />
                    <motion.div
                    className='relative w-[10px] h-[55vh] bg-blue-700 rounded-full'
                    initial={{opacity:0,y:'-10vh'}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:1,delay:0.6,type:"spring"}}
                    >
                        {
                            is2020Visible && (
                                <motion.p 
                                className='absolute md:w-[200px] w-[150px] text-xs text-center left-6'
                                initial={{opacity:0,x:'-5vw'}}
                                animate={{opacity:1,x:0}}
                                transition={{duration:1,type:"spring"}}
                                >
                                    I joined the ESTIN Bajaia to study for a degree in artificial intelligence and data science.
                                </motion.p>
                            )
                        }
                        {
                            is2021Visible && (
                                <motion.p 
                                className='absolute md:w-[200px] w-[150px] text-xs text-center right-6 top-[25%]'
                                initial={{opacity:0,x:'5vw'}}
                                animate={{opacity:1,x:0}}
                                transition={{duration:1,type:"spring"}}
                                >
                                    I started learning web development with javascript and python.
                                </motion.p>
                            )
                        }
                        {
                            is2022Visible && (
                                <motion.p 
                                className='absolute md:w-[200px] w-[150px] text-xs text-center left-6 top-[50%]'
                                initial={{opacity:0,x:'5vw'}}
                                animate={{opacity:1,x:0}}
                                transition={{duration:1,type:"spring"}}
                                >
                                    I started getting involved in software engeneering and getting confortable with different architectures and design patterns.
                                </motion.p>
                            )
                        }
                        {
                            is2023Visible && (
                                <motion.p 
                                className='absolute md:w-[200px] w-[150px] text-xs text-center right-6 top-[75%]'
                                initial={{opacity:0,x:'5vw'}}
                                animate={{opacity:1,x:0}}
                                transition={{duration:1,type:"spring"}}
                                >
                                    Got involved in some complex projects and started learning about microservices and cloud computing.
                                </motion.p>
                            )
                        }
                        <div
                        className={`absolute top-0 rounded-full w-[25px] h-[25px] 
                        bg-purple-700 transform left-1/2 translate-x-[-50%] cursor-pointer`}
                        onMouseOver={() => setIs2020Visible(true)}
                        onMouseLeave={() => setIs2020Visible(false)}
                        />
                        
                        <div
                        className={`absolute top-[25%] rounded-full w-[25px] h-[25px] 
                        bg-purple-700 transform left-1/2 translate-x-[-50%] cursor-pointer`}
                        onMouseOver={() => setIs2021Visible(true)}
                        onMouseLeave={() => setIs2021Visible(false)}
                        />
                        <div
                        className={`absolute top-[50%] rounded-full w-[25px] h-[25px] 
                        bg-purple-700 transform left-1/2 translate-x-[-50%] cursor-pointer`}
                        onMouseOver={() => setIs2022Visible(true)}
                        onMouseLeave={() => setIs2022Visible(false)}
                        />
                        <div
                        className={`absolute top-[75%] rounded-full w-[25px] h-[25px] 
                        bg-purple-700 transform left-1/2 translate-x-[-50%] cursor-pointer`}
                        onMouseOver={() => setIs2023Visible(true)}
                        onMouseLeave={() => setIs2023Visible(false)}
                        />
                        <p className={`absolute font-bold right-6 text-sm text-transparent bg-clip-text ${bgGradiant}`}>2020</p>
                        <p className={`absolute font-bold left-6 top-[25%] text-sm text-transparent bg-clip-text ${bgGradiant}`}>2021</p>
                        <p className={`absolute font-bold right-6 text-sm top-[50%] text-transparent bg-clip-text ${bgGradiant}`}>2022</p>
                        <p className={`absolute font-bold left-6 top-[75%] text-sm text-transparent bg-clip-text ${bgGradiant}`}>2023</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About