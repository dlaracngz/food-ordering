import React from "react";
import Image from "next/image";
import image from "@/public/about-img.png";

const About = () => {
  return (
    <div className="bg-secondary py-16 text-white">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4 lg:gap-0">
          <div className="order-2 sm:order-1">
            <Image
              src={image}
              className="max-w-[445px] w-full"
              alt="hamburger-image"
            />
          </div>
          <div className="my-5 max-w-[600px] w-full order-1 sm:order-2">
            <h2 className="font-dancing font-bold text-[32px]">We Are Feane</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isnt anything embarrassing hidden in the
              middle of text. All
            </p>
            <button className="btn my-5">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
