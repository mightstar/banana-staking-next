import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export default function GradientBorder(props: IProps) {
  return (
    <div
      className={`bg-gradient-to-r from-gray-500 to-white p-1 rounded-[20px] ${props.className}`}
    >
      <div className="h-full w-full items-center justify-center bg-primary rounded-[20px]">
        {props.children}
      </div>
    </div>
  );
}
