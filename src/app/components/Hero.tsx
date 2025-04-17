"use client"
import React from 'react'
import Image from 'next/image'
import icon from '../assets/icon1.png'
import lighting from '../assets/icon2.png'
import { motion } from 'framer-motion'
import profilpic from '../assets/profilepic.png'
import About from './About'

const Hero = () => {
  return (
    <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>
           
      <div className="absolute rounded-[50%] w-[3000px] h-[1400px]  top-[480px] left-[50%] -translate-x-1/2  bg-[radial-gradient(closest-side,#000_80%,#2B1942)]">
            </div>

        <div className='relative'>
            <div className='text-8xl font-bold text-center'>
                <h1 className='text-[#98B4CE] mb-2'>hi, I am</h1>
                <h1 className='text-[#E48A57] mb-4'>Krishna Sahu</h1>
            </div>

            <motion.div className='hidden md:block absolute left-[150px] top-[130px]'
            drag>

                <Image src={icon} height='170' width='170' alt='cursor' className='' draggable='false'/>

            </motion.div>

            <motion.div className='hidden md:block absolute right-[200px] top-[-30px]'
            drag>
                <Image src={lighting} height='120' width='120' alt='cursor' className='' draggable='false'/>
            </motion.div>

            <p className='text-center  text-2xl max-w-[500px] mx-auto mt-8 text-white/80 '>
                I am a Backend Developer, Focused on Creating Robust and Reliable Systems
            </p>
            <Image 
                src={profilpic} 
                alt='profilpic' 
              
                className=' h-auto w-auto mx-auto ' 
                />

        </div>

    </div>
  )
}

export default Hero
