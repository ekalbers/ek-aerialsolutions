import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-white shadow relative z-10">
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
          <div className="items-center justify-center">
            <Link href="#" className="flex items-center justify-center sm:mb-0">
              <img src="/ek-aerial-solutions-low-resolution-logo-black-on-transparent-background.png" className="h-10" alt="EK Drones Logo"/>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}