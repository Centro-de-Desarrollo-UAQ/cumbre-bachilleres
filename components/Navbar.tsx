import Image from "next/image";
import cumbreLogo from "@/public/cumbre_logo.png";
import bachilleresLogo from "@/public/bachilleres_logo.png";

const navLinks = [
  { name: "Acerca de", href: "#acerca-de" },
  { name: "Ponentes", href: "#ponentes" },
  { name: "FAQ", href: "#faq" },
  { name: "Universidades", href: "#universidades" },
  { name: "Patrocinadores", href: "#patrocinadores" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-background border-b border-gray-200 sticky top-0 z-10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            <Image
              src={cumbreLogo}
              alt="Cumbre Logo"
              className="h-10 w-auto"
              priority
            />
            <div className="h-8 w-px bg-gray-300" />
            <Image
              src={bachilleresLogo}
              alt="Bachilleres Logo"
              className="h-8 w-auto"
              priority
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-foreground hover:text-primary"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
