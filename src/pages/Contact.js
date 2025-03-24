import React from "react";
import { useFormik } from "formik";
import { contactSchema } from "./../schemas";
import axios from "axios";
import { contactEndpoints } from "./../api/endpoints/contactEndpoints";

const initialValues = {
  companyName: "",
  fullName: "",
  email: "",
  phone: "",
  yourMessage: "",
};

const Contact = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axios.post(
            contactEndpoints.contactService(),
            {
              companyName: values.companyName,
              fullName: values.fullName,
              email: values.email,
              phone: values.phone,
              yourMessage: values.yourMessage,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              withCredentials: true,
            }
          );
          action.resetForm();
          alert("Your query has been submitted.");
          console.log(response);
        } catch (error) {
          console.log("abc");
        }
      },
    });

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Contact Us
        </h1>
      </div>

      {/* Contact Section */}
      <div className="md:flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-customBlue text-white p-8 md:py-20 rounded-tl-lg rounded-bl-lg flex flex-col justify-center">
          <p className="text-lg font-semibold">GET STARTED WITH US</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Start Conversation To Skyrocket Your Business
          </h2>
          <p className="text-base md:text-lg">
            Schedule a free consultation with our experts. Uncover opportunities
            and take the first step towards digital success.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-customBlue font-semibold rounded-full shadow hover:bg-opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-customPink p-8 md:py-20 rounded-tr-lg rounded-br-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Name input */}
            <div className="input-block">
              <input
                type="text"
                autoComplete="off"
                name="companyName"
                id="companyName"
                placeholder="Company Name"
                value={values.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300 w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-customBlue focus:outline-none"
              />
              {errors.companyName && touched.companyName ? (
                <p className="form-error">{errors.companyName}</p>
              ) : null}
            </div>

            {/* Full Name input */}
            <div className="input-block">
              <input
                type="text"
                autoComplete="off"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300 w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-customBlue focus:outline-none"
              />
              {errors.fullName && touched.fullName ? (
                <p className="form-error">{errors.fullName}</p>
              ) : null}
            </div>

            {/* Email input */}
            <div className="input-block">
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300 w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-customBlue focus:outline-none"
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>

            {/* Phone number input */}
            <div className="input-block">
              <input
                type="text"
                autoComplete="off"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300 w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-customBlue focus:outline-none"
              />
              {errors.phone && touched.phone ? (
                <p className="form-error">{errors.phone}</p>
              ) : null}
            </div>

            {/* Your Message input */}
            <div className="input-block">
              <textarea
                name="yourMessage"
                id="yourMessage"
                placeholder="Please write your message here ..."
                value={values.yourMessage}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300 w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-customBlue focus:outline-none resize-none"
                rows="5" // Adjust the number of rows as needed
              ></textarea>
              {errors.yourMessage && touched.yourMessage ? (
                <p className="form-error">{errors.yourMessage}</p>
              ) : null}
            </div>

            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-customBlue text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
