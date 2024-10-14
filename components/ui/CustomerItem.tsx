import Image from "next/image";
import cust2 from "@/public/cust2.jpg";

const CustomerItem = () => {
  return (
    <div>
      <div className="bg-secondary rounded-xl p-6">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero magni
          alias quaerat eligendi quos quidem hic at dolores maiores aperiam,
          corporis quis dolore similique aut.
        </p>
        <h6 className="font-bold mt-5 mb-1">Moana Michell</h6>
        <p>magna aliqua</p>
      </div>
      <Image
        src={cust2}
        alt=""
        width={100}
        height={100}
        className="mt-6 rounded-full border-4 border-primary"
      />
    </div>
  );
};

export default CustomerItem;
