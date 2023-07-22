import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200">
          <div className="flex flex-wrap items-center justify-center">
            <ul className="flex items-center justify-center text-lg text-gray-500 sm:mb-0">
              <li>
                <Link href="/" className='flex-auto'>
                  <img src="/ek-aerial-solutions-low-resolution-logo-black-on-transparent-background.png" className="h-16 m-2" alt="EK Drones Logo"/>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}