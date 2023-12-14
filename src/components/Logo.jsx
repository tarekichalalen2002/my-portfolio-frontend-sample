import React, {useState} from 'react'
import state from '../state'

function Logo({height,width,color, hoverColor}) {
    const [hover, setHover] = useState(false)
  return (
    <svg width={width} height={height} viewBox="0 0 116 61" fill="none" xmlns="http://www.w3.org/2000/svg"
    onClick={() => state.currentPage = 1}
    className='hover:cursor-pointer ease-in-out duration-500'
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
        <path d="M73.8409 14.696V12.6364H99.3203V14.696H87.6903V49H85.4709V14.696H73.8409Z" fill={hover ? hoverColor:color}/>
        <rect x="21.7071" y="32" width="32.9411" height="32.9411" rx="1.5" transform="rotate(-45 21.7071 32)" stroke={hover ? hoverColor:color}/>
        <line y1="-0.5" x2="8" y2="-0.5" transform="matrix(-0.707107 -0.707107 0.758949 -0.65115 36.7831 17.3452)" stroke={hover ? hoverColor:color}/>
        <line y1="-0.5" x2="8" y2="-0.5" transform="matrix(0.707107 0.707107 -0.758949 0.65115 52 48)" stroke={hover ? hoverColor:color}/>
        <line y1="-0.5" x2="8" y2="-0.5" transform="matrix(0.707107 -0.707107 0.651151 0.758949 60.8268 24.8741)" stroke={hover ? hoverColor:color}/>
        <line y1="-0.5" x2="8" y2="-0.5" transform="matrix(-0.707107 0.707107 -0.651151 -0.758949 27.9243 37.7211)" stroke={hover ? hoverColor:color}/>
        <line y1="-0.5" x2="8" y2="-0.5" transform="matrix(-0.707107 -0.707107 0.758949 -0.65115 28.7831 25.3452)" stroke={hover ? hoverColor:color}/>
        <line y1="-0.5" x2="8" y2="-0.5" transform="matrix(0.73866 0.674078 -0.728421 0.685129 60.9395 40)" stroke={hover ? hoverColor:color}/>
        <line y1="-0.5" x2="8" y2="-0.5" transform="matrix(0.707107 -0.707107 0.651151 0.758949 52.9261 16.776)" stroke={hover ? hoverColor:color}/>
        <line y1="-0.5" x2="8" y2="-0.5" transform="matrix(-0.707107 0.707107 -0.651151 -0.758949 35.4107 46.2037)" stroke={hover ? hoverColor:color}/>
        <circle cx="28.5" cy="10.5" r="3" stroke={hover ? hoverColor:color}/>
        <circle cx="60.3132" cy="54.804" r="3" transform="rotate(179.568 60.3132 54.804)" stroke={hover ? hoverColor:color}/>
        <circle cx="67.739" cy="16.641" r="3" transform="rotate(90.7068 67.739 16.641)" stroke={hover ? hoverColor:color}/>
        <circle cx="20.7473" cy="45.7435" r="3" transform="rotate(-86.4307 20.7473 45.7435)" stroke={hover ? hoverColor:color}/>
        <circle cx="20.5" cy="18.5" r="3" stroke={hover ? hoverColor:color}/>
        <circle cx="69.3789" cy="46.6719" r="3" transform="rotate(179.568 69.3789 46.6719)" stroke={hover ? hoverColor:color}/>
        <circle cx="59.8383" cy="8.54291" r="3" transform="rotate(90.7068 59.8383 8.54291)" stroke={hover ? hoverColor:color}/>
        <circle cx="28.2337" cy="54.2261" r="3" transform="rotate(-86.4307 28.2337 54.2261)" stroke={hover ? hoverColor:color}/>
        <rect x="31.7071" y="32.1421" width="19" height="19" rx="1.5" transform="rotate(-45 31.7071 32.1421)" stroke={hover ? hoverColor:color}/>
        <line x1="48.5515" y1="12.2721" x2="52.087" y2="8.73654" stroke={hover ? hoverColor:color}/>
        <line x1="56.6284" y1="20.3812" x2="59.9741" y2="16.6654" stroke={hover ? hoverColor:color}/>
        <line x1="64.4556" y1="28.5233" x2="67.8013" y2="24.8076" stroke={hover ? hoverColor:color}/>
        <line x1="36.5515" y1="54.2721" x2="40.087" y2="50.7365" stroke={hover ? hoverColor:color}/>
        <line x1="28.6284" y1="45.3812" x2="31.9741" y2="41.6654" stroke={hover ? hoverColor:color}/>
        <line x1="20.6464" y1="38.182" x2="24.182" y2="34.6464" stroke={hover ? hoverColor:color}/>
        <path d="M7.47514 12.6364V49H5.25568V12.6364H7.47514Z" fill={hover ? hoverColor:color}/>
    </svg>

  )
}

export default Logo