import React from 'react'
import {motion} from 'framer-motion'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useSnapshot } from 'valtio'
import state from '../state'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'

function Menu() {
    const snap = useSnapshot(state)
  return (
    <motion.div
    className='md:hidden absolute top-0 left-0 w-full h-auto pb-[10vh] bg-black z-50 flex flex-col gap-5 items-center'
    initial={{y: '-100%'}}
    animate={{y: 0}}
    transition={{duration: 0.3}}
    >
        <div
        className='w-full px-5 py-5 flex justify-end items-center text-4xl cursor-pointer'
        onClick={() => state.isMenuVisible = false}
        >
            <AiFillCloseCircle />
        </div>
        <ul
        className='w-full items-center flex flex-col gap-5 text-gray-200'
        >
            <li className={`cursor-pointer hover:text-white ease-in-out-300 ${snap.currentPage === 1 && "text-blue-400"}`}
            onClick={() => {
                state.currentPage = 1
                state.isMenuVisible = false
            }}
            >Home</li>
            <li className={`cursor-pointer hover:text-white ease-in-out-300 ${snap.currentPage === 2 && "text-blue-400"}`}
            onClick={() => {
                state.currentPage = 2
                state.isMenuVisible = false
            }}
            >About</li>
            <li className={`cursor-pointer hover:text-white ease-in-out-300 ${snap.currentPage === 3 && "text-blue-400"}`}
            onClick={() => {
                state.currentPage = 3
                state.isMenuVisible = false
            }}
            >Projects</li>
            <li className={`cursor-pointer hover:text-white ease-in-out-300 ${snap.currentPage === 4 && "text-blue-400"}`}
            onClick={() => {
                state.currentPage = 4
                state.isMenuVisible = false
            }}
            >Contact</li>
            <li className={`cursor-pointer hover:text-white ease-in-out-300 ${snap.currentPage === 5 && "text-blue-400"}`}
            onClick={() => {
                state.currentPage = 5
                state.isMenuVisible = false
            }}
            >Skills</li>
        </ul>
        <ul
        className='flex items-center justify-center gap-[20%] mt-[30px] w-full'
        >
            <li
            >
                <a 
                href='https://github.com/tarekichalalen2002'
                target="_blank"
                >
                    <AiFillGithub className='text-2xl text-gray-200 hover:text-white ease-in-out-300'/>
                </a>
            </li>
            <li>
                <a 
                href='https://github.com/tarekichalalen2002'
                target="_blank"
                >
                    <AiFillLinkedin className='text-2xl text-gray-200 hover:text-white ease-in-out-300'/>
                </a>
            </li>
            <li>
                <a 
                href='https://github.com/tarekichalalen2002'
                target="_blank"
                >
                    <AiFillFacebook className='text-2xl text-gray-200 hover:text-white ease-in-out-300'/>
                </a>
            </li>
        </ul>
    </motion.div>
  )
}

export default Menu