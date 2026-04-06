import React from "react";

const Boton = ({
  texto = "Contáctanos",
  children,
  className = "",
  width = "",
  height = "",
  type = "button",
  bg = "bg-crema",
  textColor = "text-rojo",
  fontWeight = "font-bold",
  border = "border border-crema",
  textSize = "text-[18px]",
  px = "px-4",
  py = "py-2",
  rounded = "rounded-full",
}) => {
  return (
    <button 
      type={type}
      className={`
        ${bg} ${textColor} ${fontWeight} ${border} ${textSize}
        ${px} ${py} ${rounded} ${width} ${height}
        flex items-center justify-center
        transition-all duration-300
        cursor-pointer 
        ${className}
      `}
    >
      {children || texto}
    </button>
  );
};

export default Boton;