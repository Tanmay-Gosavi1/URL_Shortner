import React from 'react'
import CTA from './CTA.jsx'
import {Scissors} from 'lucide-react'
import {Sun , Moon} from 'lucide-react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'

const Navbar = () => {
  const [isDark , setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark]) 

  const toggleTheme = () => {
    setIsDark(prev=>!prev)
    localStorage.setItem('theme' , !isDark ? 'dark' : 'light')
  }
  return (
    <div className='w-full flex items-center justify-center mt-7 md:mt-12'>
      <div className='border-[1.5px] border-black/30 dark:border-white/40 rounded-lg w-full xl:w-[80%] flex justify-between items-center p-3'>
        {/* Logo */}
        <div className='flex justify-center items-center gap-3/4 cursor-pointer'>
          <Scissors size={21} strokeWidth={2.5}/>
          <h1 className='text-lg font-semibold'>Slack</h1>
        </div>

        {/* Links */}
        <div className='hidden sm:flex justify-center items-center gap-4'>
          <Link to="/">Features</Link>
          <Link to="/">Benefits</Link>
          <Link to="/">Pricing</Link>
        </div>

        {/* CTA and Theme Toggler */}
        <div className='flex justify-center items-center gap-3'>
          <div onClick={toggleTheme} className='h-9 w-9 p-1 bg-white border-2 border-black/10 rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-200'>
            <span className={`${isDark ? 'hidden' : 'flex'} rotate-0 transition-all duration-200`}><Moon size={20} /></span>
            <span className={`${isDark ? 'flex text-black' : 'hidden'} rotate-360 transition-all duration-200`}><Sun size={20} /></span>
          </div>
          {/* <CTA text={"Get Started"}/> */}
        </div>
      </div>

    </div>
  )
}

export default Navbar