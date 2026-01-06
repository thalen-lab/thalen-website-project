import { Link } from "wouter";
import { Megaphone } from "lucide-react";
import { useEffect, useState } from "react";

interface Announcement {
  id: string;
  headline: string;
  link: string;
}

const announcements: Announcement[] = [
  {
    id: "1",
    headline: "Thalen Partners with AWS to Expand Federal Cloud Solutions",
    link: "/insights/multi-cloud-strategy",
  },
  {
    id: "2",
    headline: "Welcome Dr. Sarah Chen, New VP of AI & Machine Learning",
    link: "/about",
  },
  {
    id: "3",
    headline: "Thalen Launches STEM Scholarship Program for Veterans",
    link: "/about",
  },
  {
    id: "4",
    headline: "Named Top Federal IT Contractor by Washington Technology",
    link: "/about",
  },
  {
    id: "5",
    headline: "Strategic Alliance with Microsoft for Azure Government",
    link: "/partners",
  },
  {
    id: "6",
    headline: "Thalen Achieves FedRAMP High Authorization",
    link: "/services/cybersecurity",
  },
];

export default function AnnouncementTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentAnnouncement = announcements[currentIndex];

  return (
    <div className="bg-[#0A2540] border-b border-[#1a3a5c]">
      <div className="container">
        <div className="flex items-center h-20 gap-6">
          {/* Label */}
          <div className="flex items-center gap-3 shrink-0">
            <Megaphone className="w-6 h-6 text-[#E85D2D]" />
            <span className="text-base font-bold uppercase tracking-wider text-white">
              Latest
            </span>
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-white/25 shrink-0" />

          {/* Announcement */}
          <div className="flex-1 overflow-hidden">
            <Link
              href={currentAnnouncement.link}
              className={`block text-lg font-medium text-white hover:text-[#E85D2D] transition-all duration-500 ${
                isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              {currentAnnouncement.headline}
              <span className="ml-3 text-[#E85D2D] font-bold">→</span>
            </Link>
          </div>

          {/* Dots indicator - hidden on mobile/tablet, visible on desktop */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#E85D2D] w-6"
                    : "bg-white/40 hover:bg-white/60 w-2.5"
                }`}
                aria-label={`Go to announcement ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
