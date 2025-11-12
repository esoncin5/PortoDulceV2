
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Cake {
  id: number;
  name: string;
  description: string;
  price: string;
  images: string[];
  popular?: boolean;
}

const cakes: Cake[] = [
  {
    id: 1,
    name: "Torta 80 golpes",
    description: "descripcion torta 80 golpes",
    price: "$15000",
    images: [
      "/public/images/torta80golpes1",
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    ],
    popular: true,
  },
  {
    id: 2,
    name: "Torta de Chocolate",
    description: "Chocolate intenso con ganache y decoración elegante",
    price: "$22 - $40",
    images: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
      "https://images.unsplash.com/photo-1588195538326-c5b1e5b80d0d?w=600&q=80",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Torta de Frutilla",
    description: "Bizcochuelo con crema y frutillas frescas",
    price: "$24 - $42",
    images: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
      "https://images.unsplash.com/photo-1588195538326-c5b1e5b80d0d?w=600&q=80",
      "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=600&q=80",
    ],
  },
  {
    id: 4,
    name: "Torta Tres Leches",
    description: "Clásica torta húmeda con dulce de leche",
    price: "$20 - $38",
    images: [
      "https://images.unsplash.com/photo-1588195538326-c5b1e5b80d0d?w=600&q=80",
      "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=600&q=80",
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    ],
  },
  {
    id: 5,
    name: "Torta de Limón",
    description: "Refrescante torta con crema de limón y merengue",
    price: "$23 - $41",
    images: [
      "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=600&q=80",
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80",
    ],
  },
  {
    id: 6,
    name: "Torta Oreo",
    description: "Chocolate con galletas Oreo y crema",
    price: "$26 - $44",
    images: [
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80",
      "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&q=80",
    ],
    popular: true,
  },
  {
    id: 7,
    name: "Torta Arcoíris",
    description: "Capas de colores con buttercream suave",
    price: "$28 - $48",
    images: [
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80",
      "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&q=80",
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80",
    ],
  },
  {
    id: 8,
    name: "Torta Personalizada",
    description: "Diseño único según tu preferencia",
    price: "Consultar",
    images: [
      "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&q=80",
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    ],
  },
];

interface CarouselProps {
  images: string[];
  cakeName: string;
}

function ImageCarousel({ images, cakeName }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden aspect-square group">
      <img
        src={images[currentIndex]}
        alt={`${cakeName} - imagen ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/50 w-2 hover:bg-white/75"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function CatalogSection() {
  return (
    <section id="tortas" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Nuestras Tortas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada torta es única y hecha con ingredientes de primera calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cakes.map((cake) => (
            <Card
              key={cake.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <ImageCarousel images={cake.images} cakeName={cake.name} />
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-playfair font-semibold">
                    {cake.name}
                  </h3>
                  {cake.popular && (
                    <Badge className="bg-pink-pastel text-white whitespace-nowrap">
                      Popular
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {cake.description}
                </p>
                <p className="text-lg font-semibold text-primary">
                  {cake.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
