import React from "react";

const Orders = () => {
  return (
    <div>
      <h1 className="font-dancing font-bold text-[45px] mb-2">Orders</h1>
      <div className="overflow-auto sidebarScrollbar max-h-[300px] rounded-xl">
        <table className="w-full text-sm text-center text-gray-400 min-w-[600px]">
          <thead className="text-xs bg-gray-700 uppercase sticky top-0 z-10">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                ADDRESS
              </th>
              <th scope="col" className="py-3 px-6">
                DATE
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-white bg-secondary font-medium transition-all duration-300 ease-in hover:bg-primary hover:text-white cursor-pointer">
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                390131902
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                İstanbul
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                01-09-2022
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">$30</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                Preparing
              </td>
            </tr>
            <tr className="border-t border-white bg-secondary font-medium transition-all duration-300 ease-in hover:bg-primary hover:text-white cursor-pointer">
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                390131902
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                İstanbul
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                01-09-2022
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">$30</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                Preparing
              </td>
            </tr>
            <tr className="border-t border-white bg-secondary font-medium transition-all duration-300 ease-in hover:bg-primary hover:text-white cursor-pointer">
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                390131902
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                İstanbul
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                01-09-2022
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">$30</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                Preparing
              </td>
            </tr>
            <tr className="border-t border-white bg-secondary font-medium transition-all duration-300 ease-in hover:bg-primary hover:text-white cursor-pointer">
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                390131902
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                İstanbul
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                01-09-2022
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">$30</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                Preparing
              </td>
            </tr>
            <tr className="border-t border-white bg-secondary font-medium transition-all duration-300 ease-in hover:bg-primary hover:text-white cursor-pointer">
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                390131902
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                İstanbul
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                01-09-2022
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">$30</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                Preparing
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
