import React from "react";
import { useParams } from "react-router-dom";

const services = {
  "meta-ads": {
    title: "Meta Ads",
    description:
      "Boost your brand's reach with targeted Meta Ads campaigns that drive results.",
    details:
      "Meta Ads help businesses expand their reach through precise targeting, ensuring maximum engagement and ROI. Our experts create compelling ad copies and optimize campaigns for the best results.",
    image:
      "https://images.unsplash.com/photo-1665799871677-f1fd17338b43?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  "graphic-designing": {
    title: "Graphic Designing",
    description:
      "Create stunning visual content that captures attention and represents your brand.",
    details:
      "We specialize in designing high-quality graphics that align with your brand identity, making your business stand out in a competitive digital landscape.",
    image:
      "https://plus.unsplash.com/premium_photo-1661326291059-eb076cc5bdd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  "content-writing": {
    title: "Content Writing",
    description:
      "Engage your audience with high-quality, SEO-optimized, and persuasive content.",
    details:
      "Our content writing services ensure your brand's message is clear, engaging, and optimized for search engines to maximize traffic and conversions.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    description:
      "Engage your audience with high-quality, SEO-optimized, and persuasive content.",
    details:
      "Our content writing services ensure your brand's message is clear, engaging, and optimized for search engines to maximize traffic and conversions.",
    image:
      "https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  "web-development": {
    title: "Web Development",
    description:
      "Engage your audience with high-quality, SEO-optimized, and persuasive content.",
    details:
      "Our content writing services ensure your brand's message is clear, engaging, and optimized for search engines to maximize traffic and conversions.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  seo: {
    title: "SEO",
    description:
      "Engage your audience with high-quality, SEO-optimized, and persuasive content.",
    details:
      "Our content writing services ensure your brand's message is clear, engaging, and optimized for search engines to maximize traffic and conversions.",
    image:
      "https://plus.unsplash.com/premium_photo-1683578888262-22a112723a83?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

const ServiceDetailComponent = () => {
  const { serviceId } = useParams();
  const service = services[serviceId];

  if (!service) {
    return <div className="text-center text-white">Service not found.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-customBlue">
            {service.title}
          </h2>
          <p className="text-gray-700 mt-2">{service.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailComponent;
