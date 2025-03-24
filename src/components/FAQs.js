import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqsData = [
  {
    question:
      "How do you determine the effective marketing plan for my business?",
    answer:
      "We analyze your target audience, competitors, and industry trends to create a tailored marketing strategy that aligns with your business goals.",
  },
  {
    question: "What is your strategy for starting a new project?",
    answer:
      "Our process begins with a discovery session to understand your needs, followed by research, planning, and execution of customized solutions.",
  },
  {
    question: "How do you measure the success of your campaigns?",
    answer:
      "We track key performance indicators (KPIs) like engagement, conversions, and return on investment (ROI) to ensure optimal campaign performance.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 py-12 bg-customBlue">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
        Frequently <span className="text-customPink">Asked</span> Questions
      </h2>
      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="bg-[#111] border border-[#333] rounded-lg overflow-hidden md:w-4/5 mx-auto"
          >
            <button
              className="w-full flex justify-between items-center text-left p-4 text-white font-medium hover:bg-[#222] transition"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown
                className={`text-customPink transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 py-4 text-black bg-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
