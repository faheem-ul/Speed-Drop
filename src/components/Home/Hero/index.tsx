import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import heroimage from "@/public/images/hero-image.png";
import logo from "@/public/images/logo.svg";

const Hero = () => {
  return (
    <div className="relative w-full h-[293px] md:h-[100vh] overflow-hidden px-5">
      {/* Background image */}
      <Image
        src={heroimage}
        alt="hero image"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-start pt-[38px] md:pt-[83px] max-w-[1313px] mx-auto">
        {/* Logo container */}
        <div className="md:w-[305px] w-[100px] h-[32px] md:h-[95px] bg-white rounded-[6px] md:rounded-[15px] flex justify-center items-center">
          <Image src={logo} alt="logo" className="md:w-[236px] w-[76px]" />
        </div>

        {/* Heading */}
        <div className="h-full w-full flex justify-center items-center flex-col">
        <Text
          as="h1"
          className="text-white md:text-center mx-auto mb-[36px]"
        >
          Fast, Expert-Curated Replacement Parts <br className="hidden md:block" />
          For Automation Professionals
        </Text>

        {/* CTA Button */}
        <Link href="/#form">
        <Button className="rounded-[30px] w-[86px] md:w-[200px] mx-auto h-[28px] md:h-[61px] font-bold text-[8px] md:text-[18px]">
          Submit Request
        </Button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
