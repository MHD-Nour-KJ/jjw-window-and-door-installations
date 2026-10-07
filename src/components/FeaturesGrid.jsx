import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    id: 'precision',
    title: 'Precision Craftsmanship',
    description: 'Impeccable window installation that stands up to Florida weather with airtight sealing, level jambs, and flawless alignment on every frame.',
  },
  {
    id: 'energy',
    title: 'Energy-Efficient Solutions',
    description: 'Upgrade to energy-efficient insulated windows that lower your electric bill, deflect intense radiant heat, and protect interiors from UV rays.',
  },
  {
    id: 'style',
    title: 'Style and Variety',
    description: 'Choose from a wide range of picture windows, single-hung, double-hung, and sliding glass configurations tailored to your home’s aesthetic.',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading matching Reference Image 4 */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue tracking-tight">
            Enhance Your Home with Expert Window Installation
          </h2>
          <p className="mt-3 text-slate-600 text-base max-w-2xl mx-auto">
            Engineered for durability, security, and lower energy costs throughout Central Florida.
          </p>
        </div>

        {/* 3-Column Features Grid matching Reference Image 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {features.map((item) => (
            <div 
              key={item.id}
              className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50/60 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/30 transition-all duration-200 group"
            >
              {/* Coral Orange Checkmark Box matching Reference Image 4 */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-brand-coral flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[3]" />
              </div>

              {/* Title & Description matching Reference Image 4 */}
              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-brand-blue tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
