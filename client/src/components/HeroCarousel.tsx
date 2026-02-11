import { useState, useEffect, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface CarouselSlide {
  id: number;
  image: string;
  imageWebp: string;
  category: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  tabLabel: string;
  /** Per-slide responsive object-position: [mobile, sm, md+] */
  objectPosition: [string, string, string];
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/WMBsiHLOQtWinyOk.jpg",
    imageWebp: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/WMBsiHLOQtWinyOk.jpg",
    category: "GOVERNMENT TECHNOLOGY",
    title: "Powering Government\nMission Success",
    subtitle: "For 25 years, we have partnered with federal, state, and local agencies to modernize critical systems, secure sensitive data, and deliver superior citizen services.",
    ctaText: "EXPLORE SOLUTIONS",
    ctaLink: "/core-capabilities",
    tabLabel: "Government",
    objectPosition: ["center 45%", "center 40%", "center 35%"],
  },
  {
    id: 2,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/WMBsiHLOQtWinyOk.jpg",
    imageWebp: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/WMBsiHLOQtWinyOk.jpg",
    category: "COMPLIANCE & AUTHORIZATION",
    title: "Mission-First,\nCompliance-Assured",
    subtitle: "Accelerate your path to FedRAMP authorization with our battle-tested methodology. We've helped 15+ organizations achieve FedRAMP compliance in an average of 9 months.",
    ctaText: "LEARN MORE",
    ctaLink: "/federal-solutions/fedramp",
    tabLabel: "FedRAMP",
    objectPosition: ["center 45%", "center 40%", "center 35%"],
  },
  {
    id: 3,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/TZgvtBBRnFSFHvfs.jpg",
    imageWebp: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/TZgvtBBRnFSFHvfs.jpg",
    category: "CYBERSECURITY",
    title: "Defending Digital\nInfrastructure",
    subtitle: "Protect your DoD contracts with CMMC certification. Our comprehensive assessment and implementation services ensure you meet all cybersecurity requirements.",
    ctaText: "GET CMMC READY",
    ctaLink: "/federal-solutions/cmmc",
    tabLabel: "Cybersecurity",
    objectPosition: ["center 55%", "center 50%", "center 45%"],
  },
  {
    id: 4,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/KuwDVAulchBHkThE.jpg",
    imageWebp: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/KuwDVAulchBHkThE.jpg",
    category: "CLOUD MODERNIZATION",
    title: "Secure Cloud Migration\nfor Government",
    subtitle: "Modernize your infrastructure with secure migration to AWS GovCloud, Azure Government, or Google Cloud for Government with 99.99% uptime.",
    ctaText: "START MIGRATION",
    ctaLink: "/federal-solutions/cloud-migration",
    tabLabel: "Cloud",
    objectPosition: ["center 30%", "center 25%", "center 20%"],
  },
  {
    id: 5,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/LOCqIXVrCXhGcRea.jpg",
    imageWebp: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/LOCqIXVrCXhGcRea.jpg",
    category: "REGULATED INDUSTRIES",
    title: "Government-Grade Solutions\nfor Regulated Industries",
    subtitle: "We apply the same rigorous standards of security and compliance demanded by our government partners to solve challenges for regulated industries.",
    ctaText: "VIEW INDUSTRIES",
    ctaLink: "/sectors/regulated-industries",
    tabLabel: "Industries",
    objectPosition: ["center 60%", "center 55%", "center 50%"],
  },
  {
    id: 6,
    image: "/hero-infrastructure-new.webp",
    imageWebp: "/hero-infrastructure-new.webp",
    category: "CRITICAL INFRASTRUCTURE",
    title: "Protecting Critical\nInfrastructure",
    subtitle: "Safeguarding and modernizing the nation's critical infrastructure with enterprise-grade security, resilience, and compliance frameworks.",
    ctaText: "OUR APPROACH",
    ctaLink: "/our-approach",
    tabLabel: "Infrastructure",
    objectPosition: ["center 35%", "center 30%", "center 25%"],
  },
];

