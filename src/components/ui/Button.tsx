import React from "react";

import { cn } from "@/lib/utils";
interface ButtonProps {
  text?: string;
  children?: React.ReactNode; // Add children prop
  className?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text = "Explore Music",
  children,
  className,
  type = "button",
  loading = false,
  // disabled,
  onClick,
}) => {
  return (
    <>
      <button
        type={type}
        disabled={loading}
        onClick={onClick}
        className={cn(
          "w-full flex justify-center cursor-pointer font-poppins items-center bg-[#1F75BC] h-[62px] text-[16px] font-normal leading-[23.08px] text-white hover:opacity-85 transition duration-500 ease-in-out",
          className
        )}
      >
        {children || text} {/* Use children if available, otherwise use text */}
      </button>
    </>
  );
};

export default Button;
