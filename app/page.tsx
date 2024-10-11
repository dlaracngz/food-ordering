import About from "@/components/About";
import ProductWrapper from "@/components/products/ProductWrapper";
import Reservation from "@/components/Reservation";
import Campaigns from "@/components/ui/Campaigns";
import Carousel from "@/components/ui/Carousel";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <ProductWrapper />
      <About />
      <Reservation />
    </div>
  );
}
