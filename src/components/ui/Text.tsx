import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

type ComponentAs = "h1" | "h2";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: ComponentAs;
  onClick?: React.MouseEventHandler<HTMLHeadingElement>;
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onClick } = props;

    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "font-poppins md:text-[45px] font-bold leading-[60px] text-[20px] mob:leading-[27px] text-center md:text-left",
            className
          )}
          onClick={onClick}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-mono md:text-[30px] font-semibold md:leading-[47px] text-[18px] leading-[27px] md:text-left text-center",
            className
          )}
          onClick={onClick}
        >
          {children}
        </h2>
      );
    }

    return (
      <p
        ref={ref}
        className={cn(
          "font-poppins text-[20px] font-normal text-primary md:text-left text-center",
          className
        )}
        onClick={onClick}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
