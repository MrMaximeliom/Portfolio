"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const ThemeSwitcher = () =>{

    const [mounted,setMounted] = useState(false)
    const {theme,setTheme} = useTheme()

    useEffect(()=>{
     setMounted(true)
    },[])

    if(!mounted){
        return null
    }

    return (
        <button
         className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full my-2 py-2'
         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
         
         >
            Toggle Theme
            </button>
    )
}