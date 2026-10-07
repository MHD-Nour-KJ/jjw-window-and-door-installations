import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function ParallaxBanner2({ onOpenEstimate }) {
  return (
    <section className="relative w-full py-28 sm:py-36 overflow-hidden text-center text-white select-none">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url('/images/service_windows.jpg')` }}
      />

      {/* Subtle readability wash */}
      <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[0.5px]" />

      {/* Content Container matching Reference Image 5 */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Sky Blue Accent Line matching Reference Image 5 */}
        <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-sky-400 mx-auto mb-6 rounded-full shadow-sm" />

        {/* Headline matching Reference Image 5 */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md">
          Get Started with JJW Window and Doors Today
        </h2>

        {/* Subtitle matching Reference Image 5 */}
        <p className="mt-4 text-base sm:text-lg text-sky-100 max-w-3xl mx-auto leading-relaxed drop-shadow">
          Elevate your living spaces with our expert window and door services. Trust JJW Window and Doors to bring quality craftsmanship, innovation, and customer satisfaction to your home. Contact us for a consultation and embark on the journey to transform your house into the home of your dreams.
        </p>

        {/* Coral CTA Button matching Reference Image 5 */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenEstimate}
            className="px-8 py-3.5 rounded-lg bg-brand-coral hover:bg-brand-coralHover text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Call Now to Book Your Appointment!</span>
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
    </section>
  );
}
