import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 'window-replacement',
    title: 'Window Replacement: Refresh and Revitalize',
    image: '/images/service_windows.jpg',
    accordions: [
      {
        id: 'curb-appeal',
        title: 'Enhanced Curb Appeal',
        content: 'Modern window frames and crisp sightlines instantly revitalize your home’s architecture. Upgrading outdated or cloudy glass elevates your neighborhood curb appeal and increases overall property value across Central Florida.',
      },
      {
        id: 'energy-efficiency',
        title: 'Improved Energy Efficiency',
        content: 'Florida heat puts heavy strain on air conditioners. Multi-pane insulated Low-E glass repels radiant solar heat, prevents internal thermal transfer, protects flooring from UV fading, and noticeably reduces monthly electric utility bills.',
      },
      {
        id: 'guidance',
        title: 'Professional Guidance',
        isDefaultOpen: true,
        bullets: [
          'Expert advice on selecting the right replacement windows based on your home’s design and your specific needs.',
          'A hassle-free process from consultation to installation, ensuring your complete satisfaction.',
        ],
      },
    ],
  },
  {
    id: 'door-installation',
    title: 'Secure and Stylish Entries: Sliding Glass & Patio Doors',
    image: '/images/service_doors.jpg',
    accordions: [
      {
        id: 'impact-resistant',
        title: 'Impact Resistant Performance',
        content: 'Engineered heavy-duty safety glass and reinforced frames resist high wind pressures and tropical summer storms, providing dependable protection for your family year-round.',
      },
      {
        id: 'indoor-outdoor',
        title: 'Seamless Indoor-Outdoor Flow',
        content: 'Tandem stainless steel rollers ensure effortless fingertip sliding. Enjoy natural light and easy access between your living room, kitchen, patio, and pool deck.',
      },
      {
        id: 'door-guidance',
        title: 'Professional Guidance',
        isDefaultOpen: true,
        bullets: [
          'Elevate your home’s security and aesthetics with our expert door installation services.',
          'Flawless rough-opening leveling, square alignment, and weather-tight silicone flashing for trouble-free operation.',
        ],
      },
    ],
  },
  {
    id: 'new-construction',
    title: 'New Construction & Picture Windows: Built for Florida Weather',
    image: '/images/service_new_construction.jpg',
    accordions: [
      {
        id: 'masonry-prep',
        title: 'Block Construction Masonry Prep',
        content: 'Windows in Florida concrete block require careful masonry prep, pressure-treated buck anchors, and specialized sealant to prevent water infiltration and guarantee code-compliant fit.',
      },
      {
        id: 'window-conversion',
        title: 'Window-to-Door Patio Conversions',
        content: 'Want direct access to your grill from the kitchen? We remove double windows, cleanly modify the wall opening, and install custom exterior sliding or hinged patio doors.',
      },
      {
        id: 'debris-cleanup',
        title: 'Professional Guidance',
        isDefaultOpen: true,
        bullets: [
          'Windows and doors transported in our dedicated enclosed trailer to arrive safe, dry, and clean on installation day.',
          'Full haul-away of old materials and renovation debris through our expanded junk removal and demolition services.',
        ],
      },
    ],
  },
];

export default function ServicesSection({ onOpenEstimate, onOpenServiceModal }) {
  // Store open state for each service accordion
  const [openAccordions, setOpenAccordions] = useState({
    'window-replacement': 'guidance',
    'door-installation': 'door-guidance',
    'new-construction': 'debris-cleanup',
  });

  const toggleAccordion = (serviceId, accordionId) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [serviceId]: prev[serviceId] === accordionId ? null : accordionId,
    }));
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading matching Reference Image 3 */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            From single window upgrades to whole-home window replacements and sliding patio door conversions.
          </p>
        </div>

        {/* Services List matching Reference Image 3 */}
        <div className="space-y-16 lg:space-y-20">
          {servicesData.map((service, index) => {
            const currentOpen = openAccordions[service.id];

            return (
              <div 
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-200/80"
              >
                {/* Left: Image with Title Badge matching Reference Image 3 */}
                <div className="lg:col-span-5 relative rounded-xl overflow-hidden shadow-md group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[280px] sm:h-[360px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Title overlay at the center/bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-sm">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Interactive Accordion matching Reference Image 3 */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {service.accordions.map((item) => {
                      const isOpen = currentOpen === item.id;

                      return (
                        <div
                          key={item.id}
                          className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                            isOpen 
                              ? 'border-sky-300 bg-brand-blueLight/60 shadow-sm' 
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          {/* Accordion Header */}
                          <button
                            onClick={() => toggleAccordion(service.id, item.id)}
                            className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                            aria-expanded={isOpen}
                          >
                            <span className={`text-base sm:text-lg font-bold transition-colors ${
                              isOpen ? 'text-brand-blue' : 'text-slate-800'
                            }`}>
                              {item.title}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                isOpen ? 'transform rotate-180 text-brand-blue' : 'text-slate-400'
                              }`}
                            />
                          </button>

                          {/* Accordion Content */}
                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base border-t border-sky-100">
                              {item.bullets ? (
                                <ul className="space-y-2.5 mt-1">
                                  {item.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-2.5">
                                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                                      <span className="leading-relaxed">{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="leading-relaxed">{item.content}</p>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* View More Button matching Reference Image 3 */}
                  <div className="pt-3">
                    <button
                      onClick={() => onOpenServiceModal(service)}
                      className="px-6 py-2.5 rounded-lg bg-brand-coral hover:bg-brand-coralHover text-white font-semibold text-sm shadow hover:shadow-md transition-all active:scale-[0.98] inline-flex items-center gap-2"
                    >
                      <span>View More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
