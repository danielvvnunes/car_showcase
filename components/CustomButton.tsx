"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  children,
  containerStyles,
  textStyles,
  rightIcon,
  isDisabled,
  type,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={type}
      onClick={() => {}}
    >
      <span onClick={handleClick} className={`flex-1 ${textStyles}`}>
        {children}
      </span>

      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
