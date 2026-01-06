import { useState, useEffect, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface CarouselSlide {
  id: number;
  image: string;
  imageWebp: string;
  title: string;
  subtitle: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/capitol-building-new.webp",
    imageWebp: "/capitol-building-new.webp",
    title: "Powering Government Mission Success",
    subtitle: "For 25 years, we have partnered with federal, state, and local agencies to modernize critical systems, secure sensitive data, and deliver superior citizen services.",
  },
  {
    id: 2,
    image: "/fedramp-hero.webp",
    imageWebp: "/fedramp-hero.webp",
    title: "Mission-First, Compliance-Assured",
    subtitle: "Accelerate your path to FedRAMP authorization with our battle-tested methodology. We've helped 15+ organizations achieve FedRAMP compliance in an average of 9 months.",
  },
  {
    id: 3,
    image: "/hero-defense-cyber.png",
    imageWebp: "/hero-defense-cyber.webp",
    title: "Defending the Nation's Digital Infrastructure",
    subtitle: "Protect your DoD contracts with CMMC certification. Our comprehensive assessment and implementation services ensure you meet all cybersecurity requirements.",
  },
  {
    id: 4,
    image: "/images/hero-cloud-migration.png",
    imageWebp: "/images/hero-cloud-migration.webp",
    title: "Secure Cloud Migration for Government",
    subtitle: "Modernize your infrastructure with secure migration to AWS GovCloud, Azure Government, or Google Cloud for Government with 99.99% uptime.",
  },
  {
    id: 5,
    image: "/industries-regulated.jpg",
    imageWebp: "/industries-regulated.jpg",
    title: "Government-Grade Solutions for Regulated Industries",
    subtitle: "We apply the same rigorous standards of security and compliance demanded by our government partners to solve challenges for regulated industries.",
  },
  {
    id: 6,
    image: "/hero-infrastructure-new.webp",
    imageWebp: "/hero-infrastructure-new.webp",
    title: "Protecting Critical Infrastructure",
    subtitle: "Safeguarding and modernizing the nation's critical infrastructure with enterprise-grade security, resilience, and compliance frameworks.",
  },
];

// Check WebP support
function supportsWebP(): boolean {
  if (typeof window === 'undefined') return false;
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [webpSupported, setWebpSupported] = useState(true);

  // Detect WebP support on mount
  useEffect(() => {
    setWebpSupported(supportsWebP());
  }, []);

  // Handle image load
  const handleImageLoad = useCallback((slideId: number) => {
    setLoadedImages(prev => new Set(prev).add(slideId));
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

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Get image source based on WebP support
  const getImageSrc = (slide: CarouselSlide) => {
    return webpSupported ? slide.imageWebp : slide.image;
  };

  return (
    <div className="relative w-full h-[320px] xs:h-[380px] sm:h-[450px] md:h-[520px] lg:h-[600px] xl:h-[700px] 2xl:h-[85vh] 2xl:min-h-[700px] overflow-hidden shrink-0">
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
            {/* Skeleton loader - shows until image is loaded */}
            {!loadedImages.has(slide.id) && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                <Skeleton className="w-full h-full rounded-none" />
                {/* Shimmer effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              </div>
            )}
            
            {/* Actual image with picture element for format fallback */}
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
                  loadedImages.has(slide.id) ? 'opacity-100' : 'opacity-0'
                } ${
                  slide.id === 1 ? 'object-[center_20%] sm:object-[center_10%] md:object-[center_0%]' : 
                  slide.id === 3 || slide.id === 4 ? 'object-[center_30%] sm:object-[center_20%] md:object-[center_15%]' : 
                  'object-[center_40%] sm:object-[center_30%] md:object-center'
                }`}
              />
            </picture>
          </div>
        </div>
      ))}

      {/* Bottom Title Banner - Responsive text sizing and padding */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container py-3 sm:py-4 md:py-6 lg:py-8">
          {/* Text content with localized semi-transparent backdrop */}
          <div className="inline-block max-w-full">
            <div className="bg-[#2A2A2A]/50 sm:bg-[#2A2A2A]/40 backdrop-blur-[4px] sm:backdrop-blur-[6px] px-3 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 rounded-sm">
              {/* Main Title - Responsive sizing */}
              <h1 
                className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white tracking-wide mb-1.5 sm:mb-2 md:mb-3 leading-tight"
              >
                {slides[currentSlide].title}
              </h1>
              {/* Subtitle - Responsive sizing with line clamping on mobile */}
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/90 font-light max-w-3xl leading-relaxed line-clamp-3 sm:line-clamp-none">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Responsive positioning */}
      <div className="absolute bottom-24 xs:bottom-28 sm:bottom-32 md:bottom-36 lg:bottom-40 xl:bottom-44 right-3 sm:right-4 md:right-6 lg:right-8 z-20 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 min-w-[12px] min-h-[12px] sm:min-w-[16px] sm:min-h-[16px] flex items-center justify-center ${
              index === currentSlide 
                ? "bg-white w-4 sm:w-6" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
