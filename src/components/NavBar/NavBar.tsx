"use client";
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '@/lib/router';

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state when hamburger icon is clicked
  };
  

  return (
    <nav className="bg-stone-900 p-3 sticky top-0 border-b-1 border-b-stone-100 flex items-center justify-between">
      {/* Brand Name */}
      <div className="text-white grow-0">
        <p
          className="font-bold text-2xl italic antialiased tracking-widest overline decoration-4 lg:mr-6 cursor-pointer"
          onClick={() => window.location.href = '/'}
        >
          AREM
        </p>
      </div>

      {/* Search Form */}
      <form className="mx-2 grow flex items-center">
        <div className="flex justify-center items-center gap-2 w-full">
          <input
            type="search"
            className="flex-1 bg-stone-50 rounded-sm border-0 text-sm p-2"
            placeholder="Search a product..........."
          />
          <button className="bg-amber-50 px-4 py-3 rounded-md hover:bg-stone-700 active:bg-stone-300">
            <FontAwesomeIcon className="w-4 h-4" icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <FontAwesomeIcon
          icon={faBars}
          className="text-stone-50 hover:text-stone-700 active:text-stone-700 cursor-pointer"
          onClick={toggleMenu} // Toggle menu visibility when clicked
        />
      </div>

      {/* Desktop Icons */}
      <div className="hidden lg:flex gap-4 items-center">
        <button className="w-6 h-6 rounded-2xl">
          <FontAwesomeIcon
            icon={faHeadset}
            className="text-stone-50 hover:text-stone-700 active:text-stone-700"
            onClick={() => router.push(routes.Contact.path)} // Navigate to contact page
          />
        </button>
        <button className="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="fill-stone-50 hover:fill-stone-700 active:fill-stone-700 rounded-2xl m-0"
            onClick={() => router.push(routes.Cart.path)} // Navigate to addtocart page
          >
            <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </button>
        <button className="w-6 h-6">
          <FontAwesomeIcon
            icon={faBell}
            className="text-stone-50 hover:text-stone-700 active:text-stone-700"
            onClick={() => router.push(routes.Notification.path)} // Navigate to notification page
          />
        </button>
      </div>

      {/* Account Buttons (Create Account & Sign In) */}
      <div className="basis-2xs justify-evenly hidden md:flex grow-0 gap-4">
        <div>
          <button
            className="bg-stone-900 border-1 border-white p-2 text-white text-sm rounded-2xl flex justify-center items-center px-4 hover:bg-stone-700 hover:text-amber-50 active:bg-stone-400 active:text-amber-50"
            onClick={() => router.push(routes.CreateAccount.path)}
          >
            Create Account
          </button>
        </div>
        <div>
          <button
            className="bg-stone-900 border-1 border-white p-2 text-white text-sm rounded-2xl flex justify-center items-center px-4 hover:bg-stone-700 hover:text-amber-50 active:bg-stone-400 active:text-amber-50"
            onClick={() => router.push(routes.SignIn.path)}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Menu (for Small Screens) */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 right-0 bg-stone-900 p-4 lg:hidden flex flex-col items-center gap-4 z-50">
          {/* Back Button */}
          <button
            className="bg-stone-700 text-white p-2 rounded-lg mb-4"
            onClick={() => toggleMenu()} 
          >
            Back
          </button>

          <button
            className="w-6 h-6"
            onClick={() => router.push(routes.CreateAccount.path)}
          >
            Create Account
          </button>
          <button
            className="w-6 h-6"
            onClick={() => router.push(routes.SignIn.path)}
          >
            Sign In
          </button>
          <button className="w-6 h-6">
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-stone-50 hover:text-stone-700 active:text-stone-700"
            />
          </button>
          <button className="w-6 h-6">
            <FontAwesomeIcon
              icon={faBell}
              className="text-stone-50 hover:text-stone-700 active:text-stone-700"
            />
          </button>
          <button className="w-6 h-6">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-stone-50 hover:text-stone-700 active:text-stone-700"
            />
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;