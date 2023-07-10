import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

function Banner(){

  return (
    <section id='home' className='w-full h-[600px] py-20 flex border-b-[1px] border-b-designColor font-titleFont'>
        <div className='w-1/2'>
          <LeftBanner />
        </div>
        <div className='w-1/2'>
          <RightBanner />
        </div>
    </section>
  );
}
export default Banner;