import React from "react";
import {useUpdateStateContext} from "@/hooks/StateContext";

const Home = () => {
  const updateState = useUpdateStateContext()

  const handleContact = () => {
    updateState({
      homeButton: true,
      contactButton: false,
      Home: false
    });
  }

  const handleServices = () => {
    updateState({
      homeButton: true,
      servicesButton: false,
      Home: false,
      Contact: false
    });
  }

  return (
    <>
      <div className='items-center justify-center'>
        <h1
          className="text-center mb-4 text-5xl font-extrabold text-white">Real World Mapping and 3D Modeling</h1>
        <p className="text-center mb-6 text-lg font-normal text-white">Here at
          EK Aerial Solutions we specialize in creating orthomosaic maps and 3D models for real estate, construction projects, golf courses, and more!</p>
        <div className='text-center'>
          <button onClick={handleContact}
             className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 border-gray-600 hover:bg-gray-100">
            Contact Us
          </button>
          <button onClick={handleServices}
             className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 border-gray-600 hover:bg-gray-100">
            Services
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
