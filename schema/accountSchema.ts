import * as Yup from "yup";

export const accountSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .min(10, "Phone number must be at least 10 characters"),
  address: Yup.string().required("Address is required"),
  job: Yup.string().required("Job is required"),
  bio: Yup.string().required("Bio is required"),
});
