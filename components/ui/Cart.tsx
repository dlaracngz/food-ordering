import Image from "next/image";
import image from "@/public/image1.png";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh_-_483px)] h-full">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 min-h-[calc(100vh_-_483px)] px-2 py-6 md:py-0">
        <div className="flex-1 mx-2 md:mx-10 overflow-x-auto sidebarScrollbar">
          <table className="w-full text-sm text-center text-gray-400 min-w-[1000px]">
            <thead className="text-xs uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  PRODUCT
                </th>
                <th scope="col" className="py-3 px-6">
                  EXTRAS
                </th>
                <th scope="col" className="py-3 px-6">
                  PRICE
                </th>
                <th scope="col" className="py-3 px-6">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white bg-secondary font-medium transition-all duration-300 ease-in hover:bg-primary hover:text-white cursor-pointer">
                <td className="py-4 px-6 font-medium whitespace-nowrap flex items-center justify-center gap-2 ">
                  <Image src={image} alt="" height={50} width={50} />
                  <span>Good Pizza</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap ">
                  ketçap,mayonez,acı sos
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap">$20</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap">1</td>
              </tr>
              <tr className="border-t border-white bg-secondary font-medium transition-all duration-300 ease-in hover:bg-primary hover:text-white cursor-pointer">
                <td className="py-4 px-6 font-medium whitespace-nowrap flex items-center justify-center gap-2 ">
                  <Image src={image} alt="" height={50} width={50} />
                  <span>Good Pizza</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap ">
                  ketçap,mayonez,acı sos
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap">$20</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_483px)] flex flex-col items-center justify-center text-white px-10 border-8 rounded-2xl border-primary w-full md:w-auto my-2">
          <h1 className="font-dancing font-bold text-[42px]">Cart Total</h1>
          <div className="flex flex-col items-start w-full gap-1 my-4">
            <span className="font-bold">Subtotal: $20</span>
            <span className="font-bold">Discount: $0.00</span>
            <span className="font-bold">Total: $20</span>
          </div>
          <button className="btn font-semibold">Checkout Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
