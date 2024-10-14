"use client";
import React, { useState } from "react";

interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  touched?: boolean | undefined;
  errorMessage?: string;
}

const InputComponent: React.FC<InputProps> = ({
  type = "text",
  name,
  placeholder,
  value,
  errorMessage,
  onChange,
  onBlur,
  touched,
}) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <label htmlFor={name} className="relative">
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        onClick={() => setIsClick(true)}
        className={`border outline-none h-[64px] w-full px-6 rounded-[5px] ${
          errorMessage && touched ? "border-red-600" : "border-[#999]"
        }`}
      />
      <span
        className={`absolute transition-all duration-300 ease-in ${
          isClick ? "top-[3px] left-6 text-[13px]" : "top-5 left-6 text-[16px]"
        }`}
      >
        {placeholder}
      </span>
      {touched && <div className="text-red-600 absolute">{errorMessage}</div>}
    </label>
  );
};

export default InputComponent;
