import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
    <div className='flex flex-row gap-10 py-5'>
      {/* part one */}
      <div className='w-1/2'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech | Computer enginnering"
            subTitle="Charotar University of Science and Technology Changa, gujarat (2021 - 2025)"
            result="9.42/10"
            des="Currently pursuing 3rd year"
          />
          {/* <ResumeCard
            title="Higher Secondary School Education"
            subTitle="Shakti Higher Secondary School (2019 - 2021)"
            result="85/100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
          
        </div>
      </div>
      {/* part Two */}

      <div className='w-1/2'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Higher Secondary School Education"
            subTitle="Shakti Higher Secondary School (2019 - 2021)"
            result="85/100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
            {/* <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          /> */}
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
      </div>
    </motion.div>
  );
}

export default Education