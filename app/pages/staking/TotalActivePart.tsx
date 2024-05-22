import LogoIcon from "@/app/components/Icons/LogoIcon";

export default function TotalActivePart() {
  return (
    <div className="w-[600px] p-[30px] border-2 rounded-[15px] flex flex-col items-center font-['nasalization'] bg-black">
      <div className="text-[25px]">Total Active Staked</div>
      <div className="mt-4 flex gap-x-2 text-[30px] text-third items-center leading-none">
        <div>47,989,122</div>
        <LogoIcon size="30px" />
        <div className="font-['BeautifulWorldNBP']">$BANA</div>
      </div>
      <div className="mt-8 w-full flex justify-between text-[18px]">
        <div className="text-white">Daily BANA Rewards</div>
        <div className="text-third">83,563,45 BANA</div>
      </div>
      <div className="mt-4 w-full flex justify-between text-[18px]">
        <div className="text-white">Staked Circulating Supply</div>
        <div className="text-third">26.32%</div>
      </div>
      <div className="mt-4 w-full flex justify-between text-[18px]">
        <div className="text-white">Unique Stakers</div>
        <div className="text-third">4,474</div>
      </div>
    </div>
  );
}
