import React from "react";

const packages = [
  {
    title: "Basic Package",
    price: "Rs:12,000/month",
    features: [
      "Accounts Setup/Branding",
      "Accounts Management (Meta)",
      "10 Posts",
      "1 Reel / Video",
      "Ad Campaigns Management",
      "Monthly Report",
      "24/7 Support",
    ],
    buttonText: "Get Started",
    bgColor: "bg-customPink",
  },
  {
    title: "Standard Package",
    price: "Rs:18,000/month",
    features: [
      "Accounts Setup/Branding",
      "Accounts Management (Meta)",
      "15 Posts",
      "2 Reels / Videos",
      "Ad Campaigns Management",
      "Monthly Report",
      "24/7 Support",
    ],
    buttonText: "Get Started",
    bgColor: "bg-customBlue",
  },
  {
    title: "Premium Package",
    price: "Rs:25,000/month",
    features: [
      "Accounts Setup/Branding",
      "Accounts Management (Meta)",
      "20 Posts",
      "3 Reels / Videos",
      "Ad Campaigns Management",
      "Monthly Report",
      "24/7 Support",
    ],
    buttonText: "Get Started",
    bgColor: "bg-customPink",
  },
];

const OurPackages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Packages</h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose a plan that fits your business needs and take your online
          presence to the next level!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-8 ${pkg.bgColor} text-white transition-transform transform hover:scale-105`}
            >
              <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
              <p className="text-3xl font-semibold mb-6">{pkg.price}</p>
              <ul className="mb-6 space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-white font-semibold">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition">
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPackages;
