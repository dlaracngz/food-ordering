import Image from "next/image";
import product1 from "@/public/pizzza2.png";
import product2 from "@/public/hamburger2.png";

const Products = () => {
  return (
    <div>
      <h1 className="font-dancing font-bold text-[45px] mb-2">Products</h1>
      <div className="overflow-auto max-h-[350px] sidebarScrollbar rounded-xl">
        <table className="w-full text-sm text-center text-gray-400 min-w-[600px]">
          <thead className="text-xs bg-gray-700 uppercase sticky top-0 z-10">
            <tr>
              <th scope="col" className="py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                TITLE
              </th>
              <th scope="col" className="py-3 px-6">
                PRICE
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-white bg-secondary font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer">
              <td className="py-4 px-6 h-20 w-24">
                <Image src={product1} alt="" objectFit="contain" />
              </td>
              <td className="py-4 px-6 font-medium">1331203120</td>
              <td className="py-4 px-6 font-medium">Good Pizza</td>
              <td className="py-4 px-6 font-medium">$40</td>
              <td className="py-4 px-6 font-medium">
                <button className="bg-red-600 text-white py-2 px-4 rounded-xl border border-red-600 hover:bg-white hover:text-red-600 transition-all duration-300 ease-in">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="border-t border-white bg-secondary font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer">
              <td className="py-4 px-6 h-20 w-24">
                <Image src={product2} alt="" objectFit="cover" />
              </td>
              <td className="py-4 px-6 font-medium">1331203120</td>
              <td className="py-4 px-6 font-medium">Good Hamburger</td>
              <td className="py-4 px-6 font-medium">$40</td>
              <td className="py-4 px-6 font-medium">
                <button className="bg-red-600 text-white py-2 px-4 rounded-xl border border-red-600 hover:bg-white hover:text-red-600 transition-all duration-300 ease-in">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="border-t border-white bg-secondary font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer">
              <td className="py-4 px-6 h-20 w-24">
                <Image src={product1} alt="" objectFit="contain" />
              </td>
              <td className="py-4 px-6 font-medium">1331203120</td>
              <td className="py-4 px-6 font-medium">Good Pizza</td>
              <td className="py-4 px-6 font-medium">$40</td>
              <td className="py-4 px-6 font-medium">
                <button className="bg-red-600 text-white py-2 px-4 rounded-xl border border-red-600 hover:bg-white hover:text-red-600 transition-all duration-300 ease-in">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="border-t border-white bg-secondary font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer">
              <td className="py-4 px-6 h-20 w-24">
                <Image src={product2} alt="" objectFit="cover" />
              </td>
              <td className="py-4 px-6 font-medium">1331203120</td>
              <td className="py-4 px-6 font-medium">Good Hamburger</td>
              <td className="py-4 px-6 font-medium">$40</td>
              <td className="py-4 px-6 font-medium">
                <button className="bg-red-600 text-white py-2 px-4 rounded-xl border border-red-600 hover:bg-white hover:text-red-600 transition-all duration-300 ease-in">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="border-t border-white bg-secondary font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer">
              <td className="py-4 px-6 h-20 w-24">
                <Image src={product1} alt="" objectFit="contain" />
              </td>
              <td className="py-4 px-6 font-medium">1331203120</td>
              <td className="py-4 px-6 font-medium">Good Pizza</td>
              <td className="py-4 px-6 font-medium">$40</td>
              <td className="py-4 px-6 font-medium">
                <button className="bg-red-600 text-white py-2 px-4 rounded-xl border border-red-600 hover:bg-white hover:text-red-600 transition-all duration-300 ease-in">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
