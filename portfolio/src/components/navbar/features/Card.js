import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = (props) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-2xl flex items-center  from-bodyColor to-[#2bg-gradient-to-r02327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
        
            {props.icon? (
              <span className="text-5xl text-designColor">{props.icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {props.title}
            </h2>
            <p className="base font-bodyFont">{props.des}</p>
            <span className="text-2xl text-designColor">                      
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card