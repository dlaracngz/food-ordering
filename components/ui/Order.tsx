import Image from "next/image";
import payment from "@/public/images/payment.png";
import preparing from "@/public/images/preparing.png";
import bike from "@/public/images/onTheWay.png";
import delivered from "@/public/images/delivered.png";

const Order = () => {
  return (
    <div className="min-h-[calc(100vh_-_467px)] h-full">
      <div className="flex flex-col justify-center min-h-[calc(100vh_-_467px)] gap-6 px-10 py-20 w-full">
        <div className="overflow-x-auto sidebarScrollbar">
          <table className="text-sm w-full text-center min-w-[100px] text-gray-400">
            <thead className="text-xs bg-gray-700 uppercase">
              <tr>
                <th className="py-3 px-6">ORDER ID</th>
                <th className="py-3 px-6">CUSTOMER</th>
                <th className="py-3 px-6">ADDRESS</th>
                <th className="py-3 px-6">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary border-t font-medium border-white hover:bg-primary hover:text-white transition-all duration-300 ease-in cursor-pointer">
                <td className="py-4 px-6">8743029735</td>
                <td className="py-4 px-6">Dilara Cengiz</td>
                <td className="py-4 px-6">İstanbul</td>
                <td className="py-4 px-6">$30</td>
              </tr>
              <tr className="bg-secondary border-t font-medium border-white hover:bg-primary hover:text-white transition-all duration-300 ease-in cursor-pointer">
                <td className="py-4 px-6">8743029735</td>
                <td className="py-4 px-6">Dilara Cengiz</td>
                <td className="py-4 px-6">İstanbul</td>
                <td className="py-4 px-6">$30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="self-center bg-primary flex flex-col sm:flex-row gap-y-8 sm:justify-between items-center py-8 px-12 rounded-xl sm:w-full w-max">
          <div className="flex flex-col gap-y-2 items-center">
            <Image src={payment} alt="" width={40} height={40} />
            <h4 className="text-[16px]">Payment</h4>
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <Image src={preparing} alt="" width={40} height={40} />
            <h4 className="text-[16px]">Preparing</h4>
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <Image src={bike} alt="" width={40} height={40} />
            <h4 className="text-[16px]">On the way</h4>
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <Image src={delivered} alt="" width={40} height={40} />
            <h4 className="text-[16px]">Delivered</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
