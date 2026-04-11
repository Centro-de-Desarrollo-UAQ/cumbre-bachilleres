import { Link } from "lucide-react";

export default function CTAButton() {
  return (
    <section className="flex justify-center items-center py-16 px-4 md:px-0">
      <a
        href="https://www.eventbrite.com.mx/e/cumbre-tickets-1985834870555"
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-button group relative inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-background text-2xl md:text-3xl font-bold px-12 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
      >
        ADQUIERE AQUÍ TUS BOLETOS
        <Link className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
      </a>
      <style>{`
        .pulse-button {
          animation: btn-pulse 1.25s infinite cubic-bezier(0.66, 0.33, 0, 1);
        }

        .pulse-button:hover {
          animation-play-state: paused;
        }

        @keyframes btn-pulse {
          0% {
            box-shadow: 0 0 0 0px rgba(14, 165, 233, 0.7), 0 0 0 0px rgba(14, 165, 233, 0.5);
          }
          100% {
            box-shadow: 0 0 0 12px rgba(14, 165, 233, 0), 0 0 0 24px rgba(14, 165, 233, 0);
          }
        }
      `}</style>
    </section>
  );
}
