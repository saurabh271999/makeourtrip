import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">
      {/* Left: Logo and subtitle */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <span className="text-orange-500 text-3xl mr-2">✔️</span>
          <span className="text-orange-500 font-bold text-2xl">cleartrip</span>
        </div>
        <span className="hidden sm:inline text-sm text-gray-400 italic ml-2">
          | A <span className="font-semibold">Flipkart</span> Company
        </span>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-orange-500 focus:outline-none"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Right: Nav links */}
      <div className="hidden sm:flex items-center space-x-8">
        <a href="#" className="flex items-center text-gray-700 hover:text-orange-500 text-base">
          <span className="mr-1">⭑</span> Offers
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-orange-500 text-base">
          <span className="mr-1">👜</span> Business
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-orange-500 text-base">
          <span className="mr-1">🧳</span> My Trips
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-orange-500 text-base">
          <span className="mr-1">🛎️</span> Support
        </a>
        <button className="ml-2 px-5 py-2 border border-gray-400 rounded hover:bg-orange-500 text-base font-semibold">
          Log In
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="absolute top-20 left-0 w-full bg-white shadow-md sm:hidden z-50">
    <div className="flex flex-col p-6 space-y-4">
      <a
        href="#"
        className="text-gray-700 hover:text-orange-500 active:bg-orange-100 px-2 py-1 rounded transition text-base flex items-center"
      >
        ⭑ Offers
      </a>
      <a
        href="#"
        className="text-gray-700 hover:text-orange-500 active:bg-orange-100 px-2 py-1 rounded transition text-base flex items-center"
      >
        👜 Business
      </a>
      <a
        href="#"
        className="text-gray-700 hover:text-orange-500 active:bg-orange-100 px-2 py-1 rounded transition text-base flex items-center"
      >
        🧳 My Trips
      </a>
      <a
        href="#"
        className="text-gray-700 hover:text-orange-500 active:bg-orange-100 px-2 py-1 rounded transition text-base flex items-center"
      >
        🛎️ Support
      </a>
      <button className="px-5 py-2 border border-gray-400 rounded hover:bg-orange-500 active:bg-orange-600 transition text-base font-semibold">
        Log In
      </button>
    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;