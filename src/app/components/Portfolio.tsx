"use client"; 
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import project from '../assets/angry-bird.png'
import project1 from '../assets/note_app.png'
import project2 from '../assets/e-commerce.png'
import project3 from '../assets/todo-list.png'

const Projects = [
  {
    title: 'Angry Bird with Gesture Control',
    desc: 'An innovative version of Angry Birds where users can control the slingshot using hand or eye gestures — no mouse or keyboard required. The game uses real-time gesture recognition to drag and release the slingshot, making it more interactive and inclusive.',
    devstack :'Python, OpenCV, Mediapipe,pygame',
    github: 'https://github.com/Krishnasahu404/Gesture-Controls-Angry-Bird.git',
    src: project
  },
  {
    title: 'Note App',
    desc: 'A full-stack notes management application that allows users to create, update, and delete their notes. It supports a smooth frontend experience and is backed by a robust API.',
    devstack: 'Django (Backend), React.js (Frontend)',
    github: 'https://github.com/Krishnasahu404/FullStackNoteApp.git',
    src: project1
  },
  {
    title: 'E-Commerce Website',
    desc: 'A fully functional e-commerce platform featuring product listings, cart functionality  and user authentication',
    devstack: 'Django, Bootstrap, SQLite',
    github: '#',
    src: project2
  },
  {
    title: 'To-Do List (PERN Stack)',
    desc: 'A modern to-do list web app built with the PERN stack. Users can add, edit, and delete tasks with real-time updates. The UI is clean and responsive for an efficient task management experience.',
    devstack: 'PostgreSQL, Express.js, React, Node.js',
    github: '#',
    src: project3
  }
]
const Portfolio = () => {

  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-10' id='portfolio'>
       <h1 className='text-cyan-200 text-6xl w-full max-w-[500px] mx-auto text-center font-semibold p-4 my-12'>
            selected <span className='text-cyan-200'>Projects</span>
        </h1>
        <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
          {
            Projects.map((project, index) => (
              <motion.div key={index} 
              initial={{opacity:0 , y:75}}
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{duration:0.5,delay:0.5}}
              className={`mt-12 flex  flex-col ${index % 2 === 1? " md:flex-row-reverse gap-12":" md:flex-row"}`}
          
              >
                <div className='space-y-2 max-w-[550px]'>
                    <h2 className='text-7xl my04 text-white/70'>{`0${index + 1}`}</h2>
                    <h2 className='text-4xl'>{project.title}</h2>
                    <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                    <p className='text-xl text-cyan-200 font-semibold'>{project.devstack}</p>
                    <div className='w-64 h-[1px] bg-gray-400 my-4'>
                        <a className='text-white/70 hover:text-blue-500 transition-colors duration-300' href={project.github}>github</a>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <Image src={project.src} alt={project.title} className='h-[450px] w-[650px] object-cover border rounded border-gray-400'/>
                </div>
              </motion.div>
          ))}

        </div>  
    </div>
  )
}

export default Portfolio