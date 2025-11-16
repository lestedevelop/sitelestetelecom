'use-client'
import React from "react";
import { twMerge } from "tailwind-merge";

export default function ActionCard({ icon, text,textStyle,className}) {
  return (
    <div  className={twMerge(
       
        "flex md:flex-col p-6 rounded-xl transition cursor-pointer md:w-40 w-full items-center gap-4",
        className
      )}>
      <div className="text-green-700 text-5xl mb-3">
        {icon}
      </div>

      <p
        style={textStyle}
        className="text-[#045441] font-semibold text-md w-42  md:w-auto md:whitespace-normal"
      >
        {text}
      </p>
    </div>
  );
}
