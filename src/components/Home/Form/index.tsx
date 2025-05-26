"use client";
import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import plussvg from "@/public/images/+.svg";
import arrow from "@/public/images/arrow.svg";
import cross from "@/public/images/x.svg";

const RequestForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [partNumber, setPartNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [brandNames, setBrandNames] = useState([""]);
  const [specs, setSpecs] = useState([""]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleAddField = (type: "brand" | "spec") => {
    if (type === "brand" && brandNames.length < 3) {
      setBrandNames([...brandNames, ""]);
    }
    if (type === "spec" && specs.length < 3) {
      setSpecs([...specs, ""]);
    }
  };

  const handleRemoveField = (type: "brand" | "spec", index: number) => {
    if (type === "brand") {
      const updated = brandNames.filter((_, i) => i !== index);
      setBrandNames(updated);
    } else {
      const updated = specs.filter((_, i) => i !== index);
      setSpecs(updated);
    }
  };

  const handleChange = (
    type: "brand" | "spec",
    index: number,
    value: string
  ) => {
    if (type === "brand") {
      const updated = [...brandNames];
      updated[index] = value;
      setBrandNames(updated);
    } else {
      const updated = [...specs];
      updated[index] = value;
      setSpecs(updated);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          partNumber,
          brandNames,
          specs,
          notes,
        }),
      });

      if (response.ok) {
        // setResponseMessage("Thank you for your submission!");
        alert("Your Message has been sent!");
        // Optional: reset form
        setName("");
        setEmail("");
        setPartNumber("");
        setNotes("");
        setBrandNames([""]);
        setSpecs([""]);
      } else {
        setResponseMessage("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setResponseMessage("");
      }, 60000);
    }
  };

  return (
    <div className="w-full h-full px-5" id="form">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text
            as="h1"
            className="font-digital_geometric mt-[34px] md:mt-[96px]">
            Request Form
          </Text>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex justify-center md:flex-row  flex-col gap-6 md:mt-[71px]">
              {/* Name */}
              <div className="w-full">
                <Text
                  as="h2"
                  className="md:text-[28px] text-[16px] text-left font-semibold">
                  Name:
                </Text>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-b-black border-t-0 border-l-0 border-r-0 font-poppins mb-[30px] mt-5 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="w-full">
                <Text
                  as="h2"
                  className="md:text-[28px] text-[16px] text-left font-semibold">
                  E-mail:
                </Text>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-b-black border-t-0 border-l-0 border-r-0 font-poppins mb-[30px] mt-5 focus:outline-none"
                />
              </div>
              {/* Part Number */}
              <div className="w-full">
                <Text
                  as="h2"
                  className="md:text-[28px]  text-[16px] text-left font-semibold">
                  Part Number:
                </Text>
                <input
                  type="text"
                  required
                  value={partNumber}
                  onChange={(e) => setPartNumber(e.target.value)}
                  className="w-full border border-b-black border-t-0 uppercase border-l-0 border-r-0 font-poppins mb-[30px]  mt-5 focus:outline-none"
                />
              </div>
            </div>
            {/* Brand Names */}
            <div>
              <Text
                as="h2"
                className="md:text-[28px] text-[16px] text-left capitalize font-semibold">
                Brand Name: <span className="text-[18px] text-[#1F75BC]">(max. 3)</span>
              </Text>
              {brandNames.map((val, i) => (
                <div
                  className="w-full flex justify-between items-center gap-4 mb-[30px] md:mb-[50px] mt-5"
                  key={`brand-${i}`}>
                  <input
                    type="text"
                    required
                    value={val}
                    onChange={(e) => handleChange("brand", i, e.target.value)}
                    className="w-full px-[23px] max-w-full md:max-w-[1173px] h-[34px] rounded-[15px] md:h-[73px] bg-[#000000]/8 border border-b-0 border-t-0 border-l-0 border-r-0 font-poppins focus:outline-none"
                  />
                  {brandNames.length < 3 && i === brandNames.length - 1 ? (
                    <div
                      onClick={() => handleAddField("brand")}
                      className="md:w-[73px] md:h-[73px] w-[40px] h-[35px] bg-[#1F75BC] rounded-full flex justify-center items-center cursor-pointer">
                      <Image
                        src={plussvg}
                        alt="plus"
                        className="md:w-[26px] w-[12px]"
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => handleRemoveField("brand", i)}
                      className="md:w-[73px] md:h-[73px] w-[35px] h-[35px] bg-[#BC1F1F] rounded-full flex justify-center items-center cursor-pointer">
                      <Image
                        src={cross}
                        alt="remove"
                        className="md:w-[20px] w-[12px]"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Specs */}
            <div>
              <Text
                as="h2"
                className="md:text-[28px] text-[16px] text-left font-semibold capitalize">
                Highest Priority Specs.: <span className="text-[18px] text-[#1F75BC]">(max. 3)</span>
              </Text>
              {specs.map((val, i) => (
                <div
                  className="w-full flex justify-between gap-4 items-center mb-[30px] md:mb-[50px] mt-5"
                  key={`spec-${i}`}>
                  <input
                    type="text"
                    required
                    value={val}
                    onChange={(e) => handleChange("spec", i, e.target.value)}
                    className="w-full px-[23px] max-w-full md:max-w-[1173px] h-[34px] md:h-[73px] rounded-[15px] bg-[#000000]/8  font-poppins focus:outline-none"
                  />
                  {specs.length < 3 && i === specs.length - 1 ? (
                    <div
                      onClick={() => handleAddField("spec")}
                      className="md:w-[73px] md:h-[73px] w-[40px] h-[35px] bg-[#1F75BC] rounded-full flex justify-center items-center cursor-pointer">
                      <Image
                        src={plussvg}
                        alt="plus"
                        className="md:w-[26px] w-[12px]"
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => handleRemoveField("spec", i)}
                      className="md:w-[73px] md:h-[73px] w-[35px] h-[35px] bg-[#BC1F1F] rounded-full flex justify-center items-center cursor-pointer">
                      <Image
                        src={cross}
                        alt="remove"
                        className="md:w-[20px] w-[12px]"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Notes */}
            <Text
              as="h2"
              className="md:text-[28px] text-[16px] text-left font-semibold">
              Notes: <span className="text-[18px] text-[#1F75BC]">(Optional)</span>
            </Text>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Your message"
              className="w-full h-[171px] md:h-[294px] p-[23px] border border-black font-poppins rounded-[15px] mb-[30px] md:mb-[86px] mt-5 focus:outline-none"
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`md:w-[311px] w-[200px] cursor-pointer md:h-[87px] rounded-[50px] font-bold text-[14px] md:text-[24px] mb-[33px] md:mb-[73px] mx-auto button-shadow ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}>
              <div className="flex gap-[27px] items-center justify-center">
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    Send Request
                    <div className="md:w-[33px] w-[20px] h-[20px] md:h-[33px] rounded-full bg-white">
                      <Image src={arrow} alt="arrow" />
                    </div>
                  </>
                )}
              </div>
            </Button>

            {responseMessage && (
              <Text className="text-center mb-4 font-semibold">
                {responseMessage}
              </Text>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
