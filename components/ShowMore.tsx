"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { showMoreProps } from "@/types";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext }: showMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const searchParams = new URLSearchParams(window.location.search);

    const newLimit = (pageNumber + 1) * 10;
    searchParams.set("limit", newLimit.toString());

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          type="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        >
          Show More
        </CustomButton>
      )}
    </div>
  );
};

export default ShowMore;
