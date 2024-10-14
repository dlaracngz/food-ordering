import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be at least 10 characters")
    .required("Phone number is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  persons: Yup.string().required("Persons is required."),
  date: Yup.string().required("Date is required"),
});
