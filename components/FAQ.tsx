"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border border-foreground/10 bg-foreground/5 rounded-lg overflow-hidden hover:bg-foreground/10 transition-colors hover:border-foreground/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-semibold pr-4 text-primary">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-300 text-primary ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-500" : "max-h-0"
        }`}
      >
        <div className="p-5 md:p-6 pt-0 md:pt-0 text-base md:text-lg leading-relaxed text-foreground/80">
          {answer}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "¿Cuánto cuesta el acceso y cómo puedo pagar?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-foreground">
          El costo del acceso depende de la fecha de compra:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>$275.00 MXN hasta el 24 de abril</li>
          <li>$350.00 MXN del 25 de abril al 14 de mayo</li>
        </ul>
        <p className="text-primary text-md text-justify">
          ** El costo final de los boletos puede variar al momento del pago
          debido a los cargos por servicio y procesamiento de la plataforma{" "}
          <a href="https://www.eventbrite.com.mx/">Eventbrite</a>.
        </p>
        <p className="font-semibold text-foreground">
          Formas de pago disponibles:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Pago en OXXO</li>
          <li>Transferencia bancaria</li>
          <li>Pago directo en la página web con tarjeta de crédito o débito</li>
        </ul>
      </div>
    ),
  },
  {
    question: "¿Cuándo y dónde se realizará el evento?",
    answer: (
      <div className="space-y-4">
        <p>
          <span className="font-semibold text-foreground">Lugar:</span>{" "}
          Auditorio Josefa Ortiz de Domínguez.
        </p>
        <p>
          <span className="font-semibold text-foreground">Dirección:</span> Av.
          Constituyentes Esq, Sierra de Zimapán S/N, Villas del Sol, 76000 Qro.
        </p>
        <p>
          <span className="font-semibold text-foreground">Fecha:</span> Jueves
          14 de mayo de 2026.
        </p>
      </div>
    ),
  },
  {
    question: "¿Cuál es el programa del evento?",
    answer: (
      <div className="space-y-4">
        <p>
          <span className="font-semibold text-foreground">
            Horario del evento:
          </span>{" "}
          08:00 – 15:00 hrs
        </p>
        <p>
          3 conferencias magistrales + actividades especiales + actividad
          sorpresa de clausura.
        </p>
        <p className="font-semibold text-foreground">Agenda destacada:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            <span className="font-medium text-foreground">10:00</span> Panel Los
            Auténticos - Podcast conducido por el Pdte. Mpal. Felifer Macías +
            invitados sorpresa.
          </li>
          <li>
            <span className="font-medium text-foreground">11:30</span>{" "}
            Conferencia Hackea tu mente - Ponentes: Isabel Castellano y Manolo
            Guevara
          </li>
          <li>
            <span className="font-medium text-foreground">13:00</span>{" "}
            Conferencia Propósito y sentido de vida - Ponentes: Tico Perezgrovas
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "¿Qué puedo llevar al evento?",
    answer: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-primary mb-2">
            Lo que SÍ está permitido ingresar:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Libreta</li>
            <li>Pluma</li>
            <li>Actitud abierta para aprender</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-primary mb-2">
            Lo que NO está permitido ingresar:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Alimentos o bebidas externas</li>
            <li>Bebidas energéticas</li>
            <li>Alcohol o drogas</li>
            <li>Armas</li>
            <li>Objetos peligrosos</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: "¿Para quién es el evento?",
    answer: (
      <div className="space-y-4">
        <p>El evento está dirigido principalmente a:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Estudiantes de la Escuela de Bachilleres</li>
          <li>Estudiantes de la UAQ</li>
          <li>
            Jóvenes interesados en desarrollo personal, propósito de vida y
            crecimiento profesional
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "¿Se venderán alimentos y bebidas?",
    answer: (
      <div className="space-y-4">
        <p>
          Sí. Durante el evento habrá opciones de alimentos y bebidas
          disponibles en la zona de comida.
        </p>
        <p>Se contará con algunas opciones de foodtrucks, snacks y bebidas.</p>
        <p className="font-semibold text-primary">
          Los alimentos y bebidas no están incluidos en el costo del acceso.
        </p>
      </div>
    ),
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 md:px-12 py-12 md:py-16" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl! md:text-5xl font-bold text-center mb-8 md:mb-12 text-foreground">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-3 md:space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
