import React from 'react'
import {motion} from 'framer-motion'
import CustomButton from './CustomButton'

function Hero() {
    const bgGradiant = "bg-gradient-to-r from-[#0794D0] via-blue-800  to-[#9E00FF]"
  return (
    <section
    className='w-full h-full md:pt-[8vh] pt-0 md:pb-[10vh] relative px-[7vw] flex flex-col md:flex-row md:justify-end items-center'
    >
        <motion.div
        initial={{opacity: 0, y: '100%'}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
            className={`
            w-[120px] h-[120px] rounded-full absolute 
            md:top-[35vh] md:right-[10vw] right-[60vw] top-[15vh] z-0
            lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px]
            ${bgGradiant} hidden md:block
            `}
        />
        <div
            className="items-center justify-center absolute md:top-[200px] top-[18vh] left-[50%]"
        >
            <motion.div
            className={`
            absolute rounded-full 
            lg:w-[304px] lg:h-[304px] md:w-[204px] md:h-[204px] w-[154px] h-[154px]
            opacity-60 z-[-1] 
            ${bgGradiant}
            `}
            initial={{opacity: 0, y: '50%',scale: 0.5}}
            animate={{opacity: 1, y: 0,scale: 1}}
            transition={{duration: 0.8,type: 'spring'}}
            >
            </motion.div>
            <motion.div
            className='absolute rounded-full 
            lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] w-[150px] h-[150px]
            bg-[#010014] self-center top-[2px] left-[2px]'
            initial={{y: '50%',scale: 0.5}}
            animate={{y: 0,scale: 1}}
            transition={{duration: 0.8,type: 'spring'}}
            ></motion.div>
        </div>
        <motion.div
        className='z-40'
        initial={{opacity: 0, y: '-100%'}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6,type: 'spring'}}
        >
            
            <img 
                src='/Tarek.jpg'
                className="rounded-full lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] object-cover lg:mr-[10vw] z-40"
            />

        </motion.div>

        <div
        className='md:absolute md:w-1/2 w-full md:left-[10vw] md:top-[9vh] top-[15vh] text-center md:text-start'
        >
            <motion.div
            className='md:grid md:grid-cols-12 z-10 lg:text-[36px] md:text-[28px] text-[20px]'
            initial={{opacity: 0, x: '-50%'}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            >
                <h1 className={`col-span-9  
                text-transparent bg-clip-text ${bgGradiant}`}>Hello, I'm Tarek ICHALALEN</h1>
                <div className='lg:col-span-3'></div>
                <h1 className='col-span-9   '>Full stack web Developper</h1>
                <div className='lg:col-span-3'></div>
                <h1 className='col-span-9   '>and Futur AI Engeneer and Data Scientist.</h1>
                <div className='col-span-12 h-[40px]'></div>
                <div className='lg:col-span-1'></div>
                <h3 className='col-span-7 text-[16px] opacity-70'>
                    AI and data sceince student in <span className='text-[#0794D0]'>ESTIN Bejaia</span>, Algeria 
                    Full stack developper and enterprenerchip enthusiast
                </h3>
                <div className='col-span-1'></div>
                <div className='col-span-12 h-[40px]'></div>
                <div
                className='w-full md:col-span-12 flex justify-center'
                >
                    <CustomButton 
                    text='Download CV'
                    isFilled={false}
                    handleClick={() => console.log('download')}                  
                    />
                    </div>

            </motion.div>
        </div>

    </section>
  )
}

export default Hero