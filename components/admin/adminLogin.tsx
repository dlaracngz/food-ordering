"use client";
import React from "react";
import InputComponent from "../form/input";
import Link from "next/link";
import { FormikHelpers, useFormik } from "formik";
import { adminSchema } from "@/schema/adminSchema";

interface AdminValues {
  username: string;
  password: string;
}

const AdminLogin = () => {
  const onSubmit = async (
    values: AdminValues,
    actions: FormikHelpers<AdminValues>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
    validationSchema: adminSchema,
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your Username",
      value: formik.values.username,
      errorMessage: formik.errors.username,
      touched: formik.touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: formik.values.password,
      errorMessage: formik.errors.password,
      touched: formik.touched.password,
    },
  ];
  return (
    <div className="container mx-auto px-2 flex flex-col items-center h-full justify-center min-h-[calc(100vh_-_491px)]">
      <h1 className="font-dancing font-bold text-[45px] text-center mb-6">
        Admin Login
      </h1>
      <div className="max-w-[600px] mx-auto w-full">
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={formik.handleSubmit}
        >
          {inputs.map((input) => (
            <InputComponent
              key={input.id}
              {...input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched[input.name as keyof AdminValues]}
            />
          ))}
          <button type="submit" className="btn mb-4">
            LOGIN
          </button>
        </form>
        <Link href="/">
          <u>Home Page</u>
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
