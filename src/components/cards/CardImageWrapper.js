import Image from "next/image";

const CardProduto = ({ 
  imageSrc, 
  title = "Leste Móvel", 
  description = "Chegou o chip da Leste!", 
  buttonText = "Onde comprar",
  size = "md" // valores possíveis: sm, md, lg
}) => {
  const sizeClasses = {
    sm: "w-64",
    md: "w-80",
    lg: "w-96"
  };

  return (
    <div  className={`bg-white rounded-2xl overflow-hidden flex flex-col`}>
      <div className="w-full h-80 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-5 text-center">
        <div>
          <h2 className="text-primary font-semibold text-[24px] mb-1">
            {title}
          </h2>
          <p className="text-dark text-lg">{description}</p>
        </div>
        <button className="bg-primary mt-6 text-white text-[20px] font-medium py-2 px-6 rounded-lg hover:bg-[#007f68] transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardProduto;
