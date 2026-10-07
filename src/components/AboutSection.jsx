import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Truck } from 'lucide-react';

export default function AboutSection({ onOpenEstimate }) {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Prose, and Trust Badges matching Reference Image 2 */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Blue Heading matching Reference Image 2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
              At JJW Window &amp; Door Installations, We Understand That Your Home is More Than Just a Physical Space
            </h2>

            {/* Direct human body text */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              It is a reflection of your style, comfort, and security. Our mission is to enhance your living experience through exceptional window and door solutions. With a commitment to quality craftsmanship, innovative design, and customer satisfaction, we take pride in transforming houses into homes. Explore the unparalleled services we offer to bring beauty, functionality, and security to your living spaces.
            </p>

            {/* Operational Central Florida Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-coral flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">Airtight Florida weather sealing &amp; masonry prep</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-coral flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">Dedicated enclosed trailer for clean, dry transit</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-coral flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">Licensed &amp; insured home improvement specialist</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-coral flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">Free, transparent estimates with zero pressure</span>
              </div>
            </div>

            {/* Trust Badges matching Reference Image 2 */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              
              {/* BBB Accredited A+ Badge */}
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-sky-200 bg-sky-50/60 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-blue text-white flex items-center justify-center font-black text-lg">
                  BBB
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Accredited Business
                  </div>
                  <div className="text-base font-extrabold text-brand-blue leading-tight flex items-center gap-1">
                    <span>A+ Rating</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </div>

              {/* Customer Reviews 5/5 Stars */}
              <div className="flex flex-col">
                <div className="text-xs font-semibold text-slate-500">
                  Customer Reviews
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex items-center gap-1 text-brand-amber">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-amber text-brand-amber" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-800">5.0 / 5</span>
                </div>
                <span className="text-[11px] text-slate-500">Verified Central Florida Homeowners</span>
              </div>

            </div>

            {/* Action button */}
            <div className="pt-2">
              <button
                onClick={onOpenEstimate}
                className="px-6 py-3 rounded-lg bg-brand-coral hover:bg-brand-coralHover text-white font-semibold text-sm shadow hover:shadow-md transition-all active:scale-[0.98]"
              >
                Schedule Your Free In-Home Estimate
              </button>
            </div>

          </div>

          {/* Right Column: Sliding Glass Door Photography matching Reference Image 2 */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-100 group">
              <img 
                src="/images/intro_doors.jpg" 
                alt="Modern white sliding glass doors looking out onto Florida patio pergola"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Subtle floating badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-100 shadow-md">
                <div className="flex items-center gap-2 text-brand-blue font-bold text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-brand-coral" />
                  <span>Precision Installation</span>
                </div>
                <p className="text-xs text-slate-600 mt-0.5">
                  Built to keep Florida heat and driving rain outside while keeping your home quiet.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
