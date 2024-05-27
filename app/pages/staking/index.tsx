"use client";
import LogoIcon from "@/app/components/Icons/LogoIcon";
import SelectOptionPart from "./SelectOptionPart";
import TotalActivePart from "./TotalActivePart";
import YourActivePart from "./YourActivePart";
import GradientBorder from "@/app/components/GradientBorder/GradientBorder";
import { useState } from "react";

export default function StakingPage() {
  const [connected, setConnected] = useState(false);
  const [stakes, setStakes] = useState<any[]>([]);

  const addStake = (value: any) => {
    setStakes([...stakes, value]);
  };
  return (
    <GradientBorder className="mx-[120px] my-[80px]">
      <div className="relative p-[20px] font-['Chronosfer'] max-2xl:items-center">
        <div className="absolute inset-0 opacity-[20%] z-[-1]"></div>
        <div className="flex gap-x-5 items-end max-2xl:justify-center">
          <div className="rounded-full bg-gradient-to-r from-gray-500 to-white p-1">
            <div className="h-full w-full items-center justify-center bg-primary rounded-full">
              {/* <div className="rounded-full border-[3px] border-white"> */}
              <LogoIcon size="80px" />
              {/* </div> */}
            </div>
          </div>
          <div className="text-[90px] leading-none bg-gradient-to-r from-gray-500 to-white inline-block text-transparent bg-clip-text">
            Staking Portal
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 justify-between p-10 gap-x-5 max-2xl:grid-cols-1 max-2xl:gap-y-20">
            <SelectOptionPart
              connected={connected}
              setConnected={setConnected}
              addStake={addStake}
            />
            <div className="space-y-20">
              <TotalActivePart />
              {stakes.length > 0 &&
                (stakes.length === 1 ? (
                  <YourActivePart />
                ) : (
                  <GradientBorder>
                    <div className="min-w-[300px] 2xl:w-[500px] p-[30px] rounded-[15px] flex flex-col items-center font-['nasalization'] bg-black">
                      <div className="text-[25px]">Your Total Active Staked</div>
                      <div className="mt-4 flex gap-x-2 text-[30px] text-third items-center leading-none">
                        <div>47,989,122</div>
                        <LogoIcon size="30px" />
                        <div className="font-['BeautifulWorldNBP']">$BANA</div>
                      </div>
                    </div>
                  </GradientBorder>
                ))}
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between p-10 gap-5 max-2xl:grid-cols-1 max-2xl:gap-y-20">
            {stakes.length > 1 &&
              stakes.map((stake, idx) => <YourActivePart key={idx} />)}
          </div>
        </div>
      </div>
    </GradientBorder>
  );
}
