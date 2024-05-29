"use client";
import LogoIcon from "@/app/components/Icons/LogoIcon";
import { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

interface PropsType {
  month: number;
  boost: number;
  apr: number;
  selected?: boolean;
  onClick?: () => void;
}

export default function BoostPart(props: PropsType) {
  return (
    <div
      className={`${
        props?.selected ? "selected-item" : "select-item"
      } w-full space-y-1 rounded-[10px] p-[10px] font-['helvetica'] cursor-pointer`}
      onClick={() => props.onClick && props.onClick()}
    >
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
