"use client";

import React from "react";
import Image from "next/image";
import { CustomButton } from "./index";

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          handleClick={handleScroll}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        >
          Explore Cars
        </CustomButton>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero2.png"
            alt="hero image"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
