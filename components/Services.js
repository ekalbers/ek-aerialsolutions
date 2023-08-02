import React from "react";
import {useUpdateStateContext} from "@/hooks/StateContext";

const Services = () => {
  const updateState = useUpdateStateContext()

  return (
    <>
      <div className="pt-4 bg-white">
        <div className="xl:flex max-h-[85vh] w-full items-center">
          <div className="max-h-[85vh]">
            <img src="/Museum.jpg" className="xl:h-fit md:w-fit" alt="EK Drones Logo"/>
          </div>
          <div className="text-left p-4">
            <h1
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">Photography</h1>
            <p className="mb-6 text-lg font-normal text-gray-500">Whether it is for Real Estate or to promote your business, Aerial Photography has the ability to provide breathtaking perspectives!</p>
          </div>
        </div>
        <div className="xl:flex max-h-[85vh] w-full items-center md:w-fit">
          <div className="text-right p-4">
            <h1
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">Mapping</h1>
            <p className="mb-6 text-lg font-normal text-gray-500">Get high resolution orthomosaic maps of your property with GPS accuracy down to the inch.</p>
          </div>
          <div className="max-h-[85vh]">
            <img src="/ComercialOrtho.jpg" className="xl:h-fit md:w-fit" alt="EK Drones Logo"/>
          </div>
        </div>
        <div className="xl:flex max-h-[85vh] w-full items-center md:w-fit">
          <div className="max-h-[85vh]">
            <img src="/Comercial3D.jpg" className="xl:h-fit md:w-fit" alt="EK Drones Logo"/>
          </div>
          <div className="text-left p-4">
            <h1
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">3D Modeling</h1>
            <p className="mb-6 text-lg font-normal text-gray-500">We can make your location come to life in the form of a 3D model or point cloud.</p>
          </div>
        </div>
        <div className="xl:flex max-h-[85vh] w-full items-center md:w-fit">
          <div className="text-right p-4">
            <h1
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">Data Collection</h1>
            <p className="mb-6 text-lg font-normal text-gray-500">Using photogrammetry, we can create elevation maps, measure volume of static objects, create topographical map, and more!</p>
          </div>
          <div className="max-h-[85vh]">
            <img src="/ApartmentElev.jpg" className="xl:h-fit md:w-fit" alt="EK Drones Logo"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
