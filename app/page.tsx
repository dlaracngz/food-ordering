import About from "@/components/About";
import ProductWrapper from "@/components/products/ProductWrapper";
import Reservation from "@/components/Reservation";
import Campaigns from "@/components/ui/Campaigns";
import Carousel from "@/components/ui/Carousel";
import Customers from "@/components/ui/Customers";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <ProductWrapper />
      <About />
      <Reservation />
      <Customers />
    </div>
  );
}
