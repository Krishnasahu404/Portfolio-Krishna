"use client"
import React from 'react'
import Image from 'next/image'
import aboutImg from '../assets/about.png'
import book from '../assets/book.png'
import pc from '../assets/pc.png'
import card from '../assets/card.png'
import finance from '../assets/finance.png'

const About=()=> {
    return (
    <div className='max-w-[1200px] mx-auto' id='about' >
       <h1 className='text-cyan-200 text-6xl w-full max-w-[500px] mx-auto text-center font-semibold p-4 mb-4 relative'>
            About <span className='text-cyan-200'>Me</span>
        </h1>
        
        <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>

            <div className='w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#F28500] via-[#FEF250] to-[#2A52BE] opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={book} alt='book' className='w-auto h-[130px]'/>
                    <div className='flex flex-col ml-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                        <p className='text-lg text-white/70 mt-2'> I completed my <span className='text-white font-semibold'>Bachelor of Science in Information Technology (B.Sc. IT)</span> 
                        from <span className='text-white font-semibold'>Patkar Varde College, Mumbai</span> in <span className='text-white'>2024</span>.</p>
                    </div>
                </div>
            </div>

            <div className='w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>

                <div className='flex flex-row p-6'>
                    <Image src={pc} alt='book' className='w-auto h-[130px]'/>
                    <div className='flex flex-col ml-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Problem Solving</h2>
                        <p className='text-lg text-white/70 mt-2'>Strong at understanding logic and solving real-world problems. Passionate about breaking down complex tasks into simple solutions.</p>
                    </div>
                </div>
            </div>


            <div className='w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#F24C79] via-[#1E9E9A] to-[#2A52BE] opacity-30 animate-gradient-xy'></div>
                
                <div className='flex flex-row p-6'>
                    <Image src={card} alt='book' className='w-auto h-[130px]'/>
                    <div className='flex flex-col ml-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
                        <p className='text-lg text-white/70 mt-2'>Completed a 4-week internship at <span className='text-white font-semibold'>System Tron</span>. 
                            Currently working as a Full Stack Intern at <span className='text-white font-semibold'>Vsure Consultancy</span>, 
                            with a strong focus on backend development.</p>
                    </div>
                </div>
            </div>


            <div className='w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-[#F28500] via-[#FEF250] to-[#2A52BE] opacity-30 animate-gradient-xy'></div>

                <div className='flex flex-row p-6'>
                    <Image src={finance} alt='book' className='w-auto h-[130px]'/>
                    <div className='flex flex-col ml-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
                        <p className='text-lg text-white/70 mt-2'>Strong backend development skills. Proficient in:
                        <br />
                        <span className='text-white font-medium'>Python, Django, React</span> — with backend being my core strength.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    )
}

export default About