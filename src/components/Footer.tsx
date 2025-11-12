
"use client";

import Link from "next/link";
import { Cake, Instagram, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-pastel to-peach flex items-center justify-center">
                <Cake className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-playfair font-bold">
                Porto Dulce
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Tortas artesanales hechas a mano con amor para tus momentos
              especiales por Marina Porto.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Seguinos</h3>
            <div className="flex gap-3">
              <a
                href="https://wa.me/[Número]"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com/[@usuario]"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-pastel to-peach flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:[correo]"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Porto Dulce by Marina Porto. Todos los derechos reservados. Hecho con
            ❤️ y mucho dulce de leche.
          </p>
        </div>
      </div>
    </footer>
  );
}
