
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    date: "Hace 2 semanas",
    rating: 5,
    comment:
      "¡Increíble! La torta de chocolate quedó hermosa y deliciosa. Todos en la fiesta quedaron encantados. Super recomendable.",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    date: "Hace 1 mes",
    rating: 5,
    comment:
      "Pedí una torta personalizada para el cumpleaños de mi hija y superó todas mis expectativas. Excelente atención y calidad.",
  },
  {
    id: 3,
    name: "Laura Martínez",
    date: "Hace 3 semanas",
    rating: 5,
    comment:
      "La torta Red Velvet es mi favorita. Siempre fresca, esponjosa y con el punto justo de dulce. ¡No cambio más de lugar!",
  },
  {
    id: 4,
    name: "Javier López",
    date: "Hace 1 semana",
    rating: 5,
    comment:
      "Excelente servicio y puntualidad en la entrega. La torta de frutilla estaba espectacular. Volveré a pedir sin dudas.",
  },
  {
    id: 5,
    name: "Ana Silva",
    date: "Hace 2 meses",
    rating: 5,
    comment:
      "Hice varios pedidos y siempre perfectos. La atención por WhatsApp es rápida y te asesoran en todo. 100% recomendable.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Opiniones de Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lo que dicen quienes ya probaron nuestras tortas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
