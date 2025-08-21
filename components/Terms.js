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
            <div className='items-center justify-center'>
                <h1
                    className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Terms of Service:</h1>
                <p className="text-center mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">Ownership and Usage<br />
                    The client will have the right to use the final photos and videos for their intended purpose, whether it be for personal or commercial use. Provider retains the right to use the photos and videos for promotional purposes so long as Provider does not disclose the identity or any personal information of the Client without the written approval of the client.
                </p>
                <p className="text-center mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48"></p>
            </div>
        </>
    );
}

export default Terms;