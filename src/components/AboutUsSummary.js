import React, { useEffect, useState } from "react";
import BannerImage from "../images/banner-image.png";

const AboutUsSummary = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutUsSection = document.getElementById("about-us");
      const sectionTop = aboutUsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about-us" className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-8 px-6 lg:px-12">
        {/* Image Section */}
        <div
          className={`w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <img
            src={BannerImage}
            alt="About Us"
            className="rounded-lg shadow-lg w-[600px] h-[400px] object-cover"
          />
        </div>

        {/* Content Section */}
        <div
          className={`w-full lg:w-1/2 flex flex-col justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-customBlue mb-6">About Us</h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            At Insight Tech Solutions, we empower businesses to thrive in the
            digital age. Our dedicated team specializes in creating innovative
            strategies, delivering impactful campaigns, and building long-term
            partnerships. With expertise in Meta Ads, graphic design, content
            writing, and social media management, we craft solutions tailored to
            your unique goals.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Your success is our mission, and we're here to make your brand stand
            out in the competitive landscape. Partner with us and experience the
            difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSummary;
