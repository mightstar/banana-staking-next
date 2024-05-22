import LogoIcon from "@/app/components/Icons/LogoIcon";
import BoostPart from "./BootstPart";

export default function SectionOptionPart() {
  return (
    <div className="w-[600px] py-[20px] px-[30px] border-2 rounded-[15px] space-y-5 bg-black">
      <div className="text-[40px]">Select Your Option</div>
      <BoostPart month={1} boost={0} apr={3} />
      <BoostPart month={3} boost={2} apr={6} />
      <BoostPart month={6} boost={3.3} apr={10} />
      <div className="flex justify-between font-['nasalization'] text-[18px]">
        <div>BANA Value</div>
        <div className="font-['Chronosfer'] text-[30px] leading-none">
          Balance:0
        </div>
      </div>
      <div className="border border-secondary w-full rounded-[10px] px-[10px] py-[15px] flex justify-between items-center font-['nasalization'] ">
        <div className="text-[38px]">0.0</div>
        <LogoIcon size="40px" />
      </div>
      <div className="w-full grid grid-cols-4 space-x-3 text-[15px] font-['nasalization']">
        <div className="h-[40px] border border-secondary rounded-[12px] flex justify-center items-center">
          25%
        </div>
        <div className="h-[40px] border border-secondary rounded-[12px] flex justify-center items-center">
          50%
        </div>
        <div className="h-[40px] border border-secondary rounded-[12px] flex justify-center items-center">
          75%
        </div>
        <div className="h-[40px] border border-secondary rounded-[12px] flex justify-center items-center">
          100%
        </div>
      </div>
      <div className="w-full rounded-[10px] h-[60px] flex items-center justify-center font-['beamweapon'] text-[25px] bg-btn_normal hover:bg-btn_hover text-third cursor-pointer">
        CONNECT WALLET
      </div>
      <div className="text-['helvetica'] text-[15px] text-secondary leading-none px-[10px]">
        Your rewards will only be available once the stake period is over. BANA
        may be unstaked anytime, but you will forfeit all your accrued rewards.
      </div>
    </div>
  );
}
