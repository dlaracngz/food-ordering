import React from "react";
import InputComponent from "../form/input";
import { accountSchema } from "@/schema/accountSchema";
import { useFormik, FormikHelpers } from "formik";

interface AccountValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  job: string;
  bio: string;
}

const Account = () => {
  const onSubmit = async (
    values: AccountValues,
    actions: FormikHelpers<AccountValues>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      job: "",
      bio: "",
    },
    onSubmit,
    validationSchema: accountSchema,
  });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: formik.values.fullName,
      errorMessage: formik.errors.fullName,
      touched: formik.touched.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "text",
      placeholder: "Your Phone Number",
      value: formik.values.phoneNumber,
      errorMessage: formik.errors.phoneNumber,
      touched: formik.touched.phoneNumber,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      value: formik.values.address,
      errorMessage: formik.errors.address,
      touched: formik.touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: formik.values.job,
      errorMessage: formik.errors.job,
      touched: formik.touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Bio",
      value: formik.values.bio,
      errorMessage: formik.errors.bio,
      touched: formik.touched.bio,
    },
  ];
  return (
    <div>
      <h1 className="font-dancing font-bold text-[45px] mb-2">
        Account Settings
      </h1>
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

export default Account;
