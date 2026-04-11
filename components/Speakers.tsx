import { prefix } from "@/lib/prefix";
import Image from "next/image";

interface Speaker {
  name: string;
  title: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    name: "Pablo García",
    title: "Fundador de Grupo Magasta & Coach de vida",
    image: `${prefix}/Pablo.JPG`,
  },
  {
    name: "Annie Echegoyen",
    title: "Conductora, emprendedora e influencer",
    image: `${prefix}/andreaechegoyen.jpeg`,
  },
  {
    name: "Joss Audi",
    title: "Facilitador y Coach de vida y organizacional",
    image: `${prefix}/JosAudi_IDENTIDADjpeg.jpeg`,
  },
  {
    name: "Manolo Guevara",
    title: "Especialista en fortaleza mental",
    image: `${prefix}/ManoloGuevara_Hackeatumente.jpeg`,
  },
  {
    name: "Isabel Castellanos",
    title: "Coach para líderes de alto rendimiento",
    image: `${prefix}/IsabelCastellanos_Hackeatumente.jpeg`,
  },
  {
    name: "Tico Perezgrovas",
    title: "Psicólogo clínico, emprendedor serial y conferencista",
    image: `${prefix}/TicoSq.png`,
  },
  {
    name: "Íkaro Atón",
    title: "Terapeuta, comunicador y mentor mexicano",
    image: `${prefix}/ikaro_aton _sq.png`,
  },
  {
    name: "Jessica Bulman",
    title: "Conductora de televisión, actriz y cantante mexicana",
    image: `${prefix}/jessicabulman.jpg`,
  },
  {
    name: "Íker Vega",
    title:
      'Locutor, productor de radio y conferencista. "Un alquimista del entretenimiento"',
    image: `${prefix}/iker_vega.jpeg`,
  },
];

const Speakers = () => {
  return (
    <div className="w-full px-6 md:px-12 py-8 md:py-12" id="ponentes">
      <h2 className="text-4xl! md:text-5xl font-bold text-center mb-8 md:mb-12">
        Conoce a nuestros <span className="text-primary">Ponentes</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl duration-300 hover:scale-110 transition-all"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4 rounded-full overflow-hidden">
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-center mb-2">
              {speaker.name}
            </h3>

            <p className="text-sm md:text-base text-primary font-semibold text-center">
              {speaker.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
