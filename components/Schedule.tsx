import {
  BrainCircuit,
  Clock,
  Flag,
  Gift,
  Lightbulb,
  Mic2,
  Star,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";

interface ScheduleItemProps {
  time: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  isHighlight?: boolean;
}

const ScheduleItem = ({
  time,
  title,
  description,
  icon,
  isHighlight = false,
}: ScheduleItemProps) => (
  <div
    className={`flex flex-col md:flex-row gap-4 md:gap-6 p-5 md:p-6 rounded-lg border transition-all items-start md:items-center ${
      isHighlight
        ? "border-primary bg-primary/5"
        : "border-foreground/10 bg-foreground/5"
    }`}
  >
    <div className="flex h-full gap-3 flex-row items-center md:min-w-24">
      <Clock className="w-4 h-4 text-primary shrink-0" />
      <div className="text-lg md:text-xl font-bold font-mono text-primary h-fit">
        {time}
      </div>
    </div>
    <div className="flex items-start gap-4 flex-1">
      {icon && <div className="shrink-0 mt-1">{icon}</div>}
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-foreground">
          {title}
        </h3>
        {description && (
          <p className="text-base text-foreground/70 mt-1">{description}</p>
        )}
      </div>
    </div>
  </div>
);

const Schedule = () => {
  const scheduleItems: ScheduleItemProps[] = [
    {
      time: "08:00 - 09:00",
      title: "Recepción y registro",
      description: "Bienvenida inicial y entrega de materiales.",
      icon: <UserCheck className="w-5 h-5 text-primary" />,
      isHighlight: false,
    },
    {
      time: "09:00 - 10:00",
      title: "Inauguración y bienvenida",
      description: "Apertura oficial del evento.",
      icon: <Mic2 className="w-5 h-5 text-primary" />,
      isHighlight: false,
    },
    {
      time: "10:00 - 11:00",
      title: "PANEL: Auténticos - El Poder de Ser Tú",
      description: "Sesión grupal sobre autenticidad y liderazgo personal.",
      icon: <Users className="w-5 h-5 text-primary" />,
      isHighlight: true,
    },
    {
      time: "11:00 - 11:20",
      title: "Concursos y sorpresas",
      description: "Dinámicas interactivas con la audiencia.",
      icon: <Gift className="w-5 h-5 text-primary" />,
      isHighlight: false,
    },
    {
      time: "12:00 - 13:00",
      title: "Conferencia: Hackea tu mente",
      description: "Ponentes: Manolo Guevara e Isabel Castellano",
      icon: <Lightbulb className="w-5 h-5 text-primary" />,
      isHighlight: true,
    },
    {
      time: "12:30 - 13:00",
      title: "Concursos y dinámicas",
      description: "Actividades paralelas de integración.",
      icon: <Trophy className="w-5 h-5 text-primary" />,
      isHighlight: false,
    },
    {
      time: "13:00 - 14:00",
      title: "El Juego Interno",
      description: "Ponente: Tico Perezgrovas",
      icon: <BrainCircuit className="w-5 h-5 text-primary" />,
      isHighlight: true,
    },
    {
      time: "13:30 - 14:00",
      title: "Cierre y CUMBRE 2027",
      description: "Conclusiones finales y anuncio del próximo año.",
      icon: <Flag className="w-5 h-5 text-primary" />,
      isHighlight: false,
    },
    {
      time: "14:00 - 15:00",
      title: "EVENTO SORPRESA",
      description: "Actividad de clausura especial.",
      icon: <Star className="w-5 h-5 text-primary" />,
      isHighlight: true,
    },
  ];
  return (
    <section
      className="w-full px-4 md:px-12 py-12 md:py-16 items-center flex flex-col"
      id="cronograma"
    >
      <div className="md:max-w-6xl md:min-w-6xl">
        <h2 className="text-4xl! md:text-5xl font-bold text-center mb-3 md:mb-4 text-foreground">
          Cronograma
        </h2>
        <div className="space-y-4 md:space-y-5">
          {scheduleItems.map((item, index) => (
            <ScheduleItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
