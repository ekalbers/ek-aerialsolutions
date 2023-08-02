import React, { useEffect } from "react";
import { useStateContext, useUpdateStateContext } from "@/hooks/StateContext";
import Link from "next/link";

const UserButton = () => {
  const state = useStateContext();
  const updateState = useUpdateStateContext()

  useEffect(() => {
    isLoggedIn();
  }, [state.loggedIn]);

  const isLoggedIn = async () => {
    console.log('loggedIn')
    const response = await fetch('https://ek-aerialsolutions-git-auth0-ekalbers.vercel.app/api/auth/me');
    if (response.status === 200) {
      updateState({ loggedIn: true });
    }
  }

  const getUser = async () => {
    return
  }

  return (
    <>
      { !state.loggedIn ? (
        <Link href='/api/auth/login' className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 border-gray-600 hover:bg-gray-100'>
          Customer Login
        </Link>
      ) : (
        <>
          <Link href='#' className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 border-gray-600 hover:bg-gray-100'>
            <button onClick={getUser}>Profile</button>
          </Link>
          <Link href='/api/auth/logout' className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 border-gray-600 hover:bg-gray-100'>
            Logout
          </Link>
        </>
      )}
    </>
  );
}

export default UserButton;