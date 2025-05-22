import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import plussvg from "@/public/images/+.svg";
import Button from "@/components/ui/Button";
import arrow from "@/public/images/arrow.svg";

const RequestForm = () => {
  return (
    <div className="w-full h-full px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text
            as="h1"
            className="font-digital_geometric mt-[34px] md:mt-[96px]">
            Request Form
          </Text>
          <form className="w-full">
            <Text
              as="h2"
              className="md:mt-[71px] mt-[30px] md:text-[28px] text-[16px] text-left font-semibold">
              Name:
            </Text>
            <input
              type="text"
              className="w-full  border border-b-black border-t-0 border-l-0 border-r-0 font-poppins md:mb-[56px] mb-[30px] mt-5 focus:outline-none"
            />
            <Text
              as="h2"
              className="md:text-[28px] text-[16px] text-left font-semibold">
              E-mail:
            </Text>
            <input
              type="email"
              className="w-full  border border-b-black border-t-0 border-l-0 border-r-0 font-poppins mb-[30px] md:mb-[56px] mt-5 focus:outline-none"
            />
            <Text
              as="h2"
              className="md:text-[28px] text-[16px] text-left font-semibold">
              Part Number:
            </Text>
            <input
              type="text"
              className="w-full border border-b-black border-t-0 border-l-0 border-r-0 font-poppins mb-[30px] md:mb-[56px] mt-5 focus:outline-none"
            />
            <div className="">
              <Text
                as="h2"
                className="md:text-[28px] text-[16px] text-left font-semibold">
                Brand Name
              </Text>
              <div className="w-full flex justify-between items-center gap-4 mb-[30px] md:mb-[50px] mt-5">
                <input
                  type="text"
                  className="w-full px-[23px] gap-2 max-w-full md:max-w-[1173px] h-[34px] md:h-[73px] bg-[#939598] border border-b-0 border-t-0 border-l-0 border-r-0 font-poppins focus:outline-none"
                />
                <div className="md:w-[73px] md:h-[73px] w-[40px] h-[35px] bg-[#1F75BC] rounded-full flex justify-center items-center">
                  <Image
                    src={plussvg}
                    alt="svg"
                    className="md:w-[26px] w-[12px]"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <Text
                as="h2"
                className="md:text-[28px] text-[16px] text-left font-semibold">
                Highest priority specification
              </Text>
              <div className="w-full flex justify-between gap-4 items-center mb-[30px] md:mb-[50px] mt-5">
                <input
                  type="text"
                  className="w-full px-[23px] gap-2 max-w-full md:max-w-[1173px] h-[34px] md:h-[73px] bg-[#939598] border border-b-0 border-t-0 border-l-0 border-r-0 font-poppins focus:outline-none"
                />
                <div className="md:w-[73px] md:h-[73px] w-[40px] h-[35px] bg-[#1F75BC] rounded-full flex justify-center items-center">
                  <Image
                    src={plussvg}
                    alt="svg"
                    className="md:w-[26px] w-[12px]"
                  />
                </div>
              </div>
            </div>

            <Text
              as="h2"
              className="md:text-[28px] text-[16px] text-left font-semibold">
              Notes (Optional)
            </Text>
            <textarea
              placeholder="Your message"
              className="w-full h-[171px] md:h-[294px] p-[23px] border border-black font-poppins mb-[30px] md:mb-[86px] mt-5 focus:outline-none"
            />

            <Button className="md:w-[311px] w-[200px] md:h-[87px] rounded-[50px] font-bold text-[14px] md:text-[24px] mb-[33px] md:mb-[73px] mx-auto button-shadow">
              <div className="flex gap-[27px] items-center">
                Send Request
                <div className="md:w-[33px] w-[20px] h-[20px] md:h-[33px] rounded-full bg-white">
                  <Image src={arrow} alt="arrrow " />
                </div>
              </div>
            </Button>
          </form> 
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
