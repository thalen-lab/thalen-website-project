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
    title: "Defending Digital Infrastructure",
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

      {/* Bottom Title Banner - Tygart Style: Extends exactly to left and bottom edges with NO gap */}
      <div 
        className="absolute bottom-0 left-0 z-20"
        style={{ width: 'auto', maxWidth: '75%' }}
      >
        {/* Semi-transparent backdrop - NO left margin/padding on the container, only internal padding for text */}
        <div className="bg-[#1a1a1a]/75 backdrop-blur-[8px]">
          {/* Inner padding for text content only - left padding pushes text away from edge */}
          <div className="pl-4 sm:pl-6 md:pl-10 lg:pl-14 xl:pl-20 pr-8 sm:pr-10 md:pr-14 lg:pr-20 xl:pr-28 py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12">
            {/* Main Title - Larger, more prominent sizing */}
            <h1 
              className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] 2xl:text-5xl font-semibold text-white tracking-wide mb-2 sm:mb-3 md:mb-4 leading-tight"
            >
              {slides[currentSlide].title}
            </h1>
            {/* Subtitle - Larger, more readable sizing */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-[1.35rem] xl:text-2xl text-white/90 font-light max-w-4xl leading-relaxed line-clamp-3 sm:line-clamp-none">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
