import React from "react";
import {useUpdateStateContext} from "@/hooks/StateContext";

const Services = () => {
  const updateState = useUpdateStateContext()

  return (
    <>
      <div className="pt-4 bg-white">
        <div className="flex max-h-[85vh] w-full items-center">
          <div className="text-center">
            <h1
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">We
              invest in the world’s potential</h1>
            <p className="mb-6 text-lg font-normal text-gray-500">Here
              at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and
              drive economic growth.</p>
          </div>
          <div className="max-h-[85vh]">
            <img src="/Screenshot 2023-07-24 at 4.08.15 PM.png" className="h-fit" alt="EK Drones Logo"/>
          </div>
        </div>
        <div className="flex max-h-[85vh] w-full items-center">
          <div className="max-h-[85vh]">
            <img src="/Screenshot 2023-07-24 at 4.04.56 PM.png" className="h-fit" alt="EK Drones Logo"/>
          </div>
          <div className="text-center">
            <h1
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">We
              invest in the world’s potential</h1>
            <p className="mb-6 text-lg font-normal text-gray-500">Here
              at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and
              drive economic growth.</p>
          </div>
        </div>
        <div className="flex max-h-[85vh] w-full items-center">
          <div className="text-center">
            <h1
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">We
              invest in the world’s potential</h1>
            <p className="mb-6 text-lg font-normal text-gray-500">Here
              at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and
              drive economic growth.</p>
          </div>
          <div className="max-h-[85vh]">
            <img src="/DJI_0428(2).JPG" className="h-fit" alt="EK Drones Logo"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;