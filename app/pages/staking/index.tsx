import LogoIcon from "@/app/components/Icons/LogoIcon";
import SelectOptionPart from "./SelectOptionPart";
import TotalActivePart from "./TotalActivePart";
import YourActivePart from "./YourActivePart";

export default function StakingPage() {
  return (
    <div className="relative mx-[120px] my-[80px] border-4 rounded-[20px] border-white p-[20px] font-['Chronosfer'] max-2xl:flex max-2xl:items-center">
      <div className="absolute inset-0 opacity-[20%] z-[-1]"></div>
      <div className="flex gap-x-5 items-end">
        <div className="rounded-full border-[3px] border-white">
          <LogoIcon size="80px" />
        </div>
        <div className="text-[90px] text-white leading-none">
          Staking Portal
        </div>
      </div>
      <div className="m-[10px] flex justify-around p-10 max-2xl:flex-col max-2xl:gap-y-20">
        <SelectOptionPart />
        <div className="space-y-20">
          <TotalActivePart />
          <YourActivePart />
        </div>
      </div>
    </div>
  );
}
