import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/hero-federal-building.jpg",
    title: "Government Technology Implementation Services",
    subtitle:
      "We deliver end-to-end technology solutions that modernize government operations, enhance security, and improve citizen services through proven implementation expertise",
    cta: {
      text: "Explore Government Solutions",
      link: "/industries/federal-government",
    },
  },
  {
    id: 2,
    image: "/hero-datacenter.jpg",
    title: "Commercial Financial Services & Healthcare",
    subtitle:
      "Empowering financial institutions and healthcare organizations with secure, compliant technology solutions that drive operational excellence and enhance customer experiences",
    cta: {
      text: "View Commercial Solutions",
      link: "/industries/financial-services",
    },
  },
  {
    id: 3,
    image: "/hero-power-plant.jpg",
    title: "Critical Infrastructure & Regulated Industries",
    subtitle:
      "Protecting and modernizing critical infrastructure with enterprise-grade security, resilience, and compliance frameworks for energy, manufacturing, and regulated sectors",
    cta: {
      text: "Discover Infrastructure Solutions",
      link: "/industries/manufacturing-energy",
    },
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                {slide.cta && (
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg"
                    onClick={() => (window.location.href = slide.cta!.link)}
                  >
                    {slide.cta.text}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? "bg-orange-500 w-12 h-3"
                : "bg-white/40 hover:bg-white/60 w-3 h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
