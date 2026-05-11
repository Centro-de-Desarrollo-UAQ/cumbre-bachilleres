"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  AlertTriangle,
  Ban,
  Clock,
  QrCode,
  HelpCircle,
  Utensils,
  CreditCard,
} from "lucide-react";

const noticePoints = [
  {
    title: "CERO MOCHILAS",
    description:
      "Por seguridad y espacio, NO se permitirá el acceso con mochilas. Trae solo lo indispensable (celular, llaves) en algo pequeño o en tus bolsillos. No habrá lockers para dejar tu mochila. ¡Prevé esto!",
    icon: <Ban className="w-5 h-5" />,
  },
  {
    title: "LLEGA A TIEMPO",
    description:
      "Llega temprano, abrimos puertas a las 7:15 AM. Evita filas largas y asegura tu lugar. Tu ingreso será por los accesos 5 y 6.",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    title: "VALIDA TU ENTRADA",
    description:
      "En la entrada, escanearemos tu QR para darte acceso oficial. ¡Ten tu captura de pantalla lista! 📱",
    icon: <QrCode className="w-5 h-5" />,
  },
  {
    title: "¿FALLA EL BOLETO?",
    description:
      "Tranqui, si tienes broncas con tu registro, ve directo al Centro de Atención ahí nuestro equipo te ayudará a validar tu boleto en caso necesario.",
    icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    title: "ZONA DE ALIMENTOS",
    description:
      "Tendremos una Zona de Comida dentro y afuera del auditorio. ¡Importante! Lleva dinero para que puedas comprar tus alimentos y snacks sin tener que salir.",
    icon: <Utensils className="w-5 h-5" />,
  },
];

const NoticeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setShowContent(true), 10);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide relative transition-all duration-500 transform ${showContent ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/5 transition-colors z-10"
        >
          <X className="w-6 h-6 text-foreground/50" />
        </button>

        <div className="p-6 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex p-3 bg-amber-100 rounded-2xl text-amber-600 mb-4">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
              🚨 ¡AVISO IMPORTANTE PARA LA BANDA CUMBRE! 🚨
            </h2>
            <p className="text-lg text-foreground/70 font-medium">
              ¿Ya tienes todo listo para CUMBRE!?
            </p>
            <p className="text-sm text-primary font-bold uppercase tracking-wider mt-1">
              Checa estos puntos que son REGLA DE ORO para entrar al auditorio
            </p>
          </div>

          {/* Payment Notice */}
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mb-8 flex gap-4 items-start">
            <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              A partir del{" "}
              <span className="font-bold text-primary">lunes 11 de mayo</span>{" "}
              no tendremos opción de Pago por transferencia electrónica
              únicamente podrás comprar tus boletos con tarjeta de débito o
              crédito en nuestra pag. oficial.
            </p>
          </div>

          {/* Points List */}
          <div className="space-y-4">
            {noticePoints.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-2xl bg-foreground/5 border border-transparent hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shrink-0 font-bold">
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-primary">{point.icon}</span>
                    <h3 className="font-bold text-foreground">{point.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-foreground/5 text-center">
            <p className="text-foreground/70 italic mb-6">
              Recuerda: Cumbre es para disfrutar y conectar. Ayúdanos a que tu
              entrada sea fluida siguiendo estas indicaciones.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-primary/25"
            >
              ¡ENTENDIDO, NOS VEMOS EN LA CIMA!
            </button>
          </div>
        </div>
      </div>

      {/* Background click to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export default NoticeModal;
