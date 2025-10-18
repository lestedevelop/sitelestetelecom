'use-client'
import React from "react";
import { twMerge } from "tailwind-merge";

export default function ActionCard({ icon, text,textStyle,className}) {
  return (
    <div className={twMerge("md:flex md:flex-col flex  p-6 rounded-xl transition cursor-pointer w-40",className)}>
      <div className="text-green-700 text-5xl mb-3">
        {icon}
      </div>

      <p style={textStyle} className="text-[#045441]  font-semibold text-md">
        {text}
      </p>
    </div>
  );
}
