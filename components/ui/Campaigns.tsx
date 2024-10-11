import CampaignItem from "./CampaignItem";
import hamburgerPicture from "@/public/hamburger1.jpg";
import pizzaPicture from "@/public/pizza1.jpg";

const Campaigns = () => {
  const campaigns = [
    {
      title: "Tasty Thursdays",
      discount: "20",
      imageSrc: hamburgerPicture.src,
    },
    { title: "Pizza Days", discount: "15", imageSrc: pizzaPicture.src },
  ];
  return (
    <div className="container mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 gap-6 my-[70px] text-white">
      {campaigns.map((campaign, index) => (
        <CampaignItem
          key={index}
          title={campaign.title}
          discount={campaign.discount}
          imageSrc={campaign.imageSrc}
        />
      ))}
    </div>
  );
};

export default Campaigns;
