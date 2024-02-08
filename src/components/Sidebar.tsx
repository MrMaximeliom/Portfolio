'use client';

import {AiFillGithub,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes';
import { ThemeSwitcher } from './ThemeSwitcher';
import Image from 'next/image';
const Sidebar = () =>{

    const {theme,setTheme} = useTheme()
    const changeTheme = () =>{
        setTheme(
            theme === 'light' ? 'dark' : 'light'
        )
    }
    return (
        <div>
         
                 <Image src="/imgs/Moayed.jpg"  width="120" height="120"  quality="100"

         alt="here is an image"
         className=' mx-auto rounded-full'
         />
        
         <h3 className='my-4 text-3xl font-medium tracking-wider font-header'>
            <span className='text-green'>Moayed </span>
            Eisa
        </h3>
        <p className='px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full'>Web Developer</p>
        <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full ' 
        href='pdf/Moayed.pdf'
         download='Moayed'>
            <GiTie className='w-6 h-6'/> 
            <span>Download Resume</span>
            </a>
        <div className='flex justify-around my-5 text-green w-9/12 md:w-full mx-auto'>
            <a href="">
                <AiFillYoutube className='w-8 h-8 cursor-pointer' />
            </a>
            <a href="">
                <AiFillGithub className='w-8 h-8 cursor-pointer' />
            </a>
            <a href="">
                <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
        </div>
        <div className='my-5 py-4 bg-gray-200 dark:bg-dark-200' style={{ marginLeft:'-1rem',marginRight:'-1rem' }}>
            <div className='flex items-center justify-center space-x-2 '>
                <GoLocation/>
                <span>Dubai , UAE</span>
            </div>
            <p className='my-2'>moayed.abdulhafiez@gmail.com</p>
            <p className='my-2'>+971569233853</p>
        </div>
        {/* email button */}
        <button className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full my-2 py-2 focus:outline-none'
        onClick={() => window.open('mailto:moayed.abdulhafiez@gmail.com')}
        >
            Email Me
            </button>

  <ThemeSwitcher/>

        </div>
      
    )
}
export default Sidebar