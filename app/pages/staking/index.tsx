import LogoIcon from "@/app/components/Icons/LogoIcon";
import SelectOptionPart from "./SelectOptionPart";
import TotalActivePart from "./TotalActivePart";
import YourActivePart from "./YourActivePart";
import GradientBorder from "@/app/components/GradientBorder/GradientBorder";

export default function StakingPage() {
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
          <div className="text-[90px] text-white leading-none">
            Staking Portal
          </div>
        </div>

        <div className="flex justify-around p-10 gap-x-5 max-2xl:flex-col max-2xl:gap-y-20">
          <SelectOptionPart />
          <div className="space-y-20">
            <TotalActivePart />
            <YourActivePart />
          </div>
        </div>
      </div>
    </GradientBorder>
  );
}
