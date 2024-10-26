"use client";
import React from "react";
import InputComponent from "../form/input";
import { FormikHelpers, useFormik } from "formik";
import { footerSchema } from "@/schema/footerSchema";

interface FooterValues {
  location: string;
  email: string;
  phoneNumber: string;
  description: string;
  day: string;
  time: string;
}

const Footer = () => {
  const onSubmit = async (
    values: FooterValues,
    actions: FormikHelpers<FooterValues>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      location: "",
      email: "",
      phoneNumber: "",
      description: "",
      day: "",
      time: "",
    },
    onSubmit,
    validationSchema: footerSchema,
  });
  const inputs = [
    {
      id: 1,
      type: "text",
      name: "location",
      placeholder: "Your Location",
      value: formik.values.location,
      errorMessage: formik.errors.location,
      touched: formik.touched.location,
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Your Email",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 3,
      type: "text",
      name: "phoneNumber",
      placeholder: "Your Phone Number",
      value: formik.values.phoneNumber,
      errorMessage: formik.errors.phoneNumber,
      touched: formik.touched.phoneNumber,
    },
    {
      id: 4,
      type: "text",
      name: "description",
      placeholder: "Write a Description",
      value: formik.values.description,
      errorMessage: formik.errors.description,
      touched: formik.touched.description,
    },
    {
      id: 5,
      type: "text",
      name: "day",
      placeholder: "Write a Day",
      value: formik.values.day,
      errorMessage: formik.errors.day,
      touched: formik.touched.day,
    },
    {
      id: 6,
      type: "text",
      name: "time",
      placeholder: "Write a Time",
      value: formik.values.time,
      errorMessage: formik.errors.time,
      touched: formik.touched.time,
    },
  ];
  return (
    <div>
      <h1 className="font-dancing font-bold text-[45px] mb-2">Footer</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {inputs.map((input) => (
            <InputComponent
              key={input.id}
              {...input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ))}
        </div>

        <button className="btn mt-3 !w-28" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default Footer;
