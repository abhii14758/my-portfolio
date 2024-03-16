import React from 'react'
import Typewriter from "typewriter-effect";

const LeftBanner = () => {
  return (
    <div className='w-full flex flex-col gap-5'>
      <h4 className='text-lg font-normal '>WELCOME TO MY WORLD</h4>
      <h1 className='text-6xl font-bold font-titleFont'>Hi, I'm
        <span className='text-white'> ABHI BHIMANI</span></h1>
      <h2 className='text-4xl font-bold text-lightText'>Intrested in <span className='text-white'>
        <Typewriter
          options={{
            strings: ['Data Science', 'Machine Learning', 'Deep Learning'],
            pauseFor: 1000,
            deleteSpeed: 20,
            autoStart: true,
            loop: true,
          }} /></span></h2>
      <p className='text-base text-lightText font-bodyFont leading-6 tracking-wide'>
        3rd year student of computer engineering,
        sports enthusiast 🏓
        Always ready to learn new technologies of my domain.
      </p>
    </div>
  )
}

export default LeftBanner;