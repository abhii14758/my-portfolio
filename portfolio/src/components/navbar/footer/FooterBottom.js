import React from 'react'

const FooterBottom = () => {

    const date = new Date();
    const year =  date.getFullYear()
  return (
    <div className="w-full py-10">
      <p className="text-center font-bodyFont font-bold text-gray-500 text-base">
        © {year}. All Rights Reserved By Abhi Bhimani
      </p>
    </div>
  );
}

export default FooterBottom;