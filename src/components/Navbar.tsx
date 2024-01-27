"use client";
import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({activeItem,name,route,setActiveItem}) =>{
    return (
        
            activeItem !== name
            ? 
            
            (  
            <Link href={route} legacyBehavior>
            <a>

           
                <span onClick={()=>setActiveItem(name)} className="hover:text-green">{name}</span>
                </a>
        </Link>
        )
        :
        null
    )
}
const Navbar = () => {
    const [activeItem,setActiveItem] = useState<string>('')
    const  pathname  = usePathname()
    useEffect(() =>{
        if(pathname === '/')
        {
            setActiveItem('About')
        }
        if(pathname === '/projects')
        {
            setActiveItem('Projects')
        }
        if(pathname === '/resume')
        {
            setActiveItem('Resume')
        }
    


    },[])
    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="font-bold text-green text-x1 border-b-4 border-green md:text-2xl">{activeItem}</span>
            <div className=" text-lg flex space-x-5">
                <NavItem
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                name="About"
                route="/"
                />
                   <NavItem
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                name="Projects"
                route="/projects"
                />
                   <NavItem
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                name="Resume"
                route="/resume"
                />

               

              

            </div>
        </div>

    )

}
export default Navbar;