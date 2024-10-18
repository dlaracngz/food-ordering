"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import InputComponent from "../form/input";
import { FormikHelpers, useFormik } from "formik";
import { loginSchema } from "@/schema/loginSchema";
import Link from "next/link";

interface LoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const onSubmit = async (
    values: LoginValues,
    actions: FormikHelpers<LoginValues>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });
  const inputs = [
    {
      id: 1,
      type: "email",
      name: "email",
      placeholder: "Your Email",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 2,
      type: "password",
      name: "password",
      placeholder: "Your Password",
      value: formik.values.password,
      errorMessage: formik.errors.password,
      touched: formik.touched.password,
    },
  ];
  return (
    <div className="container mx-auto px-2 my-20">
      <h1 className="font-dancing font-bold text-[45px] text-center mb-6">
        Login
      </h1>
      <div className="max-w-[600px] w-full mx-auto">
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          {inputs.map((input) => (
            <InputComponent
              key={input.id}
              {...input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched[input.name as keyof LoginValues]}
            />
          ))}
          <button type="submit" className="btn font-bold">
            LOGIN
          </button>
        </form>
        <button className="my-4 w-full flex justify-center items-center gap-2 bg-secondary p-2 text-white rounded-full">
          <FaGithub />
          GITHUB
        </button>
        <Link href="/auth/register">
          <u>Do you no have a account?</u>
        </Link>
      </div>
    </div>
  );
};

export default Login;
