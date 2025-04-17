"use client"
import { label } from 'framer-motion/client'
import React from 'react'
import {  FaReact , FaPython,FaGitAlt } from 'react-icons/fa'
import { SiPostgresql,  SiFastapi, SiNextdotjs ,SiExpress,SiDjango} from 'react-icons/si'

const SkillIcons = [
    { icon: <FaPython size={140}/>,label:"Python"},
    { icon: <SiDjango size={140}/>,label:"Django"},
    { icon: <SiFastapi size={110}/>,label:"FastAPI"},
    { icon: <FaReact size={140}/>,label:"Reactjs"},
    
    { icon: <SiNextdotjs size={140}/>,label:"Next.js"},
    { icon: <SiPostgresql size={140}/>,label:"PostgreSQL"},
    { icon: <FaGitAlt size={110}/>,label:"Git"},
    { icon: <SiExpress size={140}/>,label:"Express.js"},

    




]

const Skill = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32 ' id="skill">
        <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
            <h2 className='text-5xl font-bold mb-6'> Skills </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 '>
              {SkillIcons.map((skill, index) => (
                <div key={index} className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                    {skill.icon}
                    <p className='mt-2'>{skill.label}</p>
                </div>
              ))}
            </div>
        </div>
      
   </div>

  )
}

export default Skill
