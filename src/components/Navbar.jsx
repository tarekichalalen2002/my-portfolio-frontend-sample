import React from 'react'
import Logo from './Logo'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useSnapshot } from 'valtio'
import state from '../state'

function Navbar() {
    const snap = useSnapshot(state)
  return (
    <nav
    className='w-full h-[12vh] flex justify-between items-center px-[5vw]'
    >
        <div className='w-1/4'>
            <Logo 
                height= "100px"
                width= "100px"
                color= "white"
                hoverColor= "white"
            />
        </div>
        <ul className='md:flex hidden items-center justify-between w-1/3 text-sm text-gray-200 '>
            <li className={`cursor-pointer hover:text-white ease-in-out-300 ${snap.currentPage === 2 && "text-blue-400"}`}
            onClick={() => state.currentPage = 2}
            >About</li>
            <li className={`cursor-pointer hover:text-white ease-in-out-300 ${snap.currentPage === 3 && "text-blue-400"}`}
            onClick={() => state.currentPage = 3}
            >Projects</li>
            <li className={`cursor-pointer hover:text-white ease-in-out-300 ${snap.currentPage === 4 && "text-blue-400"}`}
            onClick={() => state.currentPage = 4}
            >Contact</li>
            <li className={`cursor-pointer hover:text-white ease-in-out-300 ${snap.currentPage === 5 && "text-blue-400"}`}
            onClick={() => state.currentPage = 5}
            >Skills</li>
        </ul>
        <ul
        className='md:flex hidden items-center justify-center gap-[20%] w-1/4'
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
        {!snap.isMenuVisible && (
            <button
            className='md:hidden text-2xl text-gray-200 hover:text-white ease-in-out-300 cursor-pointer'
            onClick={() => state.isMenuVisible = true}
            >
                <GiHamburgerMenu />
            </button>
        )}
    </nav>
  )
}

export default Navbar