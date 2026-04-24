import React from "react";
import {
  CheckCircle2,
  CreditCard,
  Mail,
  Ticket,
  UserCheck,
} from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    title: "Acceso y Registro",
    description:
      "Haz click al botón 'Adquiere aquí tus boletos' e inicia tu registro en el botón naranja 'Conseguir boletos'.",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: "Selección de Boletos",
    description:
      "Elige la cantidad de boletos que requieres (máximo 3) y continúa el proceso en el botón naranja 'Finalizar compra'.",
    icon: <Ticket className="w-6 h-6" />,
  },
  {
    title: "Datos Personales",
    description:
      "Rellena el cuestionario con tus datos personales y elige tu método de pago.",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: "Confirmación del Pedido",
    description:
      "Sigue el proceso en 'Realizar pedido'; tomará unos segundos hasta que aparezca el mensaje 'Gracias por tu pedido'.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    title: "Datos de Pago por Transferencia",
    description:
      "Si tu pedido fue para pago por transferencia, accede a tu correo y revisa el correo que llegó con el título 'Confirmación de la solicitud para CUMBRE'. En la parte baja del correo vendrán los datos para tu depósito.",
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    title: "Envío de Comprobante",
    description:
      "Una vez que realices tu pago a través de transferencia deberás enviar tu comprobante a cumbre2026@magastagroup.com con tu nombre completo, plantel y fecha en que hiciste el pago.",
    icon: <Mail className="w-6 h-6" />,
  },
  {
    title: "Confirmación de Registro",
    description:
      "Recibirás una confirmación de que tu pago y que tu registro fue concluido.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
];

const Instructions = () => {
  return (
    <section className="w-full px-6 md:px-12 py-16 " id="instrucciones">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Cómo adquirir tus boletos?
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Sigue estos sencillos pasos para conseguir tu boleto en el evento de
            transformación juvenil más importante del año.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } md:min-h-[150px]`}
              >
                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2 px-12" />

                {/* Step Indicator (Circle) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary text-white z-10 shadow-lg shadow-primary/20 mt-6 md:mt-0">
                  <span className="text-sm md:text-xl font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-1/2 pl-12 pr-0 md:px-12 text-left ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-foreground/5 hover:border-primary/30 transition-colors">
                    <div
                      className={`flex items-center gap-4 mb-3 ${
                        index % 2 === 0
                          ? "md:flex-row-reverse md:justify-start"
                          : "justify-start"
                      }`}
                    >
                      <div className="hidden md:flex p-2 bg-primary/10 rounded-lg text-primary">
                        {step.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructions;
