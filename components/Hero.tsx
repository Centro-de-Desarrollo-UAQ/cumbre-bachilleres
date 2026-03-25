import React from "react";
import HexagonBackground from "./HexagonBackground";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-200 relative flex -z-5">
      <HexagonBackground />
      <div className="z-5 flex flex-col justify-center gap-10 px-10 items-start">
        <Image
          src="/bachilleres_logo_w.svg"
          alt=""
          width={350}
          height={67}
          className="w-auto h-20 object-contain"
        />

        <h1 className="font-bold font-mono text-4xl text-background">
          CONGRESO DE{" "}
          <span className="text-cyan-500">TRANSFORMACIÓN PARA EL FUTURO</span>
        </h1>
        <Image
          src="/cumbre_logo_w.svg"
          alt=""
          width={350}
          height={67}
          className="w-140 h-auto object-contain"
        />

        <div>
          <h2 className="text-8xl text-background">RESERVA LA FECHA</h2>
          <h4 className=" font-mono italic text-cyan-400 text-4xl ">
            Algo grande estamos creando para tí
          </h4>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero_image.jpg')`,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-tl from-background to-80% to-foreground/30" />
    </div>
  );
};

export default Hero;
