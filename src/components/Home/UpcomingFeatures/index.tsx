import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import up1 from "@/public/images/upcoming1.png";
import up2 from "@/public/images/upcoming2.png";
import up3 from "@/public/images/upcoming3.png";
import up4 from "@/public/images/upcoming4.png";
import up5 from "@/public/images/upcoming5.png";
import up6 from "@/public/images/upcoming6.png";
const Upcoming = () => {
  return (
    <div className="w-full h-full px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text as="h1" className="font-digital_geometric md:my-[62px] mt-[23px] mb-[50px]">
            Upcoming Features
          </Text>
          <div className="flex flex-wrap justify-center items-center gap-x-[12px] md:gap-y-[43px] gap-y-[34px] mb-[35px] md:mb-[124px]">
            {/* 1 */}
            <div className="w-full max-w-[420px]">
              <Image
                src={up1}
                alt="image"
                width={430}
                className="upcoming-shadow"
              />
              <Text as="h2" className="md:text-[24px] text-[18px] md:text-center md:mt-[43px] mt-[34px]">
                CAD model Download
              </Text>
            </div>
            {/* 2 */}
            <div className="w-full max-w-[420px]">
              <Image
                src={up2}
                alt="image"
                width={430}
                className="upcoming-shadow"
              />
              <Text as="h2" className="md:text-[24px] text-[18px] md:text-center md:mt-[43px] mt-[34px]">
                Parts search engine
              </Text>
            </div>
            {/* 3 */}
            <div className="w-full max-w-[420px]">
              <Image
                src={up3}
                alt="image"
                width={430}
                className="upcoming-shadow"
              />
              <Text as="h2" className="md:text-[24px] text-[18px] md:text-center md:mt-[43px] mt-[34px]">
                Built in Filters
              </Text>
            </div>

            {/* 4 */}
            <div className="w-full max-w-[420px]">
              <Image
                src={up4}
                alt="image"
                width={430}
                className="upcoming-shadow"
              />
              <Text as="h2" className="md:text-[24px] text-[18px] md:text-center md:mt-[43px] mt-[34px]">
                Software and License Needed
              </Text>
            </div>

            {/* 5 */}
            <div className="w-full max-w-[420px]">
              <Image
                src={up5}
                alt="image"
                width={430}
                className="upcoming-shadow"
              />
              <Text as="h2" className="md:text-[24px] text-[18px] md:text-center md:mt-[43px] mt-[34px]">
                Specs comparison table
              </Text>
            </div>

            {/* 6 */}
            <div className="w-full max-w-[420px]">
              <Image
                src={up6}
                alt="image"
                width={430}
                className="upcoming-shadow"
              />
              <Text as="h2" className="md:text-[24px] text-[18px] md:text-center md:mt-[43px] mt-[34px]">
                Where to buy
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
