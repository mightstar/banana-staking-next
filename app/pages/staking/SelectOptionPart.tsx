"use client";
import LogoIcon from "@/app/components/Icons/LogoIcon";
import BoostPart from "./BootstPart";
import GradientBorder from "@/app/components/GradientBorder/GradientBorder";
import { useState } from "react";
import { IStakeOption } from "@/app/types";

interface IProps {
  connected: boolean;
  setConnected: (value: boolean) => void;
  addStake: (value: any) => void;
}

export default function SectionOptionPart({
  connected,
  setConnected,
  addStake,
}: IProps) {
  const [percent, setPercent] = useState(0);
  const [value, setValue] = useState("0.0");
  const [select, setSelect] = useState(0);
  return (
    <GradientBorder>
      <div className="min-w-[300px] 2xl:w-[500px] py-[20px] px-[30px] rounded-[15px] space-y-5 bg-black">
        <div className="text-[40px]">Select Your Option</div>
        <BoostPart
          month={1}
          boost={0}
          apr={3}
          selected={select === 1}
          onClick={() => setSelect(1)}
        />
        <BoostPart
          month={3}
          boost={2}
          apr={6}
          selected={select === 2}
          onClick={() => setSelect(2)}
        />
        <BoostPart
          month={6}
          boost={3.3}
          apr={10}
          selected={select === 3}
          onClick={() => setSelect(3)}
        />
        <div className="flex justify-between font-['nasalization'] text-[18px]">
          <div>BANA Value</div>
          <div className="font-['Chronosfer'] text-[30px] leading-none">
            Balance:0
          </div>
        </div>
        <div className="border border-secondary w-full rounded-[10px] px-[10px] py-[15px] flex justify-between items-center font-['nasalization'] ">
          <input
            className="text-[38px] bg-transparent w-full px-[6px] outline-none"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <LogoIcon size="40px" />
        </div>
        <div className="w-full grid grid-cols-4 space-x-3 text-[15px] font-['nasalization']">
          <div
            className={`h-[40px] border ${
              percent === 1 ? "selected-item" : "select-item"
            } rounded-[12px] flex justify-center items-center cursor-pointer`}
            onClick={() => setPercent(1)}
          >
            25%
          </div>
          <div
            className={`h-[40px] border ${
              percent === 2 ? "selected-item" : "select-item"
            } rounded-[12px] flex justify-center items-center cursor-pointer`}
            onClick={() => setPercent(2)}
          >
            50%
          </div>
          <div
            className={`h-[40px] border ${
              percent === 3 ? "selected-item" : "select-item"
            } rounded-[12px] flex justify-center items-center cursor-pointer`}
            onClick={() => setPercent(3)}
          >
            75%
          </div>
          <div
            className={`h-[40px] border ${
              percent === 4 ? "selected-item" : "select-item"
            } rounded-[12px] flex justify-center items-center cursor-pointer`}
            onClick={() => setPercent(4)}
          >
            100%
          </div>
        </div>
        <div
          className="btn_type_1"
          onClick={() => {
            const data: IStakeOption = {
              totalReward: 5342,
              apr: 10,
              timeRemain: 22,
              lockPeriod: 6,
              unlock: "2024-08-15 16:25 UTC",
              boosted: 3.3,
            };
            connected ? addStake(data) : setConnected(true);
          }}
        >
          {connected ? "STAKE" : "CONNECT WALLET"}
        </div>
        <div className="text-['helvetica'] text-[15px] text-secondary leading-none px-[10px]">
          Your rewards will only be available once the stake period is over.
          BANA may be unstaked anytime, but you will forfeit all your accrued
          rewards.
        </div>
      </div>
    </GradientBorder>
  );
}
