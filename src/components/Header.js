import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-customBlue to-customPink shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Side: Logo/Text */}
        <NavLink to="/" className="text-left" onClick={closeMenu}>
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="block text-4xl text-white">Insight Tech</span>
            <span className="block text-lg text-customPink text-center">
              Solutions
            </span>
          </h1>
        </NavLink>

        {/* Center: Navigation */}

        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white hover:text-opacity-80 transition-all duration-200 ${isActive ? "text-xl font-semibold text-[#FFD700]" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `text-white hover:text-opacity-80 transition-all duration-200 ${isActive ? "text-xl font-semibold text-[#FFD700]" : ""
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-white hover:text-opacity-80 transition-all duration-200 ${isActive ? "text-xl font-semibold text-[#FFD700]" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/packages"
            className={({ isActive }) =>
              `text-white hover:text-opacity-80 transition-all duration-200 ${isActive ? "text-xl font-semibold text-[#FFD700]" : ""
              }`
            }
          >
            Packages
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `text-white hover:text-opacity-80 transition-all duration-200 ${isActive ? "text-xl font-semibold text-[#FFD700]" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Right Side: Free Consultation Button */}
        <a
          href="https://wa.me/+923267374898"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-customBlue border border-transparent text-white px-4 py-2 rounded-lg items-center space-x-2 transition hover:bg-transparent hover:border hover:border-white"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="text-xl">Free Consultation</span>
        </a>

        {/* Mobile Menu: Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-customBlue text-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              to="/"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/packages"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              Packages
            </NavLink>
            <NavLink
              to="/contact-us"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
            <a
              href="https://wa.me/+923267374898"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-opacity-90 transition"
              onClick={closeMenu}
            >
              <FaWhatsapp className="text-lg" />
              <span>Free Consultation</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
