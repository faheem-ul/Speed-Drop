import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import about1 from "@/public/images/abt1.png";
import about2 from "@/public/images/abt2.png";
import about3 from "@/public/images/abt3.png";
const About = () => {
  return (
    <div className="w-full h-full bg-[#F7F7F7] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text as="h1" className="font-digital_geometric mt-[35px] md:mt-[90px] mb-[22px] md:mb-[46px]">
            About Specdrop
          </Text>

          {/* 1 */}
          <div className="w-full flex md:justify-between items-center flex-wrap-reverse justify-center gap-[37px]">
            <div className="w-full max-w-[619px]">
              <Text as="h2" className="md:mb-[35px] mb-[12px] font-bold">
                Simplifying Component Sourcing For Automation
              </Text>
              <Text className="md:text-[20px] text-[14px] font-light">
                At SpecDrop, we are on a mission to simplify how professionals
                in industrial automation source reliable alternatives for
                components. In an industry where long lead times, discontinued
                parts, and incompatible specifications  can disrupt operations
                and delay critical projects, we offer a smarter, faster
                solution.
              </Text>
            </div>
            <Image src={about1} width={655} alt="image" className="image-shadow" />
          </div>

          {/* 2 */}

          <div className="w-full flex md:justify-between items-center flex-row-reverse flex-wrap-reverse justify-center gap-[37px] mt-[37px] md:mt-[82px]">
            <div className="w-full max-w-[608px]">
            <Text as="h2" className="md:mb-[35px] mb-[12px] font-bold">
                Expert-Curated Component Recommendations
              </Text>
              <Text className="md:text-[20px] text-[14px] font-light">
                SpecDrop is a platform designed to help engineers, technicians,
                and sales professionals quickly find reliable component
                recommendations. In this launch phase, {"we're"}
                working hand-in-handwith industry professionals—gathering part
                requests through our platform, manually curating tailored
                recommendations, and learning from every interaction. Backed by
                expert insights and a continuously expanding database, {"we're"}
                building a solution rooted in real-world needs.
              </Text>
            </div>
            <Image src={about2} width={655} alt="image" className="image-shadow" />
          </div>

          {/* 3 */}

          <div className="w-full flex md:justify-between items-center flex-wrap-reverse justify-center gap-[37px] mt-[37px] md:mt-[82px] mb-[42px] md:mb-[90px]">
            <div className="w-full max-w-[610px]">
            <Text as="h2" className="md:mb-[35px] mb-[12px] font-bold">
                Building an AI-Powered Platform
              </Text>
              <Text className="md:text-[20px] text-[14px] font-light">
                This collaborative, hands-on approach ensures that the platform
                we build truly serves your needs. Our vision? To evolve SpecDrop
                into an intelligent, AI-assisted tool that streamlines  part
                discovery, spec matching, and component decision-making—all in
                one place.
              </Text>
            </div>
            <Image src={about3} width={655} alt="image" className="image-shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
