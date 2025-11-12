
"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5492262414148?text=Hola! Me gustaría encargar una torta", "_blank");
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Tortas artesanales{" "}
            <span className="bg-gradient-to-r from-pink-pastel to-peach bg-clip-text text-transparent">
              hechas a mano
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Pedidos personalizados para cumpleaños, eventos y ocasiones
            especiales
          </p>
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-whatsapp hover:bg-whatsapp/90 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all animate-in fade-in slide-in-from-bottom duration-700 delay-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Encargar por WhatsApp
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-sm text-foreground/60 font-medium">Desliza hacia abajo</p>
        <ChevronDown className="w-6 h-6 text-foreground/60 animate-bounce" />
      </div>
    </section>
  );
}
