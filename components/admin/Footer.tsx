import React from "react";
import InputComponent from "../form/input";

const Footer = () => {
  const inputs = [
    {
      id: 1,
      type: "text",
      name: "location",
      placeholder: "Your Location",
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Your Email",
    },
    {
      id: 3,
      type: "text",
      name: "phoneNumber",
      placeholder: "Your Phone Number",
    },
    {
      id: 4,
      type: "text",
      name: "description",
      placeholder: "Write a Description",
    },
    {
      id: 5,
      type: "text",
      name: "day",
      placeholder: "Write a Day",
    },
    {
      id: 6,
      type: "text",
      name: "time",
      placeholder: "Write a Time",
    },
  ];
  return (
    <div>
      <h1 className="font-dancing font-bold text-[45px] mb-2">Footer</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {inputs.map((input) => (
            <InputComponent key={input.id} {...input} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Footer;
