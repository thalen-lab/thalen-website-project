import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

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
    image: "/hero-government.jpg",
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
    image: "/hero-fedramp.jpg",
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
    image: "/hero-cybersecurity.jpg",
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
    image: "/hero-financial.jpg",
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
    image: "/hero-infrastructure.jpg",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Auto-advance every 6 seconds for better readability

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[420px] md:h-[520px] lg:h-[580px] xl:h-[620px] overflow-hidden bg-[oklch(0.15_0.04_250)]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Professional Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Multi-layer gradient overlay for depth and readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.04_250)]/95 via-[oklch(0.15_0.04_250)]/80 to-[oklch(0.20_0.04_250)]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.04_250)]/70 via-transparent to-[oklch(0.12_0.04_250)]/30" />
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_oklch(0.10_0.04_250)/20_100%)]" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container">
              <div 
                className={`max-w-3xl xl:max-w-4xl transition-all duration-700 ${
                  index === currentSlide 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: index === currentSlide ? "200ms" : "0ms" }}
              >
                {/* Accent line */}
                <div className="w-16 h-1 bg-gradient-to-r from-[oklch(0.65_0.18_55)] to-[oklch(0.75_0.15_55)] mb-6 rounded-full" />
                
                {/* Tagline */}
                <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-[0.2em] text-xs md:text-sm">
                  Intelligence, Delivered
                </p>
                
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
                  {slide.title}
                </h1>
                
                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 mb-8 md:mb-10 leading-relaxed max-w-2xl xl:max-w-3xl font-light">
                  {slide.subtitle}
                </p>
                
                {/* CTA Button */}
                {slide.cta && (
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[oklch(0.65_0.18_55)] to-[oklch(0.70_0.18_55)] hover:from-[oklch(0.60_0.18_55)] hover:to-[oklch(0.65_0.18_55)] text-white font-semibold px-8 md:px-10 py-5 md:py-6 text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg"
                  >
                    <Link href={slide.cta.link}>
                      {slide.cta.text}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Subtle progress indicator at bottom - minimal and professional */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <div 
          className="h-full bg-gradient-to-r from-[oklch(0.65_0.18_55)] to-[oklch(0.75_0.15_55)] transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[oklch(0.65_0.18_55)]/10 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[oklch(0.65_0.18_55)]/5 to-transparent pointer-events-none z-10" />
    </div>
  );
}
