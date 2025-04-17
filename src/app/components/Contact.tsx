"use client"
import React from 'react'
import Image from 'next/image'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
const Contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-5
                    rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id="contact">
        <div className='flex justify-center items-center'>
            <ul className='space-y-4'>
                <li className='flex items-center '>
                    <Image src = {phone} alt='phone' className='h-[110px] w-auto mr-6'/>
                    <p className='text-xl'>+91 7039362922 </p>
                </li>
                <li className='flex items-center '>
                    <Image src = {mail} alt='mail' className='h-[110px] w-auto mr-6'/>
                    <p className='text-xl'>krishna32370@gmail.com </p>
                </li>
                
                
            </ul>
        </div>

        <div className='bg-white/10 p-6 rounded-xl max-w-[550px] w-full md:w-[580px]'>
            <h2 className='text-5xl font-bold text-cyan-200 mb-4'>Location</h2>
            <p className='text-white/70 mb-6'>Feel free to reach out — I’d love to connect with you! </p>

            <div className='space-y-4 text-lg'>
                <div className='flex items-start space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className='w-6 h-6 mt-1 text-green-400'>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
                    </svg>
                    <span>
                        📍Bhagat Singh Nagar 1,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Groegaon West,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Mumbai 400-104
                    </span>
                </div>

                <div className='flex items-center space-x-3'>
                    <a
                        href='https://www.linkedin.com/in/krishna-sahu-6ab771223'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center space-x-2 text-white hover:text-orange-400 transition'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className='w-6 h-6'>
                        <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7c0 .9-.7 1.7-1.7 1.7zm13 12.3h-3v-5.6c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.7 1.4-.1.3-.1.7-.1 1.1v5.3h-3s.04-8.7 0-9.6h3v1.4c.4-.6 1.1-1.5 2.6-1.5 1.9 0 3.4 1.2 3.4 3.9v5.8z"/>
                        </svg>
                        <span>LinkedIn Profile</span>
                    </a>
                </div>

                <div className='flex justify-center items-center space-x-3'>
                    <a
                        href="/Krishna_Sahu_Resume.pdf"
                         download="Krishna_Sahu_Resume.pdf"
                         className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                        >
                        Download Resume
                    </a>

                </div>
             </div>   
        </div>
      
    </div>
  )

}

export default Contact
