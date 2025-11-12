
"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
      "/images/torta80golpes8.jpg",
      "/images/torta80golpes7.jpg",
      "/images/torta80golpes6.jpg",
      "/images/torta80golpes5.jpg",
      "/images/torta80golpes4.jpg",
      "/images/torta80golpes3.jpg",
      "/images/torta80golpes2.jpg",
      "/images/torta80golpes1.jpg",
    ],
  },
];

interface CarouselProps {
  images: string[];
  cakeName: string;
}

function ImageCarousel({ images, cakeName }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

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

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div 
      className="relative overflow-hidden aspect-square group"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white transition-opacity duration-300 z-10 ${
              isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white transition-opacity duration-300 z-10 ${
              isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
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