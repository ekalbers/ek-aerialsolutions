import React from "react";
import Link from "next/link";
import { useUpdateStateContext } from "@/hooks/StateContext";

const Thanks = () => {
  const updateState = useUpdateStateContext()

  const handleClick = () => {
    updateState({
      homeButton: false,
      servicesButton: false,
      contactButton: false,
      Services: false,
      Contact: false,
      Thanks: false
    })
  }

  return (
    <>
      <div className='items-center justify-center'>
        <h1
          className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Thanks for reaching out!</h1>
        <p className="text-center mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">We will contact you in the next 24-48 hours to discuss your project!</p>
        <div className='text-center'>
          <button onClick={handleClick}
            className="py-2.5 px-5 mr-2 mb-2 text-md font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 border-gray-600 hover:bg-gray-100">
            Home
          </button>
        </div>
      </div>
    </>
  );
}

export default Thanks;
