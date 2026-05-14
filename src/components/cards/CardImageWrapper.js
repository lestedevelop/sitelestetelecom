import Image from "next/image";
import Link from "next/link";
import {isDataImageSrc, resolveImageSrc} from "@/utils/imageSrc";


const CardProduto = ({imageSrc, title = "Leste Móvel", description = "Chegou o chip da Leste!", buttonText = "Onde comprar", link}) => {

  const resolvedImageSrc = resolveImageSrc(imageSrc, imageSrc);

  return (
    <div  className={`bg-white rounded-2xl overflow-hidden flex flex-col`}>
      <div className="w-full h-80 overflow-hidden">
        <Image
          src={resolvedImageSrc}
          alt={title}
          width={640}
          height={320}
          className="w-full h-full object-cover"
          unoptimized={isDataImageSrc(resolvedImageSrc)}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-5 text-center">
        <div>
          <h2 className="text-primary font-semibold text-[24px] mb-1">
            {title}
          </h2>
          <p className="text-dark text-lg">{description}</p>
        </div>
        <Link href={link} className="bg-primary mt-6 text-white text-[20px] font-medium py-2 px-6 rounded-lg hover:bg-[#007f68] transition">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CardProduto;
