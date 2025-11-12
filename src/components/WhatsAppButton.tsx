
"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      "https://wa.me/[Número]?text=Hola! Me gustaría consultar sobre las tortas",
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp/90 text-white shadow-2xl hover:scale-110 transition-all p-0"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
}
