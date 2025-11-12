
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Instagram, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos para ayudarte con tu pedido
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://wa.me/[Número]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-whatsapp flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">[Número]</p>
                  </div>
                </a>

                <a
                  href="tel:[Número]"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-sm text-muted-foreground">[Número]</p>
                  </div>
                </a>

                <a
                  href="mailto:[correo]"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-peach flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">[correo]</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/[@usuario]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-pastel to-peach flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-sm text-muted-foreground">[@usuario]</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">
                  Zona de Cobertura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">Retiro en local</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      [Dirección del local]
                    </p>
                    <p className="font-semibold mb-2">Delivery disponible</p>
                    <p className="text-sm text-muted-foreground">
                      Consultá si llegamos a tu zona. Cobertura en CABA y zona
                      norte de GBA.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
