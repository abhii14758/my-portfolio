import React, { useState } from 'react';
import Achievement from './Achievements';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';   

const Resume = () => {

    const [educationData,setEducationData] = useState(true);
    const [skillsData,setSkillsData] = useState(false);
    const [experienceData,setExperiencesetData] = useState(false);
    const [achievementData,setAchievementData] = useState(false);

  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-designColor'>
        <div className='flex flex-col gap-4 font-titleFont'>
        <h3 className='text-sm font-lightText tracking-wide'>RESUME</h3>
        <h1 className='text-5xl font-lightText text-white tracking-wide mb-14'>MY RESUME</h1>
        </div>
        <div>
            <ul className='w-full grid grid-cols-4 gap-3'>
                <li className='resumeLi' onClick={() =>{
                    setEducationData(true);
                    setSkillsData(false);
                    setExperiencesetData(false);
                    setAchievementData(false);
                }}>Education</li>

                <li className='resumeLi' onClick={() =>{
                    setEducationData(false);
                    setSkillsData(true);
                    setExperiencesetData(false);
                    setAchievementData(false);
                }}>Professional Skills</li>

                <li className='resumeLi' onClick={() =>{
                    setEducationData(false);
                    setSkillsData(false);
                    setExperiencesetData(true);
                    setAchievementData(false);
                }}>Experience</li>

                <li className='resumeLi' onClick={() =>{
                    setEducationData(false);
                    setSkillsData(false);
                    setExperiencesetData(false);
                    setAchievementData(true);
                }}>Achievements</li>
            </ul>
        </div>
        <div>
        {
            educationData && <Education />
        }
        {
            skillsData && <Skills />
        }
        {
            experienceData && <Experience />
        }
        {
            achievementData && <Achievement />
        }

        </div>
    </section>
  )
}

export default Resume;