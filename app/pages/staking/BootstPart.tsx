import LogoIcon from "@/app/components/Icons/LogoIcon";
import { AiOutlineExclamationCircle } from "react-icons/ai";

interface PropsType {
  month: number;
  boost: number;
  apr: number;
}

export default function BoostPart(props: PropsType) {
  return (
    <div className="bg-light_yellow w-full space-y-1 rounded-[10px] p-[10px] text-black font-['helvetica']">
      <div className="flex justify-between">
        <div className="text-[15px]">{props.month} month</div>
        <div className="rounded-full border border-black">
          <LogoIcon size="25px" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-[20px]">
          {props.boost === 0 ? "No" : `${props.boost}x`} Boost
        </div>
        <div className="flex gap-x-1 text-[17px] items-center">
          <div>{props.apr}% APR</div>
          <AiOutlineExclamationCircle />
        </div>
      </div>
    </div>
  );
}
