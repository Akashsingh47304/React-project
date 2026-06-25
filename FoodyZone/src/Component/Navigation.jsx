import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Foody Zone.svg";

function Navigation() {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-red-700 text-white"
        : "bg-red-600 text-white hover:bg-red-700"
    }`;

  return (
    <nav>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center p-4 bg-gray-500 py-10">
        <img src={logo} alt="Logo" />

        <div className="flex gap-4">
          <NavLink to="/" className={navLinkClass}>
            All
          </NavLink>

          <NavLink to="/lunch" className={navLinkClass}>
            Lunch
          </NavLink>

          <NavLink to="/breakfast" className={navLinkClass}>
            Breakfast
          </NavLink>

          <NavLink to="/dinner" className={navLinkClass}>
            Dinner
          </NavLink>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="border-2 border-red-500 rounded-lg px-4 py-2 text-white bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-red-600"
        />
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center p-4 bg-blue-600 text-white">
        <img src={logo} alt="Logo" className="h-8" />

        <button className="text-2xl">☰</button>
      </div>
    </nav>
  );
}

export default Navigation;