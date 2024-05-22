"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import LogoIcon from "@/app/components/Icons/LogoIcon";

export default function YourActivePart() {
  const [isDropped, setDropped] = useState(false);
  return (
    <div className="w-[600px] p-[20px] border-2 rounded-[15px] flex flex-col items-center font-['nasalization'] bg-black">
      <div className="text-[25px]">Your Active Staked</div>
      <div className="mt-4 flex gap-x-2 text-[30px] text-third items-center leading-none">
        <div>122,367</div>
        <LogoIcon size="30px" />
        <div className="font-['BeautifulWorldNBP']">$BANA</div>
      </div>
      <div className="mt-8 w-full flex justify-between text-[18px]">
        <div className="text-white">Total BANA Rewards</div>
        <div className="text-third">5,342 BANA</div>
      </div>
      <div className="mt-4 w-full flex justify-between text-[18px]">
        <div className="text-white">APR</div>
        <div className="text-third">10%</div>
      </div>
      <div className="mt-4 w-full flex justify-between text-[18px]">
        <div className="text-white">Time Remaining</div>
        <div className="text-third">22 Days</div>
      </div>
      {isDropped && (
        <>
          <div className="mt-4 w-full flex justify-between text-[18px]">
            <div className="text-white">Time Remaining</div>
            <div className="text-third">22 Days</div>
          </div>
          <div className="mt-4 w-full flex justify-between text-[18px]">
            <div className="text-white">Time Remaining</div>
            <div className="text-third">22 Days</div>
          </div>
          <div className="mt-4 w-full flex justify-between text-[18px]">
            <div className="text-white">Time Remaining</div>
            <div className="text-third">22 Days</div>
          </div>
        </>
      )}
      <div className="text-[30px] text-third cursor-pointer">
        {isDropped ? (
          <FaChevronUp onClick={() => setDropped(!isDropped)} />
        ) : (
          <FaChevronDown onClick={() => setDropped(!isDropped)} />
        )}
      </div>
    </div>
  );
}