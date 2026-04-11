import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-foreground text-background py-12 px-12 mt-16 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-row gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>

          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="flex flex-row items-center gap-2">
              <Mail size={18} />
              <a
                href="mailto:cumbre2026@magastagroup.com"
                className="hover:opacity-80"
              >
                cumbre2026@magastagroup.com
              </a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Phone size={18} />
              <a href="tel:+111111111111" className="hover:opacity-80">
                +52 (000) 0000
              </a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <MapPin size={18} />
              <span>
                Av. Cerro Sombrerete, Las Americas, 76121 Santiago de Querétaro,
                Qro.
              </span>
            </div>
          </div>
        </div>

        <div className="border-b border-background/30 mt-8 pt-6 pb-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Cumbre Bachilleres UAQ. Todos los
            derechos reservados.
          </p>
        </div>
        <p className=" mt-2 text-sm text-center">
          Made with ♥︎ by Centro de Desarrollo, Facultad de Informática UAQ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
