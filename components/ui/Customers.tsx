import React from "react";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  return (
    <div className="container mx-auto px-2 my-10">
      <h2 className="font-dancing text-[2.5rem] font-bold text-center mb-5">
        What Says Our Customers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
      </div>
    </div>
  );
};

export default Customers;
