import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-lg text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-200">
            MyBrand
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "text-yellow-300 font-semibold" : "text-gray-200"
                } hover:text-yellow-300 transition duration-200`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "text-yellow-300 font-semibold" : "text-gray-200"
                } hover:text-yellow-300 transition duration-200`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "text-yellow-300 font-semibold" : "text-gray-200"
                } hover:text-yellow-300 transition duration-200`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
