import React, { useState } from "react";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Thanks from "@/components/Thanks";
import ModelViewer from "@/components/ModelViewer";

export default function Main() {
  const [showHome, setShowHome] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const toggleHome = () => {
    setShowHome(!showHome);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <>
      <main>
        <div className="p-10 min-h-screen bg-cover bg-center bg-no-repeat items-center justify-center" style={{ backgroundImage: "url('/DJI_0428.JPG')" }}>
          <div className='p-10 relative z-10'>
            {showHome ? (
              <Home toggleHome={toggleHome}/>
            ) : showContact ? (
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