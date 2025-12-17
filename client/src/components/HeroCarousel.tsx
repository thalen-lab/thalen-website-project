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
    title: "FedRAMP Authorization & Cloud Security",
    subtitle:
      "Accelerate your path to FedRAMP authorization with our proven methodology. We've helped 15+ organizations achieve FedRAMP compliance in an average of 9 months, opening doors to billions in federal opportunities",
    cta: {
      text: "Learn About FedRAMP Services",
      link: "/federal-solutions/fedramp",
    },
  },
  {
    id: 3,
    image: "/hero-federal-building.jpg",
    title: "CMMC Compliance for Defense Contractors",
    subtitle:
      "Protect your DoD contracts with CMMC certification. Our comprehensive assessment and implementation services ensure you meet all cybersecurity requirements with 100% first-time pass rate",
    cta: {
      text: "Explore CMMC Services",
      link: "/federal-solutions/cmmc",
    },
  },
  {
    id: 4,
    image: "/hero-datacenter.jpg",
    title: "Government Cloud Migration Excellence",
    subtitle:
      "Modernize your infrastructure with secure migration to AWS GovCloud, Azure Government, or Google Cloud for Government. We've migrated 2,500+ applications with 99.99% uptime and 42% average TCO reduction",
    cta: {
      text: "Start Your Cloud Journey",
      link: "/federal-solutions/cloud-migration",
    },
  },
  {
    id: 5,
    image: "/hero-power-plant.jpg",
    title: "Commercial Financial Services & Healthcare",
    subtitle:
      "Empowering financial institutions and healthcare organizations with secure, compliant technology solutions that drive operational excellence and enhance customer experiences",
    cta: {
      text: "View Commercial Solutions",
      link: "/industries/financial-services",
    },
  },
  {
    id: 6,
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
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-[oklch(0.18_0.06_250)]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Signature Blue Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Signature blue gradient overlay matching Our Approach */}
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.06_250)]/95 via-[oklch(0.22_0.06_250)]/85 to-[oklch(0.28_0.05_250)]/70" />
            {/* Additional subtle gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.18_0.06_250)]/50" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container">
              <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Orange accent label */}
                <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-3 uppercase tracking-wider text-sm">
                  Intelligence, Delivered
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                {slide.cta && (
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[oklch(0.65_0.18_55)] to-[oklch(0.70_0.18_55)] hover:from-[oklch(0.60_0.18_55)] hover:to-[oklch(0.65_0.18_55)] text-white font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
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

      {/* Navigation Arrows with orange accent on hover */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-[oklch(0.65_0.18_55)]/80 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-[oklch(0.65_0.18_55)]/80 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation with orange active state */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? "bg-[oklch(0.65_0.18_55)] w-12 h-3"
                : "bg-white/40 hover:bg-white/60 w-3 h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


    </div>
  );
}
