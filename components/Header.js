import React, { useState } from "react";
import Link from "next/link";
import { useStateContext, useUpdateStateContext } from "@/hooks/StateContext";
import UserButton from "@/components/UserButton";

const Header = () => {
  const state = useStateContext();
  const updateState = useUpdateStateContext()

  const toggleHome = () => {
    updateState({
      homeButton: false,
      servicesButton: false,
      contactButton: false,
      Services: false,
      Contact: false,
    })
  }

  const toggleServices = () => {
    updateState({
      homeButton: true,
      servicesButton: false,
      contactButton: true,
      Services: true,
      Contact: false,
    })
  }

  const toggleContact = () => {
    updateState({
      homeButton: true,
      servicesButton: true,
      contactButton: false,
      Services: false,
      Contact: true,
    })
  }

  return (
    <>
      <header className="fixed w-full h-18 border-[2px]">
        <nav className="bg-white border-gray-200">
          <div className="xl:flex justify-between items-center">
            <button onClick={toggleHome} className='flex'>
              <img src="/ek-aerial-solutions-low-resolution-logo-black-on-transparent-background.png" className="xl:h-16 xl:m-2 sm:w-fit" alt="EK Drones Logo"/>
            </button>
            <div className="sm:text-center">
              { state.homeButton ? (
                <Link href='' className='m-4 text-lg text-gray-500 hover:bg-gray-100'>
                  <button onClick={toggleHome}>Home</button>
                </Link>
              ) : (
                <></>
              )}
              { state.servicesButton ? (
                <Link href='' className='m-4 text-lg text-gray-500 hover:bg-gray-100'>
                  <button onClick={toggleServices}>Services</button>
                </Link>
              ) : (
                <></>
              )}
              { state.contactButton ? (
                <Link href='' className='m-4 text-lg text-gray-500 hover:bg-gray-100'>
                  <button onClick={toggleContact}>Contact</button>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;