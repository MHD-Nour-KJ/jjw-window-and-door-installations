import React from 'react';
import { MapPin, Phone, Mail, Shield, CheckCircle2 } from 'lucide-react';

export default function Footer({ onOpenEstimate }) {
  return (
    <footer id="contact" className="bg-brand-footerBg text-slate-800 pt-16 sm:pt-20 pb-12 border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* 4-Column Grid matching Reference Image 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-sky-200/80">
          
          {/* Column 1: Brand Logo & Information (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-sky-300 flex items-center justify-center p-1 shadow-sm">
                <svg viewBox="0 0 40 44" fill="none" className="w-full h-full">
                  <path d="M4 22 C4 10 10 3 20 3 C30 3 36 10 36 22 L36 39 L4 39 Z" stroke="#0284c7" strokeWidth="2.5" fill="#f0f9ff" />
                  <line x1="20" y1="3" x2="20" y2="39" stroke="#0284c7" strokeWidth="2" />
                  <line x1="4" y1="24" x2="36" y2="24" stroke="#0284c7" strokeWidth="2" />
                  <circle cx="20" cy="24" r="6" fill="#f26a36" fillOpacity="0.25" stroke="#f26a36" strokeWidth="1.2" />
                  <rect x="2" y="39" width="36" height="3" rx="1.5" fill="#0284c7" />
                </svg>
              </div>
              <div>
                <div className="font-extrabold text-2xl text-brand-blue tracking-tight leading-none">
                  JJW
                </div>
                <div className="text-xs font-semibold text-slate-800 tracking-normal leading-tight">
                  Window &amp; Door Installations
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed max-w-sm pt-1">
              "No job too big or small call us today!" Quality craftsmanship, weather-tight Florida masonry installation, and dependable service throughout Central Florida.
            </p>

            <div className="text-xs font-semibold text-brand-blue pt-1">
              FL Sunbiz Registered · Licensed &amp; Insured Home Improvement
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEstimate}
                className="px-5 py-2.5 rounded-lg bg-brand-coral hover:bg-brand-coralHover text-white text-xs sm:text-sm font-semibold shadow hover:shadow-md transition-all active:scale-[0.98]"
              >
                Request a Free Quote
              </button>
            </div>
          </div>

          {/* Column 2: Windows (lg:col-span-2) matching Reference Image 5 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-brand-blue tracking-tight">
              Windows
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 font-medium">
              <li>
                <a href="#services" className="hover:text-brand-coral transition-colors">
                  Replacement Windows
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-coral transition-colors">
                  Picture Windows
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-coral transition-colors">
                  Energy-Efficient Low-E
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-coral transition-colors">
                  New Construction Installs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-coral transition-colors">
                  Hurricane Protection
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Doors & Extra Services (lg:col-span-3) matching Reference Image 5 */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-brand-blue tracking-tight">
              Doors &amp; Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 font-medium">
              <li>
                <a href="#services" className="hover:text-brand-coral transition-colors">
                  Sliding Glass Patio Doors
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-coral transition-colors">
                  Window-to-Door Conversions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-coral transition-colors">
                  Soffit and Fascia Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-coral transition-colors">
                  Screen Rooms &amp; Blinds
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-coral transition-colors">
                  Junk Removal &amp; Demolition
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Payment Info (lg:col-span-3) matching Reference Image 5 */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-brand-blue tracking-tight">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm text-slate-700">
              
              {/* Address / Service Area */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-coral flex-shrink-0 mt-0.5" />
                <span>
                  Deltona, FL 32764<br />
                  <span className="text-xs text-slate-600">
                    Serving Volusia, Seminole, Orange, Brevard, Flagler &amp; Marion
                  </span>
                </span>
              </div>

              {/* Primary Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-coral flex-shrink-0" />
                <a href="tel:13862858675" className="hover:text-brand-coral transition-colors font-semibold">
                  (386) 285-8675 <span className="text-xs font-normal text-slate-600">(Angela)</span>
                </a>
              </div>

              {/* Secondary Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-coral flex-shrink-0" />
                <a href="tel:13863201575" className="hover:text-brand-coral transition-colors font-semibold">
                  (386) 320-1575
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-coral flex-shrink-0" />
                <a href="mailto:jjw.windowdoor@gmail.com" className="hover:text-brand-coral transition-colors break-all">
                  jjw.windowdoor@gmail.com
                </a>
              </div>

            </div>

            {/* Payment Methods matching Reference Image 5 */}
            <div className="pt-3">
              <div className="text-xs font-bold text-slate-600 mb-1.5">
                Accepted Payment Methods:
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[11px] font-bold text-blue-800 shadow-2xs">
                  VISA
                </span>
                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[11px] font-bold text-red-600 shadow-2xs">
                  MasterCard
                </span>
                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[11px] font-bold text-blue-600 shadow-2xs">
                  AMEX
                </span>
                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[11px] font-bold text-orange-600 shadow-2xs">
                  Discover
                </span>
                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[11px] font-bold text-slate-700 shadow-2xs">
                  Check / Cash
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Subfooter Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            © 2026 JJW Window &amp; Door Installations, INC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-coral transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-brand-coral transition-colors">Terms of Service</a>
            <span>·</span>
            <span>Central Florida Windows &amp; Doors</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
