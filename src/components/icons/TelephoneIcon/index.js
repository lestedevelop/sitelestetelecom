import React from 'react';

/**
 * Componente de ícone de telefone gerado a partir de um SVG.
 * @param {object} props - As propriedades do componente.
 * @param {number} [props.width=15] - A largura do ícone.
 * @param {number} [props.height=15] - A altura do ícone.
 * @param {string} [props.color='#009373'] - A cor de preenchimento do ícone.
 * @param {string} [props.className] - Classes CSS adicionais para o elemento SVG.
 */
const IconeTelefone = ({ width = 15, height = 15, color = '#009373', className, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_3924_4456)">
        <path
          d="M11.7005 9.09101C11.7005 9.09101 9.95957 10.3476 9.95957 10.3265C9.95957 10.3053 8.47462 9.72993 6.7934 8.06667C4.58309 5.87957 4.75112 4.96986 4.79417 4.9292C4.80991 4.91449 6.34856 3.49262 6.34856 3.49262L3.50409 0L0 3.23913C0.172196 3.4273 0.844777 5.50756 2.49776 7.80929C2.4936 7.81318 2.48943 7.81708 2.4848 7.82054C5.27048 11.7587 10.8219 14.7318 11.0751 15L15.0005 12.2142L11.7005 9.09101Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3924_4456">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconeTelefone;