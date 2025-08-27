import React from "react";
import Link from "next/link";
import { useUpdateStateContext } from "@/hooks/StateContext";

const Terms = () => {
    const updateState = useUpdateStateContext()

    const handleClick = () => {
        updateState({
            homeButton: false,
            servicesButton: false,
            contactButton: false,
            Services: false,
            Contact: false,
            Thanks: false
        })
    }

    return (
        <>
            <div className='items-center justify-center p-28'>
                <h1
                    className="text-center mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Terms of Service:</h1>
                <h2 className="text-left mb-2 text-lg font-bold text-white lg:text-xl sm:px-16 xl:px-48">Scheduling:</h2>
                <p className="text-left mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
                    Bookings can be scheduled up to 90 days from the date of purchase.
                </p>
                <h2 className="text-left mb-2 text-lg font-bold text-white lg:text-xl sm:px-16 xl:px-48">Ownership and Usage:</h2>
                <p className="text-left mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
                    The client will have the right to use the final photos and videos for their intended purpose, whether it be for personal or commercial use. Provider retains the right to use the photos and videos for promotional purposes so long as Provider does not disclose the identity or any personal information of the Client without the written approval of the client.
                </p>
                <h2 className="text-left mb-2 text-lg font-bold text-white lg:text-xl sm:px-16 xl:px-48">Safe Practices:</h2>
                <p className="text-left mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
                    Pilot follows FAA Part 107 Regulation to the best of their ability to include not flying over crowds of people or traffic.
                </p>
                <h2 className="text-left mb-2 text-lg font-bold text-white lg:text-xl sm:px-16 xl:px-48">Liability:</h2>
                <p className="text-left mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
                    Provider represents and warrants that they have liability insurance coverage related to the provision of drone services. The details of this insurance coverage, including the coverage limits and policy number, can be provided upon client’s request.
                </p>
            </div>
        </>
    );
}

export default Terms;