import React from 'react';

const FooterBottom = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="relative bottom-12 w-full py-5 text-center">
      <div className="container mx-auto">
        <p className="font-bodyFont font-bold text-gray-500 text-base">
          © {year}. All Rights Reserved By Abhi Bhimani
        </p>
      </div>
    </div>
  );
}

export default FooterBottom;
