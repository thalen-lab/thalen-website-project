import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

interface CarouselSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

const slides: CarouselSlide[] = [
  {
    title: "Intelligence, Delivered",
    subtitle: "Who we are",
    description: "We help customers in every industry ensure their essential systems will work when, where, and how they need them to. But steady operations aren't enough in today's dynamic IT landscape—NexDyne brings the data, insights, patterns and proven methodologies businesses need to stay competitive.",
    image: "/government-data-centers-t-jpg.webp",
    imageAlt: "Intelligence delivered through advanced data analytics"
  },
  {
    title: "Data-Driven Decisions",
    subtitle: "What we do",
    description: "Transform raw data into actionable intelligence. Our advanced analytics platforms and AI-powered insights enable federal agencies and enterprises to make informed decisions faster, reduce operational costs, and achieve measurable mission outcomes.",
    image: "/hero-analytics-viz.png",
    imageAlt: "Real-time data analytics and business intelligence"
  },
  {
    title: "Strategic Insights",
    subtitle: "How we deliver",
    description: "Leverage proven methodologies and cutting-edge technology to unlock strategic advantages. From predictive analytics to process automation, we deliver solutions that drive competitive edge and operational excellence across your organization.",
    image: "/hero-tech-dashboard.jpg",
    imageAlt: "Strategic planning and technology roadmap"
  },
  {
    title: "Operational Excellence",
    subtitle: "Why it matters",
    description: "Achieve sustained performance improvements through continuous innovation. Our FedRAMP-authorized platforms and compliance-first approach ensure your mission-critical systems operate at peak efficiency while meeting the strictest security standards.",
    image: "/hero-datacenter.jpg",
    imageAlt: "Operational excellence and continuous improvement"
  }
];

export default function WhoWeAreSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentContent = slides[currentSlide];

  return (
    <section 
      className="relative py-20 md:py-28 bg-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Animated Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            {/* Subtitle with fade transition */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`subtitle-${currentSlide}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider"
              >
                {currentContent.subtitle}
              </motion.p>
            </AnimatePresence>

            {/* Main title with fade transition */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
              >
                {currentContent.title}
              </motion.h2>
            </AnimatePresence>

            {/* Description with fade transition */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`description-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-lg text-slate-600 leading-relaxed mb-8"
              >
                {currentContent.description}
              </motion.p>
            </AnimatePresence>

            {/* Progress indicators */}
            <div className="flex gap-2 mb-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-12 bg-accent' 
                      : 'w-8 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/about">
                  Our story
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2">
                <Link href="/about#awards">
                  Awards and recognition
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2">
                <Link href="/about#team">
                  Join our team
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Dynamic Image with parallax effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl rounded-lg">
              {/* Image carousel with crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${currentSlide}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <ImageWithLoader
                    src={currentContent.image}
                    alt={currentContent.imageAlt}
                    className="w-full h-auto"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none"></div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative accent element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
              />
            </div>

            {/* Floating metric card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white shadow-xl rounded-lg p-6 border-l-4 border-accent hidden lg:block"
            >
              <div className="text-4xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-slate-600 font-medium">Years of Excellence</div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
