import React from "react";
import {useUpdateStateContext} from "@/hooks/StateContext";

const Home = () => {
  const updateState = useUpdateStateContext()

  const handleContact = () => {
    updateState({
      homeButton: true,
      servicesButton: true,
      contactButton: false,
      Contact: true
    });
  }

  const handleServices = () => {
    updateState({
      homeButton: true,
      contactButton: true,
      servicesButton: false,
      Services: true
    });
  }

  return (
    <>
      <div className='items-center justify-center'>
        <h1
          className="text-center mb-4 text-5xl font-extrabold text-white">Creating value from the Air!</h1>
        <p className="text-center mb-6 text-lg font-normal text-white">Let us assist you in leveling up your project using drone photography and photogrammetry. Drones can provide tremendous value in many industries, anywhere from Real Estate to Construction Management!</p>
        <div className='text-center'>
          <button onClick={handleContact}
             className="py-2.5 px-5 mr-2 mb-2 text-md font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 border-gray-600 hover:bg-gray-100">
            Contact Us
          </button>
          <button onClick={handleServices}
             className="py-2.5 px-5 mr-2 mb-2 text-md font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 border-gray-600 hover:bg-gray-100">
            Services
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
