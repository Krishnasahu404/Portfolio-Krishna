"use client";

import Link from "next/link";
import React, { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { motion } from "framer-motion";

const navLinks = [
    {
        name: "About",
        path: "#about",
    },
    {
        name: "Portfolio",
        path: "#portfolio",
    },
    {
        name: "Skills",
        path: "#skill",
    },
    
    

]

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () => {
        setNav(false);
    }

    const menuVariants = {
        open: {
         x: 0,
         transition: {
             stiffness: 20,
             damping: 15
         }   
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }   
        }
    }
    return (
        <div className="text-white/70 pt-6">
            <div className="hidden md:flex items-center px-4 py-2 mx-auto mx-w-[500px] justify-center">
                <ul className="flex flex-row p-4 space-x-8">
                    {navLinks.map((link,index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <p  className="text-xl">{link.name}</p>
                            </Link>
                        </li>
                    ))}

                    <li>
                        <a href="#contact" className="group">
                            <h1 className="text-lg font-bold text-white/70 cursor-pointer">Contect me</h1>
                            <div className="relative">
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            

            {/* <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 border text-white rounded border-white/70 p-2 x-50"> */}
            <div onClick={toggleNav}   className="md:hidden absolute top-5 right-5 z-50 p-2 bg-black/80 rounded-md border border-white/30 text-white"
            >

                {nav ?<AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
            </div>

            <motion.div 
                initial={false}
                animate={nav ? "open" : "closed"}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-black/90"
                >
                    <ul className="text-4xl font-semibold my-24 text-center space-y-8">
                        {navLinks.map((link,index) => (
                            <li key={index}>
                                <Link href={link.path} onClick={closeNav}>
                                    <p>{link.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>


            </motion.div>
        </div> 
    );
}

export default Navbar

