import React from "react";
import HexagonBackground from "./HexagonBackground";
import Image from "next/image";
import { prefix } from "@/lib/prefix";

const Hero = () => {
  return (
    <div className="w-full h-120 md:min-h-200 relative flex -z-5 overflow-clip flex-col md:flex-row">
      <HexagonBackground />
      <div className="z-5 flex flex-col justify-center gap-6 md:gap-10 px-6 md:px-10 py-10 md:py-0 items-start w-full md:w-1/2">
        <Image
          src={`${prefix}/bachilleres_logo_w.svg`}
          alt=""
          width={350}
          height={67}
          className="w-40 md:w-auto h-auto object-contain"
        />

        <h1 className="font-bold font-mono text-2xl md:text-4xl text-background leading-tight">
          CONGRESO DE{" "}
          <span className="text-cyan-500 block md:inline">
            TRANSFORMACIÓN PARA EL FUTURO
          </span>
        </h1>
        <Image
          src={`${prefix}/cumbre_logo_w.svg`}
          alt=""
          width={350}
          height={67}
          className="w-3/4 md:w-auto h-auto object-contain"
        />

        <div>
          <h2 className="text-4xl md:text-8xl text-background font-bold">
            RESERVA LA FECHA
          </h2>
          <h4 className="font-mono italic text-cyan-400 text-xl md:text-4xl mt-2">
            Algo grande estamos creando para tí
          </h4>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url('${prefix}/hero_image.jpg')`,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-tl from-background to-80% to-foreground/30" />
    </div>
  );
};

export default Hero;
