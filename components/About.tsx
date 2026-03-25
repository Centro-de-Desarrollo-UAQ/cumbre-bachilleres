import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-row w-full gap-10 px-12 justify-between">
      <div className="w-1/2 space-y-8 flex flex-col justify-center">
        <h2 className=" flex flex-row text-6xl items-center gap-2 font-semibold text-nowrap">
          ¿Qué es{" "}
          <span>
            {" "}
            <Image
              src="/cumbre_logo_b.svg"
              alt=""
              width={360}
              height={70}
            />{" "}
          </span>{" "}
          2026?
        </h2>
        <p className=" text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          officiis earum odio cumque voluptatum, similique debitis magni
          perspiciatis a. Expedita velit iusto est odit porro magni consequatur.
          Laboriosam optio earum doloremque? Fugit id distinctio consectetur?
          Iusto architecto quas minima veniam.
        </p>
      </div>
      <div className="relative">
        <Image
          src="/hive_logo.svg"
          alt=""
          width={264}
          height={295}
          className="absolute -bottom-10 -right-10 rotate-180 w-90 h-auto"
        />
        <Image
          src="/about-photo.jpg"
          alt=""
          width={5864}
          height={3915}
          className=" w-160 h-120 object-cover"
        />
      </div>
    </div>
  );
};

export default About;
