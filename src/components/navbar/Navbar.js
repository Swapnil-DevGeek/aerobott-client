import React, { useState } from "react";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menuItems = [
    { name: 'Lithium', href: '#', active: false },
    { name: 'Shop', href: '#', active: true },
    { name: 'Drone as a Service', href: '#', active: false },
    { name: 'Contact', href: '#', active: false },
  ];

  return (
    <nav className="bg-white border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a
          href="/"
        >
          <img
            src={logo}
            alt="Aerobott Logo"
          />
        </a>

        {/* hamberger logo */}
        <div className="flex justify-center items-center gap-4">
        <img className="lg:hidden md:hidden" src={profile} alt="" />

          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          
        </div>
        
        <div
          className={`${
            isNavOpen ? "block" : "hidden"
          } w-full md:block md:w-auto `}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            {menuItems.map((item,index)=>(
                <li key={index}>
                <a
                    href={item.href}
                    className={`block py-2 px-3 rounded md:p-0 ${
                        item.active 
                        ? 'text-white bg-[#216FB9] md:bg-transparent md:text-[#216FB9]'
                        : 'text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#216FB9]'
                    } `}
                    aria-current = {item.active ? "page" : undefined}
                >
                    {item.name}
                </a>
                </li>
            ))}
            <li className="hidden md:block lg:block"><img src={profile} alt="" /></li>

          </ul>
          
        </div>


      </div>
    </nav>
  );
};

export default Navbar;