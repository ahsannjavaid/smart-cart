import React from "react";
import logo from './../images/logo-3.png';
import team from './../images/team-members/team.jpg';

const AboutUs = () => {
  return (
    <div>
    {/* <section className="py-12 px-6 md:px-12 lg:px-20">
      <div className="container flex flex-col md:flex-row items-center justify-center space-x-5 text-center">
        {/* Heading */}
        {/* <h2 className="text-6xl font-bold text-gray-800 mb-4">
          About Us
        </h2> */}
        
        {/* Logo */}
        {/* <img
        src={logo}
        alt="Company Logo"
        className="w-60 h-30 md:w-60 md:h-20  rounded-lg object-cover"
      />
      </div>
    </section> */}

    <section className="py-12 px-6 md:px-12 lg:px-20">
  <div className="container flex flex-col md:flex-row items-center justify-center space-x-5  text-center">
    {/* Heading */}
    <h2 className="text-6xl font-bold text-gray-800 mb-4 md:mb-0">
      About Us
    </h2>

    {/* Vertical Border */}
    <div className="hidden md:block border-l-4 border-gray-400 h-16"></div>

    {/* Logo */}
    <img
      src={logo}
      alt="Company Logo"
      className="w-60 h-30 md:w-60 md:h-20 rounded-full object-cover"
    />
  </div>
</section>


<section className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  
  {/* Left: Image */}
  <div>
    <img 
      src={team} 
      alt="IDMPakistan Event" 
      className="w-full rounded-lg shadow-lg"
    />
  </div>

  {/* Right: Content */}
  <div>
    <h3 className="text-green-600 text-lg font-semibold">Introduction</h3>
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
      Welcome to Insight Tech Solutions
    </h2>
    <p className="mt-4 text-gray-600 leading-relaxed">
    We have established a strong presence across Pakistan, helping businesses grow through expert social media marketing. Our services extend to clients in Islamabad, Karachi, Lahore, Rawalpindi, and beyond, including emerging markets in cities like Burewala and Peshawar. What started as a small agency has now evolved into a dedicated team of digital marketing professionals passionate about delivering impactful results.
    </p>
    <p className="mt-4 text-gray-600 leading-relaxed">
    With over 40+ years of combined expertise, our specialists empower businesses to scale through strategic advertising and content planning. We love digital marketing, we love innovation, and that’s our mission at Insight Tech Solutions.
    </p>
  </div>

</div>
</section>

</div>

    
  );
};

export default AboutUs;
