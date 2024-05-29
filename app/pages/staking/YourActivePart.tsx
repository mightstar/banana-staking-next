"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import LogoIcon from "@/app/components/Icons/LogoIcon";
import GradientBorder from "@/app/components/GradientBorder/GradientBorder";
import { IStakeOption } from "@/app/types";

interface IProps {
  data: IStakeOption;
}

export default function YourActivePart({data}: IProps) {
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
          <div className="text-third">{data.totalReward} BANA</div>
        </div>
        <div className="mt-4 w-full flex justify-between text-[18px]">
          <div className="text-white">APR</div>
          <div className="text-third">{data.apr}%</div>
        </div>
        <div className="mt-4 w-full flex justify-between text-[18px]">
          <div className="text-white">Time Remaining</div>
          <div className="text-third">{data.timeRemain} Days</div>
        </div>
        {isDropped && (
          <>
            <div className="mt-4 w-full flex justify-between text-[18px]">
              <div className="text-white">Locking Period</div>
              <div className="text-third">{data.lockPeriod} Months</div>
            </div>
            <div className="mt-4 w-full flex justify-between text-[18px]">
              <div className="text-white">Reward Unlocks</div>
              <div className="text-third">{data.unlock}</div>
            </div>
            <div className="mt-4 w-full flex justify-between text-[18px]">
              <div className="text-white">Boosted</div>
              <div className="text-third">{data.boosted}x</div>
            </div>
            <div className="btn_type_1">
              WITHDRAW
            </div>
            <div className="text-['helvetica'] text-[10px] text-secondary leading-none px-[10px] text-center">
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
