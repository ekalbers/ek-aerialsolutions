import React from "react";
import {useUpdateStateContext} from "@/hooks/StateContext";

const Services = () => {
  const updateState = useUpdateStateContext()

  return (
    <>
      <div className="pt-4 bg-white">
        <div className="flex max-h-[85vh] w-full items-center">
          <div className="text-right p-4">
            <h1
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">Mapping</h1>
            <p className="mb-6 text-lg font-normal text-gray-500">Get high resolution orthomosaic maps of your property with GPS accuracy down to the inch.</p>
          </div>
          <div className="max-h-[85vh]">
            <img src="Screenshot 2023-07-24 at 4.21.20 PM.png" className="h-fit" alt="EK Drones Logo"/>
          </div>
        </div>
        <div className="flex max-h-[85vh] w-full items-center">
          <div className="max-h-[85vh]">
            <img src="/Screenshot 2023-07-24 at 4.04.56 PM.png" className="h-fit" alt="EK Drones Logo"/>
          </div>
          <div className="text-left p-4">
            <h1
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">3D Modeling</h1>
            <p className="mb-6 text-lg font-normal text-gray-500">We can make your location come to life in the form of a 3D model or point cloud.</p>
          </div>
        </div>
        <div className="flex max-h-[85vh] w-full items-center">
          <div className="text-right p-4">
            <h1
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">Data Collection</h1>
            <p className="mb-6 text-lg font-normal text-gray-500">Using photogrammetry, we can create elevation maps, measure volume of static objects, create topographical map, and more!</p>
          </div>
          <div className="max-h-[85vh]">
            <img src="/Screenshot 2023-07-24 at 4.08.15 PM.png" className="h-fit" alt="EK Drones Logo"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;