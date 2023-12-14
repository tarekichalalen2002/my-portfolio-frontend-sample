import React,{useState} from 'react'
import {motion} from 'framer-motion'
import CustomButton from './CustomButton'

function ContactForm() {
    const bgGradiant = "bg-gradient-to-r from-[#0794D0] via-blue-800  to-[#9E00FF]"
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email,message);
    }
    return (
        <section
        className='w-full overflow-x-hidden pt-[5vh] px-[5vw] flex flex-col items-center'
        >
            <motion.h1
            className={`
            text-center text-transparent bg-clip-text ${bgGradiant} 
            font-bold lg:text-4xl text-3xl
            `}
            initial={{opacity:0,y:'-10vh'}}
            animate={{opacity:1,y:0}}
            transition={{duration:1,type:"spring"}}
            >
                Contact me
            </motion.h1>
            <div
            className='flex flex-col items-center w-full lg:w-[50vw] mt-[5vh] gap-7'
            >
                <motion.div 
                className='grid grid-cols-8 items-start w-full gap-3'
                initial={{opacity:0,x:'-10vw'}}
                animate={{opacity:1,x:0}}
                transition={{duration:1,type:"spring"}}

                >
                    <label
                    htmlFor='email'
                    className='pt-[1vh]'
                    >
                        Email: 
                    </label>

                    <div
                    className={`
                    md:col-span-7 col-span-8
                    ${bgGradiant} rounded-2xl p-[2px] 
                    `}
                    >
                    <input 
                        className='p-4 rounded-2xl bg-[#010014] w-full'
                        placeholder='Enter your email ....'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>


                </motion.div>
                <motion.div 
                className='grid grid-cols-8 items-start w-full gap-3'
                initial={{opacity:0,x:'-10vw'}}
                animate={{opacity:1,x:0}}
                transition={{duration:1,delay:0.2,type:"spring"}}
                >
                    <label
                    htmlFor='email'
                    className='pt-[1vh]'
                    >
                        Message: 
                    </label>

                    <div
                    className={`
                    md:col-span-7 col-span-8
                    ${bgGradiant} rounded-2xl p-[2px]
                    `}
                    >
                    <textarea 
                        className='p-4 rounded-2xl bg-[#010014] w-full h-[20vh]'
                        placeholder='Enter your message ....'
                        type='text'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    </div>
                </motion.div>

                <motion.div
                initial={{opacity:0,x:'-10vw'}}
                animate={{opacity:1,x:0}}
                transition={{duration:1,delay:0.4,type:"spring"}}
                >
                    <CustomButton
                    text='Send'
                    isFilled={true}
                    handleClick={handleSubmit}
                    />
                </motion.div>
            </div>
        </section>
    )
    }

export default ContactForm