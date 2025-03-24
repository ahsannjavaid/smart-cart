import React, { useEffect, useState } from "react";

const services = [
  {
    title: "Meta Ads",
    description:
      "Boost your brand's reach with targeted Meta Ads campaigns that drive results.",
    image:
      "https://images.unsplash.com/photo-1665799871677-f1fd17338b43?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Graphic Designing",
    description:
      "Create stunning visual content that captures attention and represents your brand.",
    image:
      "https://plus.unsplash.com/premium_photo-1661326291059-eb076cc5bdd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Content Writing",
    description:
      "Engage your audience with high-quality, SEO-optimized, and persuasive content.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Social Media Marketing",
    description:
      "Grow your online presence and engage with your audience effectively on social media.",
    image:
      "https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Web Development",
    description:
      "Build scalable, high-performing websites that create a lasting impression on visitors.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SEO",
    description:
      "Improve your website's ranking and visibility through proven SEO techniques.",
    image:
      "https://plus.unsplash.com/premium_photo-1683578888262-22a112723a83?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Services = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services-section");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="services-section"
      className="py-12 bg-customBlue overflow-hidden"
    >
      <div className="container mx-auto text-center px-12">
        {/* Heading */}
        <h2
          className={`text-4xl font-bold text-white mb-12 transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Our Services
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-customPink rounded-lg shadow-lg overflow-hidden transform transition-transform duration-700 ${
                inView
                  ? `opacity-100 translate-y-0 delay-${index * 100}`
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
