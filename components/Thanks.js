import React from "react";
import Link from "next/link";

const Thanks = ({ toggleHome, toggleContact }) => {
  const handleClick = () => {
    toggleHome();
    toggleContact();
  }

  return (
    <>
      <div className='items-center justify-center'>
        <h1
          className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Thanks for reaching out!</h1>
        <p className="text-center mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">We will contact you in the next 24-48 hours to discuss your project!</p>
        <div className='text-center'>
          <button onClick={handleClick}
             className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Home
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Thanks;
