import Image from "next/image";

export default function LestePlayContentsMosaic({items, className}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="absolute flex items-center justify-center"
          style={{left: `calc(var(--lp-x) + ${item.x}px)`, top: item.y, width: item.boxWidth, height: item.boxHeight}}
        >
          <div
            className={`relative flex-none -rotate-[11.52deg] overflow-hidden ${item.image ? "" : "border border-[#03ffa9] bg-[linear-gradient(112deg,rgba(1,255,167,0.35)_19.14%,rgba(4,172,132,0)_80.75%)]"}`}
            style={{width: item.width, height: item.height, borderRadius: item.radius}}
          >
            {item.image && <Image src={item.image} alt="" fill sizes="320px" className="object-cover"/>}
          </div>
        </div>
      ))}
    </div>
  );
}
