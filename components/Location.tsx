import Image from "next/image";
import { prefix } from "@/lib/prefix";
import React from "react";

const Location = () => {
  return (
    <div className="w-full px-6 md:px-12 py-8 mt-6">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden flex flex-col">
            <div className="flex-1 flex flex-col justify-center text-foreground w-full mb-4 md:mb-0">
              <h2 className="text-10xl md:text-5xl text-left w-full mb-4 text-primary font-semibold">
                Ubicación
              </h2>
              <p className="text-base md:text-xl text-left w-full">
                Av. Constituyentes Esq, Sierra de Zimapán S/N, Villas del Sol,
                76000 Santiago de Querétaro, Qro.
              </p>
            </div>
            <div className="relative rounded-md overflow-clip h-48 md:h-74">
              <Image
                src={`https://centrosdeconvenciones.com.mx/wp-content/uploads/2025/10/Auditorio-Josefa-Ortiz-de-Dominguez-Queretaro.jpg`}
                alt="Auditorio Josefa Ortiz de Domínguez"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/80 mix-blend-hard-light" />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.0555221166283!2d-100.38049012475544!3d20.585790080955046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d344cc768b1e47%3A0xb0d96af5bbc488a3!2sJosefa%20Ortiz%20de%20Dom%C3%ADnguez%20Auditorium!5e0!3m2!1sen!2smx!4v1774907871621!5m2!1sen!2smx"
              width="100%"
              height="100%"
              className="rounded-lg w-full min-h-96 md:min-h-120"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
