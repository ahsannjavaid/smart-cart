import React, { useEffect, useState } from "react";
import BannerImage from "../images/banner-image.png";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setTimeout(() => setIsVisible(true), 100); // Add slight delay for smooth effect
  }, []);

  return (
    <section
      id="banner-section"
      className="bg-gradient-to-r from-customBlue to-customPink text-white min-h-screen md:min-h-[85vh] flex items-center w-full py-5"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Content */}
        <div
          className={`text-center md:text-left max-w-lg space-y-6 md:space-y-6 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Empowering Your Brand with Cutting-Edge Marketing Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Grow your online presence with tailored strategies and expert
            solutions.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#contact-us"
              className="bg-white text-customBlue px-6 py-3 font-semibold rounded-lg shadow hover:bg-opacity-90 transition"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="border border-white px-6 py-3 font-semibold rounded-lg hover:bg-white hover:text-customBlue transition"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right Graphic */}
        <div
          className={`mt-6 md:mt-0 max-w-lg flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <img
            src={BannerImage}
            alt="Hero Graphic"
            className="rounded-lg shadow-lg w-[600px] h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
