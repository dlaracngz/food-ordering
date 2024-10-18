"use client";
import React from "react";
import InputComponent from "../form/input";
import { useFormik, FormikHelpers } from "formik";
import { registerSchema } from "@/schema/registerSchema";
import Link from "next/link";

interface RegisterValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const onSubmit = async (
    values: RegisterValues,
    actions: FormikHelpers<RegisterValues>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validationSchema: registerSchema,
  });
  const inputs = [
    {
      id: 1,
      type: "string",
      name: "fullName",
      placeholder: "Your Full Name",
      value: formik.values.fullName,
      errorMessage: formik.errors.fullName,
      touched: formik.touched.fullName,
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
      type: "password",
      name: "password",
      placeholder: "Your Password",
      value: formik.values.password,
      errorMessage: formik.errors.password,
      touched: formik.touched.password,
    },
    {
      id: 4,
      type: "password",
      name: "confirmPassword",
      placeholder: "Your Confirm Password",
      value: formik.values.confirmPassword,
      errorMessage: formik.errors.confirmPassword,
      touched: formik.touched.confirmPassword,
    },
  ];
  return (
    <div className="container mx-auto px-2 my-20">
      <h1 className="font-dancing font-bold text-[45px] mb-6 text-center">
        Register
      </h1>
      <div className="max-w-[600px] mx-auto w-full">
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4"
        >
          {inputs.map((input) => (
            <InputComponent
              key={input.id}
              {...input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched[input.name as keyof RegisterValues]}
            />
          ))}
          <button type="submit" className="btn mb-4">
            REGISTER
          </button>
        </form>
        <Link href="/auth/login">
          <u>Do you have a account?</u>
        </Link>
      </div>
    </div>
  );
};

export default Register;
