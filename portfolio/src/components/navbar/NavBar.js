import React from 'react'
import { navLinkdata } from '../../constants';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-white'>
      <div>
        <h6>Portfolio</h6>
        {/* <img src='' alt='Portfolio'></img> */}
      </div>

      <div>
        <ul className='flex items-center gap-10'>
          {navLinkdata.map((navLink) => {
            return (
              <li className='text-base font-normal  text-lightText tracking-wide cursor-pointer hover:text-white duration-300'
                key={navLink._id}><Link
                  activeClass='active'
                  to={navLink.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >{navLink.title}</Link></li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default NavBar;