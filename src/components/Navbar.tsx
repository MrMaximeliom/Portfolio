"use client";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
    const [activeItem,setActiveItem] = useState<string>('')
    return (
        <div>
            <span>{activeItem}</span>
            <div>
                {
                    activeItem !== 'About' && (  
                    <Link href="/">
                    <a>
                        <span>About</span>
                    </a>
                </Link>
                )}
                {
                    activeItem !== 'Projects' && (  <Link href="/projects">
                    <a>
                        <span>Projects</span>
                    </a>
                </Link>)
                }
                {
                    activeItem !== 'Resume' && (  <Link href="/resume">
                    <a>
                        <span>Resume</span>
                    </a>
                </Link>)
                }

              

            </div>
        </div>

    )

}
export default Navbar;