import React from 'react'
import Card from './Card';
import CardInfo from './CardInfo';

const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-designColor'>
        <div className='flex flex-col gap-4 font-titleFont'>
        <h3 className='text-sm font-lightText tracking-wide'>FEATURES</h3>
        <h1 className='text-5xl font-lightText text-white tracking-wide mb-14'>What I do</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
          {CardInfo.map((card) => {
            return(<Card 
              key = {card.id}
              title = {card.title}
              icon = {card.icon}
              des = {card.des}
            />)
          })}
        </div>
    </section>
  )
}

export default Features;