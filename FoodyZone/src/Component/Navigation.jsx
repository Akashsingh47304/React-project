import React from 'react'
import logo from "../assets/Foody Zone.svg";

function Navigation() {
  return (
      <nav>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center p-4 bg-gray-500 text-red-500 py-10">
        <img
        src={logo}
        alt="logo"
        />

        <div className="flex gap-4">
  <a
    href="/"
    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
  >
    All
  </a>

  <a
    href="/"
    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
  >
    Lunch
  </a>

  <a
    href="/"
    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
  >
    BreakFast
  </a>
    <a
    href="/"
    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
  >
    Dinner
  </a>

</div>

        <input
        className="border-2 border-red-500 rounded-lg px-4 py-2 text-white bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-red-600"

        type='text'
        placeholder='search...'
        
        />
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center p-4 bg-blue-600 text-white">
        <h1>Logo</h1>

        <button>☰</button>
      </div>
    </nav>
  )
}

export default Navigation