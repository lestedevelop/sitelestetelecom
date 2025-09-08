'use-client'
import React from "react";

export default function ActionCard({ icon, text,textStyle }) {
  return (
    <div className="flex flex-col   p-6 rounded-xl   transition cursor-pointer w-40">
      <div className="text-green-700 text-5xl mb-3">
        {icon}
      </div>

      <p style={textStyle} className="text-green-800  font-semibold text-xl">
        {text}
      </p>
    </div>
  );
}
