import Image from "next/image";
import watchPart1 from "@/assets/lesteplay/watch-parte-1.svg";
import watchPart2 from "@/assets/lesteplay/watch-parte-2.svg";
import watchPart3 from "@/assets/lesteplay/watch-parte-3.svg";

export default function LestePlayWatchLogo({className}) {
  return (
    <div role="img" aria-label="Streaming by Watch" className={`relative ${className}`}>
      <Image src={watchPart1} alt="" className="absolute inset-[4.14%_40.27%_0_0] h-[95.86%] w-[59.73%]"/>
      <Image src={watchPart2} alt="" className="absolute inset-[0_4.12%_0.58%_62.04%] h-[99.42%] w-[33.84%]"/>
      <Image src={watchPart3} alt="" className="absolute inset-[0.42%_0_78.45%_96.95%] h-[21.13%] w-[3.05%]"/>
    </div>
  );
}
