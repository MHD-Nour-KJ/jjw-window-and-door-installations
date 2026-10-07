import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Calendar } from 'lucide-react';

const slides = [
  {
    image: '/images/hero_1.jpg',
    title: 'Welcome to JJW Window and Doors:',
    subtitle: 'Transforming Homes with Quality Craftsmanship',
    badge: 'Deltona & Central Florida Specialist',
  },
  {
    image: '/images/hero_slide_2.jpg',
    title: 'Built for Florida Weather:',
    subtitle: 'Energy-Efficient Windows and Weather-Tight Installations',
    badge: 'Masonry Block Sealing & Impact Defense',
  },
  {
    image: '/images/hero_3.jpg',
    title: 'Seamless Indoor-Outdoor Living:',
    subtitle: 'Smooth Gliding Patio Doors and Custom Kitchen Conversions',
    badge: 'Sliding Glass Doors & Patio Entries',
  }
];

export default function HeroCarousel({ onOpenEstimate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay slides every 6 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      className="relative w-full h-[540px] sm:h-[620px] lg:h-[700px] overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Parallax Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center parallax-bg transform transition-transform duration-700"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Natural readability scrim: soft bottom/center gradient to ensure text readability without obscuring photography */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/30 to-slate-900/10 pointer-events-none" />

            {/* Slide Content centered exactly like Reference Image 1 */}
            <div className="relative z-20 h-full max-w-5xl mx-auto px-6 sm:px-12 flex flex-col items-center justify-center text-center">
              <span className="inline-block py-1 px-3.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-medium mb-4 shadow-sm border border-white/30">
                {slide.badge}
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md max-w-4xl">
                {slide.title}
              </h1>

              <p className="mt-3 sm:mt-5 text-lg sm:text-2xl text-sky-50 font-normal drop-shadow max-w-3xl">
                {slide.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={onOpenEstimate}
                  className="px-7 py-3.5 rounded-lg bg-brand-coral hover:bg-brand-coralHover text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Get a Free Estimate</span>
                </button>

                <a
                  href="tel:13862858675"
                  className="px-6 py-3.5 rounded-lg bg-white/90 hover:bg-white text-slate-900 font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-brand-blue" />
                  <span>(386) 285-8675</span>
                </a>
              </div>
            </div>
          </div>
        );
      })}

      {/* Left Navigation Arrow (<) */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-105 focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Right Navigation Arrow (>) */}
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-105 focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Bottom Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {slides.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrentSlide(dotIdx)}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              dotIdx === currentSlide
                ? 'w-8 h-2.5 bg-white shadow'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${dotIdx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