// Check WebP support
function supportsWebP(): boolean {
  if (typeof window === "undefined") return false;
  const canvas = document.createElement("canvas");
  if (canvas.getContext && canvas.getContext("2d")) {
    return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }
  return false;
}

function useBreakpoint() {
  const [bp, setBp] = useState<0 | 1 | 2>(typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : typeof window !== 'undefined' && window.innerWidth >= 640 ? 1 : 0);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setBp(w >= 768 ? 2 : w >= 640 ? 1 : 0);
    };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return bp;
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [webpSupported, setWebpSupported] = useState(true);
  const bp = useBreakpoint();

  // Detect WebP support on mount
  useEffect(() => {
    setWebpSupported(supportsWebP());
  }, []);

  // Handle image load
  const handleImageLoad = useCallback((slideId: number) => {
    setLoadedImages((prev) => new Set(prev).add(slideId));
  }, []);

  // Preload next slide image
  useEffect(() => {
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    const nextSlide = slides[nextSlideIndex];
    const imgSrc = webpSupported ? nextSlide.imageWebp : nextSlide.image;

    const img = new Image();
    img.src = imgSrc;
    img.onload = () => handleImageLoad(nextSlide.id);
  }, [currentSlide, webpSupported, handleImageLoad]);

  // Auto-advance carousel - resets when user clicks a tab
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Get image source based on WebP support
  const getImageSrc = (slide: CarouselSlide) => {
    return webpSupported ? slide.imageWebp : slide.image;
  };

  return (
    <div className="relative w-full h-[420px] xs:h-[480px] sm:h-[520px] md:h-[580px] lg:h-[650px] xl:h-[750px] 2xl:h-[85vh] 2xl:min-h-[750px] overflow-hidden shrink-0">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Skeleton */}
          <div className="absolute inset-0">
            {/* Skeleton loader */}
            {!loadedImages.has(slide.id) && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                <Skeleton className="w-full h-full rounded-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              </div>
            )}

            {/* Actual image */}
            <picture>
              <source srcSet={slide.imageWebp} type="image/webp" />
              <source srcSet={slide.image} type="image/png" />
              <img
                src={getImageSrc(slide)}
                alt={slide.title}
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
                onLoad={() => handleImageLoad(slide.id)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  loadedImages.has(slide.id) ? "opacity-100" : "opacity-0"
                }`}
                style={{ objectPosition: slide.objectPosition[bp] }}
              />
            </picture>

            {/* Gradient overlays - reduced opacity */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/65 via-[#0A2540]/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 via-transparent to-[#0A2540]/10" />
          </div>
        </div>
      ))}

      {/* Text Content Overlay - Bain Style */}
      <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
        <div className="container pointer-events-auto">
          <div className="max-w-3xl">
            {/* Category Label */}
            <div
              className={`transition-all duration-700 ease-out ${
                currentSlide >= 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] text-white/70 uppercase">
                {slides[currentSlide].category}
              </span>
            </div>

            {/* H1 Headline */}
            <div
              className={`mt-3 sm:mt-4 transition-all duration-700 delay-100 ease-out ${
                currentSlide >= 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight whitespace-pre-line mb-4 sm:mb-5 md:mb-6">
                {slides[currentSlide].title}
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`transition-all duration-700 delay-200 ease-out ${
                currentSlide >= 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 font-light max-w-2xl leading-relaxed mb-6 sm:mb-8">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={`transition-all duration-700 delay-300 ease-out ${
                currentSlide >= 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href={slides[currentSlide].ctaLink}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white tracking-wide hover:gap-3 transition-all duration-300 group"
              >
                {slides[currentSlide].ctaText}
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Tabs - Bain Style */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        {/* Tab Navigation */}
        <div className="bg-[#0A2540]/80 backdrop-blur-md">
          <div className="container">
            <div className="flex items-stretch overflow-x-auto scrollbar-hide">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative flex-1 min-w-[100px] sm:min-w-[120px] px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${
                    index === currentSlide
                      ? "text-white"
                      : "text-white/50 hover:text-white/75"
                  }`}
                >
                  {/* Active indicator - top border */}
                  {index === currentSlide && (
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange-signature" />
                  )}
                  {slide.tabLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
