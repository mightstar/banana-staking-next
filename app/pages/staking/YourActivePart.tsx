"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import LogoIcon from "@/app/components/Icons/LogoIcon";
import GradientBorder from "@/app/components/GradientBorder/GradientBorder";

export default function YourActivePart() {
  const [isDropped, setDropped] = useState(false);
  return (
    <GradientBorder>
      <div className="min-w-[300px] 2xl:w-[500px] p-[20px] rounded-[15px] flex flex-col items-center font-['nasalization'] bg-black">
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
              <div className="text-white">Locking Period</div>
              <div className="text-third">6 Months</div>
            </div>
            <div className="mt-4 w-full flex justify-between text-[18px]">
              <div className="text-white">Reward Unlocks</div>
              <div className="text-third">2024-08-15 16:25 UTC</div>
            </div>
            <div className="mt-4 w-full flex justify-between text-[18px]">
              <div className="text-white">Boosted</div>
              <div className="text-third">3.3x</div>
            </div>
            <div className="btn_type_1">
              WITHDRAW
            </div>
            <div className="text-['Helvetica Neue'] text-[10px] text-secondary leading-none px-[10px] text-center">
              BANA may be unstaked at any time, but if you unstake before your
              selected time period you will forfeit all your rewards.
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
    </GradientBorder>
  );
}
