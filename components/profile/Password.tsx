import React from "react";
import InputComponent from "../form/input";
import { FormikHelpers, useFormik } from "formik";
import { newPasswordSchema } from "@/schema/newPasswordSchema";

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

const Password = () => {
  const onSubmit = async (
    values: PasswordValues,
    actions: FormikHelpers<PasswordValues>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validationSchema: newPasswordSchema,
  });
  const inputs = [
    {
      id: 1,
      type: "password",
      name: "password",
      placeholder: "Your Password",
      value: formik.values.password,
      errorMessage: formik.errors.password,
      touched: formik.touched.password,
    },
    {
      id: 2,
      type: "password",
      name: "confirmPassword",
      placeholder: "Your Confirm Password",
      value: formik.values.confirmPassword,
      errorMessage: formik.errors.confirmPassword,
      touched: formik.touched.confirmPassword,
    },
  ];
  return (
    <div>
      <h1 className="font-dancing font-bold text-[45px] mb-2">Password</h1>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        onSubmit={formik.handleSubmit}
      >
        {inputs.map((input) => (
          <InputComponent
            key={input.id}
            {...input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ))}
        <button type="submit" className="btn mt-1">
          Update
        </button>
      </form>
    </div>
  );
};

export default Password;
