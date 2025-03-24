import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-customBlue text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-customPink mb-4">
              Insight Tech Solutions
            </h2>
            <p className="text-sm leading-6">
              Empowering businesses with innovative social media marketing
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-customPink mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-customPink">
                  Home
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-customPink">
                  Services
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-customPink">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-customPink">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-customPink">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-customPink mb-4">
              Contact Us
            </h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:info@insighttech.com"
                className="hover:text-customPink"
              >
                insighttechsolutionz@gmail.com
              </a>
            </p>
            <p className="text-sm">Phone: +92 326 7374898</p>
            <p className="text-sm">Address: Bahawalpur, Pakistan</p>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-bold text-customPink mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customPink"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customPink"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customPink"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customPink"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-opacity-20 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Insight Tech Solutions. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
