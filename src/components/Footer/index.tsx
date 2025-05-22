import React from "react";
import Image from "next/image";

import Text from "../ui/Text";

import logo from "@/public/images/footerlogo.svg";
import x from "@/public/images/twitter.svg";
import insta from "@/public/images/instagram.svg";
import fb from "@/public/images/facebook-f.svg";
import phone from "@/public/images/phone.svg";
import mail from "@/public/images/mail.svg";
const Footer = () => {
  return (
    <div className="bg-[#1F75BC] min-h-[270px] md:block hidden">
        <div className="w-full h-full flex justify-center">
      <div className="w-full h-full max-w-[1313px]">
        <div className="flex justify-between w-full h-full min-h-[190px] flex-wrap ">
          <div className="flex justify-center items-center">
            <Image src={logo} alt="logo" className="" />
          </div>
          <div className="w-full max-w-[400px] flex justify-center items-center border-l border-r border-black">
            <div>
              <Text className="mb-[19px] text-[18px] font-bold text-white">
                Social Media Links
              </Text>
              <div className="flex gap-6">
                <Image src={x} alt="social icon" />
                <Image src={insta} alt="social icon" />
                <Image src={fb} alt="social icon" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <Text className="mb-[19px] text-[18px] font-bold text-white">
              Contact
            </Text>

            <div className="flex gap-[38px]">
              <div className="flex gap-3">
                <Image src={phone} alt="social icon" />
                <Text className="text-white text-[14px]">
                  Tel.: +123-45678910
                </Text>
              </div>
              <div className="flex gap-3">
                <Image src={mail} alt="social icon" />
                <Text className="text-white text-[14px]">
                  specdrop@gmail.com
                </Text>
              </div>
            </div>
          </div>
        </div>
       
     
      </div>
    </div>
    <div className="w-full border-b border-black"></div>
    <Text className="md:text-center text-[16px] font-medium text-white mt-[25px] md:mb-0 pb-[21px]">
          © 2025 SpecDrop. All Rights Reserved
        </Text>
    </div>
  );
};

export default Footer;
