import { Mail, MapPin, Phone } from "lucide-react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-foreground text-background py-12 px-12 mt-16 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-row gap-6">
            <SocialIcon
              network="facebook"
              url="https://www.facebook.com/profile.php?id=61572072213576"
            />

            <SocialIcon
              network="instagram"
              url="https://www.instagram.com/cumbrebachilleresuaq?igsh=ZHlzZWh1YjM4cnFs"
            />

            <SocialIcon
              network="tiktok"
              url="https://www.tiktok.com/@cumbrebachilleresuaq?_r=1&_t=ZS-95WHVe64Fx1"
            />
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
              <a
                href="https://wa.me/5214428256970"
                className="hover:opacity-80"
              >
                +52 (442) 825 6970
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
        <p className=" mt-8 text-sm text-center">
          Made with ♥︎ by Centro de Desarrollo, Facultad de Informática UAQ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
