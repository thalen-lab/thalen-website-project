import { useState, useEffect } from "react";

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/hero-operations-center.jpg",
    title: "Powering Government Mission Success",
  },
  {
    id: 2,
    image: "/hero-fedramp.jpg",
    title: "Mission-First, Compliance-Assured",
  },
  {
    id: 3,
    image: "/hero-cybersecurity-new.jpg",
    title: "Defending the Nation's Digital Infrastructure",
  },
  {
    id: 4,
    image: "/hero-datacenter-new.jpg",
    title: "Secure Cloud Migration for Government",
  },
  {
    id: 5,
    image: "/hero-financial.jpg",
    title: "Government-Grade Solutions for Regulated Industries",
  },
  {
    id: 6,
    image: "/hero-infrastructure.jpg",
    title: "Protecting Critical Infrastructure",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] md:h-[560px] lg:h-[640px] xl:h-[700px] overflow-hidden shrink-0">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image - Clean, no opacity overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}

      {/* Bottom Title Banner - Tygart Style */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-[#5C4033]/85 backdrop-blur-sm">
          <div className="container py-4 sm:py-5 md:py-6">
            <h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-wide italic"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              {slides[currentSlide].title}
            </h1>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Subtle dots at bottom right */}
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 right-4 sm:right-6 md:right-8 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white w-6" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
