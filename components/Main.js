import React, { useState } from "react";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Thanks from "@/components/Thanks";
import {useStateContext, useUpdateStateContext} from "@/hooks/StateContext";

export default function Main() {
  const state = useStateContext();
  const updateState = useUpdateStateContext()

  const toggleHome = () => {
    updateState({
      homeButton: false,
      servicesButton: true,
      contactButton: true,
      loginButton: true,
      logoutButton: false,
      Home: true,
      Contact: true,
    })
  };

  const toggleContact = () => {
    updateState({
      homeButton: true,
      servicesButton: true,
      contactButton: true,
      loginButton: true,
      logoutButton: false,
      Home: false,
      Contact: false,
    })
  };

  return (
    <>
      <main>
        <div className="p-10 min-h-screen bg-cover bg-center bg-no-repeat items-center justify-center" style={{ backgroundImage: "url('/DJI_0428.JPG')" }}>
          <div className='p-10 relative z-10'>
            {state.Home ? (
              <Home toggleHome={toggleHome}/>
            ) : state.Contact ? (
              <Contact toggleContact={toggleContact}/>
            ) : (
              <Thanks toggleHome={toggleHome} toggleContact={toggleContact}/>
            )}
          </div>
        </div>
      </main>
    </>
  );
}