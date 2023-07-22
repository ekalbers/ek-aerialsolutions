import React from "react";

const Home = ({ toggleHome }) => {
  return (
    <>
      <div className='items-center justify-center'>
        <h1
          className="text-center mb-4 text-5xl font-extrabold text-white">Real World Mapping and 3D Modeling</h1>
        <p className="text-center mb-6 text-lg font-normal text-white">Here at
          EK Aerial Solutions we specialize in creating orthomosaic maps and 3D models for real estate, construction projects, golf courses, and more!</p>
        <div className='text-center'>
          <button onClick={toggleHome}
             className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Contact Us
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
