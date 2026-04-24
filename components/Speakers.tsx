import { prefix } from "@/lib/prefix";
import Image from "next/image";

interface Speaker {
  name: string;
  title: string;
  image: string;
  description: string;
  link: string;
}

const speakers: Speaker[] = [
  {
    name: "Pablo García",
    title: "Fundador de Grupo Magasta & Coach de vida",
    image: `${prefix}/Pablo.JPG`,
    description:
      "Empezó a sus 15 años organizando fiestas infantiles, ahora es un talentoso emprendedor, director y organizador de eventos que inspiran a cualquiera.",
    link: "https://www.instagram.com/pablo8626/",
  },
  {
    name: "Andrea Echegoyen",
    title: "Conductora, emprendedora e influencer",
    image: `${prefix}/andreaechegoyen.jpeg`,
    description:
      "Es un gran ejemplo de ser disruptiva. Estudió administración de empresas pero abrió su propio camino a dedicarse a lo que más le apasionaba; la velocidad y adrenalina.",
    link: "https://www.instagram.com/andrea_echegoyen/",
  },
  {
    name: "Joss Audi",
    title: "Facilitador y Coach de vida y organizacional",
    image: `${prefix}/JosAudi_IDENTIDADjpeg.jpeg`,
    description:
      "Empezó siendo abogado y gracias a atreverse a perseguir su pasión, hoy ayuda a personas a conocerse mejor y conectar con su propósito de vida.",
    link: "https://www.instagram.com/josaudi/",
  },
  {
    name: "Manolo Guevara",
    title: "Especialista en fortaleza mental",
    image: `${prefix}/ManoloGuevara_Hackeatumente.jpeg`,
    description:
      "Lleva más de 16 años de experiencia entrando diversas mentes enseñando a cómo romper barreras mentales y cambiar la forma de pensar.",
    link: "https://www.instagram.com/mental_trainingmx/",
  },
  {
    name: "Isabel Castellanos",
    title: "Coach para líderes de alto rendimiento",
    image: `${prefix}/IsabelCastellanos_Hackeatumente.jpeg`,
    description:
      "Siempre tuvo una curiosidad enorme por entender “el pensamiento”. Actualmente, ayuda a las personas a rediseñar su historia personal desde una nueva perspectiva. ",
    link: "https://www.instagram.com/isabelcastellanos3p/",
  },
  {
    name: "Tico Perezgrovas",
    title: "Psicólogo clínico, emprendedor serial y conferencista",
    image: `${prefix}/TicoSq.png`,
    description:
      "Se dedica a dar conferencias e inspirar a más personas para encontrar claridad en sus propósitos de vida. Nos ayudará a entender cómo podemos diseñar nuestra vida. ",
    link: "https://www.instagram.com/tico_perezgrovas/",
  },
  {
    name: "Ximena Ugalde",
    title:
      'Locutor, productor de radio y conferencista. "Un alquimista del entretenimiento"',
    image: `${prefix}/xime_ugalde.png`,
    description:
      "Una 'Mexicana con alas', se atrevió a seguir su sueño y dedicarse a viajar por el mundo. Ahora, con toda su experiencia viajera y emprendedora, sigue inspirando a más personas a diseñar su propio destino. ",
    link: "https://www.instagram.com/mexicanaconalas/",
  },
  {
    name: "Íkaro Atón",
    title: "Terapeuta, comunicador y mentor mexicano",
    image: `${prefix}/ikaro_aton2.png`,
    description:
      "Lleva más de 20 años de experiencia en medios. Después de un punto de inflexión, Ikaro decide darle la vuelta a su carrera y convertirse en terapeuta y mentor en el desarrollo personal.",
    link: "https://www.instagram.com/#",
  },
  {
    name: "Jessica Bulman",
    title: "Conductora de televisión, actriz y cantante mexicana",
    image: `${prefix}/jessicabulman.jpg`,
    description:
      "Talentosa actriz y conductora que irradia una energía vibrante. Su trayectoria es el reflejo de una niña que nunca dejó de soñar y que hoy inspira a muchos a seguir sus sueños.",
    link: "https://www.instagram.com/#",
  },
  {
    name: "Íker Vega",
    title:
      'Locutor, productor de radio y conferencista. "Un alquimista del entretenimiento"',
    image: `${prefix}/iker_vega.jpeg`,
    description:
      "Voz referente en la radio y la televisión, demostrando en el escenario que el humor y la narrativa son las herramientas más poderosas para conectar y transformar nuestra realidad.",
    link: "https://www.instagram.com/ikervega/",
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
            className="flex flex-col items-center justify-around gap-4 bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl duration-300 hover:scale-110 transition-all"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4 rounded-full overflow-hidden">
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-2">
                {speaker.name}
              </h3>

              <p className="text-sm md:text-base text-primary font-semibold text-center">
                {speaker.title}
              </p>
            </div>

            <p className="text-sm md:text-base text-foreground font-light text-center">
              {speaker.description}
            </p>
            <a
              className="bg-primary px-4 py-2 rounded-md font-semibold text-background"
              href={speaker.link}
            >
              Conocer Más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
