"use client";
import React from "react";
import { useFormik, FormikHelpers } from "formik";
import { reservationSchema } from "@/schema/reservationSchema";
import InputComponent from "@/components/form/input";

interface FormValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  persons: number;
  date: string;
}

const Reservation = () => {
  const onSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: 0,
      date: "",
    },
    onSubmit,
    validationSchema: reservationSchema,
  });
  const inputs = [
    {
      id: 1,
      type: "text",
      name: "fullName",
      placeholder: "Your Full Name",
      value: formik.values.fullName,
      errorMessage: formik.errors.fullName,
      touched: formik.touched.fullName,
    },
    {
      id: 2,
      type: "text",
      name: "phoneNumber",
      placeholder: "Your Phone Name",
      value: formik.values.phoneNumber,
      errorMessage: formik.errors.phoneNumber,
      touched: formik.touched.phoneNumber,
    },
    {
      id: 3,
      type: "email",
      name: "email",
      placeholder: "Your Email",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 4,
      type: "number",
      name: "persons",
      placeholder: "How many persons?",
      value: formik.values.persons,
      errorMessage: formik.errors.persons,
      touched: formik.touched.persons,
    },
    {
      id: 5,
      type: "datetime-local",
      name: "date",
      placeholder: "",
      value: formik.values.date,
      errorMessage: formik.errors.date,
      touched: formik.touched.date,
    },
  ];
  return (
    <div className="container mx-auto py-10 px-2">
      <h2 className="font-dancing text-[2.5rem] mb-5">Book A Table</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          {inputs.map((input) => (
            <InputComponent
              key={input.id}
              {...input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched[input.name as keyof FormValues]}
            />
          ))}
          <button type="submit" className="btn w-40">
            Book Now
          </button>
        </form>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.313598043175!2d2.291906376866813!3d48.858373600707175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEyfel%20Kulesi!5e1!3m2!1str!2str!4v1728315495038!5m2!1str!2str"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-[5px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
