import React from 'react'
import { FaLinkedin,FaInstagram,FaGithub, } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { IoMdCall } from 'react-icons/io'

const Connect = () => {
  return (
    <section id="let's connect" className='w-full py-10 flex'>
        <div className='w-1/2 flex flex-col'>
            <h4 className='text-base font-titleFont mb-4 pt-5'>FIND ME IN</h4>
            <h1 className='text-5xl text-white mb-7 font-titleFont'>Connct</h1>
            <div className='flex gap-4 '>
                <a href='https://www.linkedin.com/in/abhi-bhimani-8b44ab246/' rel="noreferrer" target='_blank'>
                <span className='ConnectIcon'>
                    <FaLinkedin />
                </span></a>

                <a href='https://github.com/abhii14758' rel="noreferrer" target='_blank'>
                <span className='ConnectIcon'>
                    <FaGithub />
                </span></a>

                <a href='https://www.instagram.com/abhi_bhimani_153/' rel="noreferrer" target='_blank'>
                <span className='ConnectIcon'>
                    <FaInstagram />
                </span></a>
            </div>
        </div>

            <div className='w-1/2 flex flex-col text-right items-end gap-4 py-16'>
                <a href='mailto:abhibhimani14758@gmail.com' rel="noreferrer" target='_blank'><h3 className='flex flex-row'><span className='mr-[10px] mt-[5px]'><IoIosMail /></span>abhibhimani14758@gmail.com</h3></a>
                <h3 className='flex flex-row'><span className='mr-[10px] mt-[5px]'><IoMdCall /></span>+91 7572843778</h3>
            </div>
        
    </section>
  )
}

export default Connect;