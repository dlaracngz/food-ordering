import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

interface CampaignItemProps {
  title: string;
  discount: string;
  imageSrc: string;
}

const CampaignItem: React.FC<CampaignItemProps> = ({
  title,
  discount,
  imageSrc,
}) => {
  return (
    <div className="bg-secondary p-6 rounded-[10px] flex flex-wrap justify-center sm:justify-start gap-4 cursor-pointer">
      <Image
        src={imageSrc}
        alt=""
        width={170}
        height={170}
        objectFit="cover"
        className="rounded-full border-4 border-primary"
      />
      <div className="flex flex-col items-center sm:items-start justify-center">
        <h5 className="font-dancing text-[24px] font-semibold">{title}</h5>
        <h6 className="font-dancing my-[2px]">
          <span className="text-[2.5rem] mr-1 font-bold">{discount}%</span>Off
        </h6>
        <button className="btn flex items-center gap-2">
          Order Now
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default CampaignItem;
