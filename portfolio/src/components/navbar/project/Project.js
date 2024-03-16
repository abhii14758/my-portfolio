import React from 'react'
import ProjectCard from './ProjectCard';
import ProjectInfo from './ProjectInfo';

const Project = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-designColor'>
      <div className='flex flex-col gap-4 font-titleFont'>
        <h3 className='text-sm font-lightText tracking-wide'>PROJECTS</h3>
        <h1 className='text-5xl font-lightText text-white tracking-wide mb-14'>PROJECTS & RESEARCH</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        {ProjectInfo.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              des={project.des}
              src={project.src}
            />
          );
        })}
      </div>
    </section>
  )
}

export default Project;