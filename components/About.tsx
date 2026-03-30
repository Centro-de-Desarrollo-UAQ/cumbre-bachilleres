import Image from "next/image";
import { prefix } from "@/lib/prefix";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-6 md:gap-10 px-6 md:px-12 py-8 justify-between">
      <div className="w-full md:w-1/2 space-y-6 md:space-y-8 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row text-5xl text-center items-center w-full text-nowrap md:text-5xl gap-2 md:gap-4 font-semibold">
          ¿Qué es{" "}
          <span className="w-full md:w-auto">
            {" "}
            <Image
              src={`${prefix}/cumbre_logo_b.svg`}
              alt=""
              width={360}
              height={70}
              className="min-w-28 max-w-58 md:w-auto h-auto inline-block"
            />{" "}
          </span>{" "}
          2026?
        </div>
        <p className="text-base md:text-xl leading-relaxed">
          <span className="font-bold text-primary">CUMBRE</span> es el lugar de
          máxima perspectiva. Un día para ganar altura y claridad. El éxito no
          es estar en la cima, sino la claridad con la que regresas a casa. Te
          invitamos a compartir{" "}
          <span className="font-bold text-primary">CUMBRE</span>, nuestro Primer
          Congreso de liderazgo y transformación Juvenil. Un espacio para
          compartir, nutrir y celebrar la vida. Esta{" "}
          <span className="font-bold text-primary">CUMBRE</span> surgió para
          acercarte a conferencistas y panelistas que a través de pláticas
          profundas, te darán herramientas y compartirán sus experiencias, para
          que juntos, descubramos tu potencial.
        </p>
      </div>
      <div className="relative w-full md:w-auto flex justify-center">
        <Image
          src={`${prefix}/hive_logo.svg`}
          alt=""
          width={264}
          height={295}
          className="absolute -bottom-10 -right-10 md:-bottom-10 md:-right-10 rotate-180 w-20 h-auto md:w-90 md:h-auto"
        />
        <Image
          src={`${prefix}/about-photo.jpg`}
          alt=""
          width={5864}
          height={3915}
          className="w-full  md:w-205 md:max-w-none h-auto md:h-120 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
