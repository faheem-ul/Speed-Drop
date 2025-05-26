import React from "react";
import Image from "next/image";

import logo from "@/public/images/footerlogo.svg";
// import x from "@/public/images/twitter.svg";
// import insta from "@/public/images/instagram.svg";
// import fb from "@/public/images/facebook-f.svg";
import phone from "@/public/images/phone.svg";
import mail from "@/public/images/mail.svg";

import Text from "../ui/Text";

const MobileFooter = () => {
  return (
    <div className=" bg-[#1F75BC] block md:hidden">
      <div className="flex border-b border-black h-[125px] items-center justify-start px-5">
        {/* <div className="border-r border-black">
          <Text className="mb-[19px] text-[18px] font-bold text-white mt-[42px]">
            Social Media Links
          </Text>

          <div className="flex gap-6">
            <Image src={x} alt="social icon" />
            <Image src={insta} alt="social icon" />
            <Image src={fb} alt="social icon" />
          </div>
        </div> */}
        <div>
          <Image src={logo} alt="logo" width={230} className="w-[230px]" />
        </div>
      </div>
      <div className="border-b border-black py-4">
        <Text className="mb-[19px] px-5 text-[18px] font-bold text-white text-left">
          Contact
        </Text>

        <div className="flex gap-[20px] flex-wrap items-center px-5">
          <div className="flex gap-3">
            <a href="tel:+1 937 414 3194" className="flex gap-3">
              <Image src={phone} alt="social icon" />
              <Text className="text-white text-[14px]">
                Tel.: +1 937 414 3194
              </Text>
            </a>
          </div>
          <div className="flex gap-3">
            <a href="mailto:info@specdrop.com" className="flex gap-3">
              <Image src={mail} alt="social icon" />
              <Text className="text-white text-[14px]">info@specdrop.com</Text>
            </a>
          </div>
        </div>
      </div>

      <Text className="text-center text-[16px] text-white mt-[18px] md:mb-0 pb-[18px]">
        © 2025 SpecDrop. All Rights Reserved
      </Text>
    </div>
  );
};

export default MobileFooter;
