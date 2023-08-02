import React from "react";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Thanks from "@/components/Thanks";
import Services from "@/components/Services";
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
      <main className="pt-16">
        { state.Services ? (
          <Services />
        ) : (
          <div className="p-10 min-h-screen bg-cover bg-center bg-no-repeat items-center justify-center" style={{ backgroundImage: "url('/MuseumPark.JPG')" }}>
          <div className='p-10 relative z-10'>
            { state.Services ? (
              <Thanks toggleHome={toggleHome} toggleContact={toggleContact}/>
            ) : state.Contact ? (
              <Contact toggleContact={toggleContact}/>
            ) : state.Thanks ? (
              <Thanks />
            ) : (
              <Home toggleHome={toggleHome}/>
            )}
          </div>
        </div>
        )}
      </main>
    </>
  );
}