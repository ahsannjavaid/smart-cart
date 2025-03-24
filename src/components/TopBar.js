import React from "react";

// https://react-icons.github.io/react-icons/icons/fa/
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-customBlue text-white py-2 hidden md:block">
      <div className="container mx-auto flex items-center justify-between px-6 space-y-2 md:space-y-0">
        {/* Address */}
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt />
          <span>Bahawalpur, Pakistan</span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <FaEnvelope />
          <span>insighttechsolutionz@gmail.com</span>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-2">
          <FaPhoneAlt />
          <span>+92 326 7374898</span>
        </div>

        {/* Social Media */}
        <div className="flex items-center space-x-4">
          <a
            href="https://web.facebook.com/profile.php?id=61570313922667"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-customPink transition-colors">
              <FaFacebook />
            </span>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-customPink transition-colors">
              <FaYoutube />
            </span>
          </a>
          <a
            href="https://www.instagram.com/insighttechsolutions123/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-customPink transition-colors">
              <FaInstagram />
            </span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-customPink transition-colors">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
