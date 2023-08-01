import React, { useState } from "react";
import Link from "next/link";
import { useStateContext, useUpdateStateContext } from "@/hooks/StateContext";
import NavButton from "@/components/NavButton";

const Header = () => {
  const state = useStateContext();
  const updateState = useUpdateStateContext()

  const toggleHome = () => {
    updateState({
      homeButton: false,
      servicesButton: false,
      contactButton: false,
      Home: true,
      Contact: true,
    })
  }

  const toggleServices = () => {
    updateState({
      homeButton: true,
      servicesButton: false,
      contactButton: true,
      Home: false,
      Contact: false,
    })
  }

  const toggleContact = () => {
    updateState({
      homeButton: true,
      servicesButton: true,
      contactButton: false,
      Home: false,
      Contact: true,
    })
  }

  const toggleLogin = () => {
    updateState({
      loginButton: !state.loginButton
    })
  }

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200">
          <div className="flex justify-between items-center">
            <Link href="/" className='flex'>
              <img src="/ek-aerial-solutions-low-resolution-logo-black-on-transparent-background.png" className="h-16 m-2" alt="EK Drones Logo"/>
            </Link>
            <div>
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
              { state.loginButton ? (
                <Link href='' className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 border-gray-600 hover:bg-gray-100'>
                  <button onClick={toggleLogin}>Customer Login</button>
                </Link>
              ) : (
                <Link href='' className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 border-gray-600 hover:bg-gray-100'>
                  <button onClick={toggleLogin}>Profile</button>
                </Link>
              )}
            </div>

          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;