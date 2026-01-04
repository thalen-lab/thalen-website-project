import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Award, Clock } from "lucide-react";

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
    title: "Powering Government Mission Success",
    subtitle:
      "For 25 years, we have partnered with federal, state, and local agencies to modernize critical systems, secure sensitive data, and deliver superior citizen services. Our deep government expertise ensures your mission always comes first.",
    cta: {
      text: "Explore Government Solutions",
      link: "/industries/federal-government",
    },
  },
  {
    id: 2,
    image: "/hero-fedramp.jpg",
    title: "Mission-First, Compliance-Assured",
    subtitle:
      "Accelerate your path to FedRAMP authorization with our battle-tested methodology. We've helped 15+ organizations achieve FedRAMP compliance in an average of 9 months, opening doors to billions in federal opportunities.",
    cta: {
      text: "Learn About FedRAMP Services",
      link: "/federal-solutions/fedramp",
    },
  },
  {
    id: 3,
    image: "/hero-cybersecurity.jpg",
    title: "Defending the Nation's Digital Infrastructure",
    subtitle:
      "Protect your DoD contracts with CMMC certification. Our comprehensive assessment and implementation services ensure you meet all cybersecurity requirements with 100% first-time pass rate—mission success guaranteed.",
    cta: {
      text: "Explore CMMC Services",
      link: "/federal-solutions/cmmc",
    },
  },
  {
    id: 4,
    image: "/hero-datacenter.jpg",
    title: "Secure Cloud Migration for Government",
    subtitle:
      "Modernize your infrastructure with secure migration to AWS GovCloud, Azure Government, or Google Cloud for Government. We've migrated 2,500+ applications with 99.99% uptime and 42% average TCO reduction.",
    cta: {
      text: "Start Your Cloud Journey",
      link: "/federal-solutions/cloud-migration",
    },
  },
  {
    id: 5,
    image: "/hero-financial.jpg",
    title: "Government-Grade Solutions for Regulated Industries",
    subtitle:
      "We apply the same rigorous standards of security and compliance demanded by our government partners to solve challenges for regulated industries like healthcare and finance.",
    cta: {
      text: "View Regulated Industry Solutions",
      link: "/industries/financial-services",
    },
  },
  {
    id: 6,
    image: "/hero-infrastructure.jpg",
    title: "Protecting Critical Infrastructure",
    subtitle:
      "Safeguarding and modernizing the nation's critical infrastructure with enterprise-grade security, resilience, and compliance frameworks battle-tested in government environments.",
    cta: {
      text: "Discover Infrastructure Solutions",
      link: "/industries/manufacturing",
    },
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
    <div className="relative w-full h-[420px] sm:h-[480px] md:h-[560px] lg:h-[640px] xl:h-[700px] overflow-hidden bg-[oklch(0.12_0.04_250)] shrink-0">
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
            {/* Multi-layer gradient overlay for depth - darker for sophisticated look */}
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.04_250)]/98 via-[oklch(0.10_0.04_250)]/90 to-[oklch(0.15_0.04_250)]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.04_250)]/80 via-transparent to-[oklch(0.08_0.04_250)]/40" />
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_oklch(0.06_0.04_250)/30_100%)]" />
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
                {/* 25 Years Badge - Only on first slide */}
                {index === 0 && (
                  <div className="inline-flex items-center gap-2 bg-[oklch(0.65_0.18_55)]/20 border border-[oklch(0.65_0.18_55)]/40 rounded-full px-4 py-2 mb-6">
                    <Award className="w-4 h-4 text-[oklch(0.75_0.15_55)]" />
                    <span className="text-[oklch(0.75_0.15_55)] font-semibold text-sm tracking-wide">
                      25 Years of Federal Government Service
                    </span>
                  </div>
                )}
                
                {/* Accent line */}
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[oklch(0.65_0.18_55)] to-[oklch(0.75_0.15_55)] mb-4 sm:mb-6 rounded-full" />
                
                {/* Tagline */}
                <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-[0.2em] text-xs md:text-sm">
                  Powering Government Mission Success
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
                    className="bg-[oklch(0.65_0.18_55)] hover:bg-[oklch(0.55_0.20_55)] text-white font-semibold px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg min-h-[48px] w-full sm:w-auto border-0"
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

      {/* Trust Indicators Bar - Bottom of Hero */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[oklch(0.65_0.18_55)]" />
              <span>FedRAMP Authorized</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[oklch(0.65_0.18_55)]" />
              <span>CMMC Certified</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[oklch(0.65_0.18_55)]" />
              <span>25+ Years Federal Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle progress indicator at bottom */}
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
