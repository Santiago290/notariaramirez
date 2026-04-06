import { useState, useEffect } from "react";

const Typing = () => {
  const textos = ["Quiero realizar un trámite", "Iniciar mi proceso", "Solicitar un servicio"];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [borrando, setBorrando] = useState(false);

  useEffect(() => {
    if (subIndex === textos[index].length + 1 && !borrando) {
      setTimeout(() => setBorrando(true), 1000);
      return;
    }

    if (subIndex === 0 && borrando) {
      setBorrando(false);
      setIndex((prev) => (prev + 1) % textos.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (borrando ? -1 : 1));
    }, borrando ? 50 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, borrando, index]);

  return (
        <span className="min-w-[126px] md:min-w-[315px] text-center">
            {textos[index].substring(0, subIndex)}
            <span className="animate-pulse">|</span>
        </span>
  );
};

export default Typing;