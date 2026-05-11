import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function FaqImageStep({
  children,
  image,
  alt = "",
  href,
  className = "",
  imageClassName = "",
}) {
  const imageElement = (
    <Image
      src={image}
      alt={alt}
      className={twMerge(
        "mt-6 h-auto w-full max-w-[245px] self-center object-contain",
        imageClassName
      )}
    />
  );

  return (
    <article
      className={twMerge(
        "flex h-full flex-col rounded-xl border border-primary/10 bg-primary/10 p-5 text-darkgreen shadow-sm",
        className
      )}
    >
      <div className="text-sm leading-5">{children}</div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-end justify-center"
        >
          {imageElement}
        </a>
      ) : (
        imageElement
      )}
    </article>
  );
}

export default function FaqImageSteps({
  children,
  className = "",
  columns = "md:grid-cols-2 lg:grid-cols-3",
}) {
  return (
    <div className={twMerge("grid gap-6", columns, className)}>{children}</div>
  );
}
