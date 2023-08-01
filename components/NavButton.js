import React, { useEffect } from "react";
import Link from "next/link";

const NavButton = ({ name='name needed', link='' }) => {


  const handleClick = () => {

  }

  return (
    <>
      { showButton ? (
        <Link href={link} className='m-4 text-lg text-gray-500 hover:bg-gray-100'>
         <button onClick={handleClick}>{name}</button>
        </Link>
        ) : (
          <></>
        )}
    </>
  )
}

export default NavButton;
