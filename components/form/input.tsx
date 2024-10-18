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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label htmlFor={name} className="relative">
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        onClick={() => setIsFocused(true)}
        className={`border border-primary outline-none h-[60px] w-full px-6 rounded-[5px] ${
          errorMessage && touched ? "border-red-600" : "border-[#999]"
        }`}
      />
      <span
        className={`absolute transition-all duration-300 ease-in ${
          isFocused && value
            ? "top-[2px] left-6 text-[13px]"
            : "top-[17px] left-6 text-[16px]"
        }`}
      >
        {placeholder}
      </span>
      {touched && errorMessage && (
        <div className="text-red-600 mt-2">{errorMessage}</div>
      )}
    </label>
  );
};

export default InputComponent;
