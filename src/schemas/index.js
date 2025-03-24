import * as Yup from "yup";

export const contactSchema = Yup.object({
  companyName: Yup.string()
    .min(2, "Company Name must be at least 2 characters")
    .max(50, "Company Name can't exceed 50 characters")
    .required("Company Name is required"),

  fullName: Yup.string()
    .min(2, "Full Name must be at least 2 characters")
    .max(50, "Full Name can't exceed 50 characters")
    .required("Full Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9+() -]+$/, "Invalid phone number format")
    .min(5, "Phone number must be at least 5 characters")
    .max(15, "Phone number can't exceed 15 characters")
    .required("Phone number is required"),

  yourMessage: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});
