import { useState, useEffect } from "react";

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/hero-capitol.jpg",
    title: "Powering Government Mission Success",
    subtitle: "For 25 years, we have partnered with federal, state, and local agencies to modernize critical systems, secure sensitive data, and deliver superior citizen services.",
  },
  {
    id: 2,
    image: "/hero-fedramp.jpg",
    title: "Mission-First, Compliance-Assured",
    subtitle: "Accelerate your path to FedRAMP authorization with our battle-tested methodology. We've helped 15+ organizations achieve FedRAMP compliance in an average of 9 months.",
  },
  {
    id: 3,
    image: "/hero-cybersecurity-new.jpg",
    title: "Defending the Nation's Digital Infrastructure",
    subtitle: "Protect your DoD contracts with CMMC certification. Our comprehensive assessment and implementation services ensure you meet all cybersecurity requirements.",
  },
  {
    id: 4,
    image: "/hero-datacenter-new.jpg",
    title: "Secure Cloud Migration for Government",
    subtitle: "Modernize your infrastructure with secure migration to AWS GovCloud, Azure Government, or Google Cloud for Government with 99.99% uptime.",
  },
  {
    id: 5,
    image: "/hero-buildings.png",
    title: "Government-Grade Solutions for Regulated Industries",
    subtitle: "We apply the same rigorous standards of security and compliance demanded by our government partners to solve challenges for regulated industries.",
  },
  {
    id: 6,
    image: "/hero-infrastructure.jpg",
    title: "Protecting Critical Infrastructure",
    subtitle: "Safeguarding and modernizing the nation's critical infrastructure with enterprise-grade security, resilience, and compliance frameworks.",
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

      {/* Bottom Title Banner - Tygart Style with Subtitle */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-[#3D3D3D]/90 backdrop-blur-sm">
          <div className="container py-5 sm:py-6 md:py-8">
            {/* Main Title */}
            <h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide mb-2 sm:mb-3"
            >
              {slides[currentSlide].title}
            </h1>
            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-light max-w-4xl leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Subtle dots at bottom right */}
      <div className="absolute bottom-32 sm:bottom-36 md:bottom-40 right-4 sm:right-6 md:right-8 z-20 flex gap-2">
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
