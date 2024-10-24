import React from "react";

const Orders = () => {
  return (
    <div>
      <h1 className="font-dancing font-bold text-[45px] mb-2">Orders</h1>
      <div className="overflow-auto sidebarScrollbar rounded-xl max-h-[350px] w-full">
        <table className="w-full text-sm text-center text-gray-400 min-w-[600px]">
          <thead className="text-xs bg-gray-700 sticky top-0 z-10 uppercase">
            <tr>
              <th scope="col" className="py-3 px-6">
                PRODUCT
              </th>
              <th scope="col" className="py-3 px-6">
                CUSTOMER
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                PAYMENT
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-white bg-secondary font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer">
              <td className="py-4 px-6 font-medium">1320930912</td>
              <td className="py-4 px-6 font-medium">Dilara Cengiz</td>
              <td className="py-4 px-6 font-medium">$40</td>
              <td className="py-4 px-6 font-medium">Cash</td>
              <td className="py-4 px-6 font-medium">Preparing</td>
              <td className="py-4 px-6 font-medium">
                <button className="bg-green-700 text-white py-2 px-4 rounded-xl border border-gray-700 hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300 ease-in">
                  Next Stage
                </button>
              </td>
            </tr>
            <tr className="border-t border-white bg-secondary font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer">
              <td className="py-4 px-6 font-medium">1320930912</td>
              <td className="py-4 px-6 font-medium">Dilara Cengiz</td>
              <td className="py-4 px-6 font-medium">$40</td>
              <td className="py-4 px-6 font-medium">Cash</td>
              <td className="py-4 px-6 font-medium">Preparing</td>
              <td className="py-4 px-6 font-medium">
                <button className="bg-green-700 text-white py-2 px-4 rounded-xl border border-gray-700 hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300 ease-in">
                  Next Stage
                </button>
              </td>
            </tr>
            <tr className="border-t border-white bg-secondary font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer">
              <td className="py-4 px-6 font-medium">1320930912</td>
              <td className="py-4 px-6 font-medium">Dilara Cengiz</td>
              <td className="py-4 px-6 font-medium">$40</td>
              <td className="py-4 px-6 font-medium">Cash</td>
              <td className="py-4 px-6 font-medium">Preparing</td>
              <td className="py-4 px-6 font-medium">
                <button className="bg-green-700 text-white py-2 px-4 rounded-xl border border-gray-700 hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300 ease-in">
                  Next Stage
                </button>
              </td>
            </tr>
            <tr className="border-t border-white bg-secondary font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer">
              <td className="py-4 px-6 font-medium">1320930912</td>
              <td className="py-4 px-6 font-medium">Dilara Cengiz</td>
              <td className="py-4 px-6 font-medium">$40</td>
              <td className="py-4 px-6 font-medium">Cash</td>
              <td className="py-4 px-6 font-medium">Preparing</td>
              <td className="py-4 px-6 font-medium">
                <button className="bg-green-700 text-white py-2 px-4 rounded-xl border border-gray-700 hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300 ease-in">
                  Next Stage
                </button>
              </td>
            </tr>
            <tr className="border-t border-white bg-secondary font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer">
              <td className="py-4 px-6 font-medium">1320930912</td>
              <td className="py-4 px-6 font-medium">Dilara Cengiz</td>
              <td className="py-4 px-6 font-medium">$40</td>
              <td className="py-4 px-6 font-medium">Cash</td>
              <td className="py-4 px-6 font-medium">Preparing</td>
              <td className="py-4 px-6 font-medium">
                <button className="bg-green-700 text-white py-2 px-4 rounded-xl border border-gray-700 hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300 ease-in">
                  Next Stage
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
