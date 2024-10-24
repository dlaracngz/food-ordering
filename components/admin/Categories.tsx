"use client";
import React, { useState } from "react";
import InputComponent from "../form/input";

const Categories = () => {
  const [textInput, setTextInput] = useState("");
  const [categories, setCategories] = useState(["Pizza", "Hamburger", "Drink"]);
  return (
    <div className="max-w-full">
      <h1 className="font-dancing font-bold text-[45px] mb-2">Category</h1>
      <div className="w-full flex gap-4">
        <InputComponent
          placeholder="Add a new category"
          type="text"
          name="category"
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => {
            setCategories([...categories, textInput]);
          }}
        >
          Add
        </button>
      </div>
      <div className="my-6 flex flex-col gap-2">
        {categories.length === 0 && (
          <span className="text-red-600">Category is not found</span>
        )}
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-secondary flex justify-between items-center px-6 py-2 text-white h-[60px] rounded-xl font-medium"
          >
            <span>{category}</span>
            <button
              onClick={() => {
                setCategories(categories.filter((cat) => cat !== category));
              }}
              className="bg-red-600 py-2 px-6 rounded-xl border border-red-600 transition-all duration-300 ease-in hover:border-red-600 hover:text-red-600 hover:bg-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
