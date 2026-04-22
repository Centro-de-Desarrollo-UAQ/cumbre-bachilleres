"use client";

import { prefix } from "@/lib/prefix";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Acerca de", href: "#acerca-de" },
  { name: "Ponentes", href: "#ponentes" },
  { name: "Cronograma", href: "#cronograma" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-background/95 backdrop-blur-sm border-b border-gray-200 fixed top-0 z-20 shadow-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            <Image
              src={`${prefix}/cumbre_logo.png`}
              alt="Cumbre Logo"
              className="md:h-10 md:w-auto w-20"
              width={200}
              height={100}
              priority
            />
            <div className="h-8 w-px bg-gray-300" />
            <Image
              src={`${prefix}/bachilleres_logo.png`}
              alt="Bachilleres Logo"
              className="md:h-8 md:w-auto w-24"
              width={200}
              height={100}
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background border-t border-gray-200 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
