import React from "react";

const Services = () => {
  return (
    <>
      <div className="pt-4 bg-white">
        <div className="xl:flex max-h-[85vh] w-full items-center">
          <div className="max-h-[85vh]">
            <div id="default-carousel" class="relative w-full" data-carousel="slide">
              {/* <!-- Carousel wrapper --> */}
              <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* <!-- Item 1 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/Comercial3D.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                </div>
                {/* <!-- Item 2 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/ComercialOrtho.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                </div>
              </div>
              {/* <!-- Slider indicators --> */}
              <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
              </div>
              {/* <!-- Slider controls --> */}
              <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                  </svg>
                  <span class="sr-only">Previous</span>
                </span>
              </button>
              <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span class="sr-only">Next</span>
                </span>
              </button>
            </div>
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
            <img src="/ComercialOrtho.jpg" className="xl:h-fit md:w-fit" alt="EK Drones Logo" />
          </div>
        </div>
        <div className="xl:flex max-h-[85vh] w-full items-center md:w-fit">
          <div className="max-h-[85vh]">
            <img src="/Comercial3D.jpg" className="xl:h-fit md:w-fit" alt="EK Drones Logo" />
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
            <img src="/ApartmentElev.jpg" className="xl:h-fit md:w-fit" alt="EK Drones Logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
