import React from "react";
import Link from "next/link";
import {useUpdateStateContext} from "@/hooks/StateContext";

export default function Footer() {
  const updateState = useUpdateStateContext()

  const handleClick = () => {
    updateState({
      homeButton: false,
      servicesButton: false,
      contactButton: false,
      Services: false,
      Contact: false,
    })
  }
  return (
    <>
      <footer className="bg-white border-[2px] shadow relative z-10">
        <div className="w-full max-w-screen-xl mx-auto md:py-8">
          <div className='mb-5 text-center text-gray-500 text-xl'>
            <p className='font-bold text-black'>Contact Us:</p>
            <p>937-654-9944</p>
            <p>info@ekaerialsolutions.com</p>
          </div>
          <div className='mt-5 mb-5 text-center text-gray-500 text-xl'>
            <p className='font-bold text-black'>Location:</p>
            <p>Gainesville, FL</p>
            <p>Serving all of Florida</p>
          </div>
          <div className="items-center text-center">
            <button onClick={handleClick} className="items-center justify-center">
              <img src="/ek-aerial-solutions-low-resolution-logo-black-on-transparent-background.png" className="h-10" alt="EK Drones Logo"/>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}