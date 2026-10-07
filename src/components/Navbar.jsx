import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenEstimate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowsDropdown, setWindowsDropdown] = useState(false);
  const [doorsDropdown, setDoorsDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* 1. Top Utility Bar matching Reference Image 1 */}
      <div className="bg-brand-blueTop text-white py-2 px-4 sm:px-6 lg:px-12 text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: Location Pin */}
          <div className="flex items-center gap-1.5 text-sky-100 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-brand-coral flex-shrink-0" />
            <span>Deltona, FL · Serving Volusia, Seminole, Orange, Brevard, Flagler &amp; Marion Counties</span>
          </div>

          {/* Right: Email and Phone */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="mailto:jjw.windowdoor@gmail.com" 
              className="flex items-center gap-1.5 text-sky-100 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-coral flex-shrink-0" />
              <span>jjw.windowdoor@gmail.com</span>
            </a>
            <a 
              href="tel:13862858675" 
              className="flex items-center gap-1.5 text-sky-100 hover:text-white transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-brand-coral flex-shrink-0" />
              <span>(386) 285-8675</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-12 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo with Arched Window Emblem */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center p-1 group-hover:border-sky-400 transition-colors">
              <svg viewBox="0 0 40 44" fill="none" className="w-full h-full">
                <path d="M4 22 C4 10 10 3 20 3 C30 3 36 10 36 22 L36 39 L4 39 Z" stroke="#0284c7" strokeWidth="2.5" fill="#f0f9ff" />
                <line x1="20" y1="3" x2="20" y2="39" stroke="#0284c7" strokeWidth="2" />
                <line x1="4" y1="24" x2="36" y2="24" stroke="#0284c7" strokeWidth="2" />
                <circle cx="20" cy="24" r="6" fill="#f26a36" fillOpacity="0.25" stroke="#f26a36" strokeWidth="1.2" />
                <rect x="2" y="39" width="36" height="3" rx="1.5" fill="#0284c7" />
              </svg>
            </div>
            <div>
              <div className="font-extrabold text-xl sm:text-2xl text-brand-blue tracking-tight leading-none">
                JJW
              </div>
              <div className="text-xs sm:text-[13px] font-semibold text-slate-800 tracking-normal leading-tight">
                Window &amp; Door Installations
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-slate-700">
            {/* Home - Active coral in reference */}
            <a href="#" className="text-brand-coral font-semibold hover:text-brand-coralHover transition-colors">
              Home
            </a>

            <a href="#about" className="hover:text-brand-blue transition-colors">
              About Us
            </a>

            {/* Windows Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setWindowsDropdown(true)}
              onMouseLeave={() => setWindowsDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:text-brand-blue transition-colors focus:outline-none py-1">
                <span>Windows</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {windowsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-elevated border border-slate-100 py-2.5 z-50">
                  <a href="#services" className="block px-4 py-2 hover:bg-sky-50 text-slate-700 hover:text-brand-blue text-sm transition-colors">
                    Energy-Efficient Replacements
                  </a>
                  <a href="#services" className="block px-4 py-2 hover:bg-sky-50 text-slate-700 hover:text-brand-blue text-sm transition-colors">
                    New Construction Windows
                  </a>
                  <a href="#services" className="block px-4 py-2 hover:bg-sky-50 text-slate-700 hover:text-brand-blue text-sm transition-colors">
                    Picture &amp; Architectural Windows
                  </a>
                  <a href="#services" className="block px-4 py-2 hover:bg-sky-50 text-slate-700 hover:text-brand-blue text-sm transition-colors">
                    Hurricane &amp; Weather Protection
                  </a>
                </div>
              )}
            </div>

            {/* Doors Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDoorsDropdown(true)}
              onMouseLeave={() => setDoorsDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:text-brand-blue transition-colors focus:outline-none py-1">
                <span>Doors</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {doorsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-elevated border border-slate-100 py-2.5 z-50">
                  <a href="#services" className="block px-4 py-2 hover:bg-sky-50 text-slate-700 hover:text-brand-blue text-sm transition-colors">
                    Sliding Glass Patio Doors
                  </a>
                  <a href="#services" className="block px-4 py-2 hover:bg-sky-50 text-slate-700 hover:text-brand-blue text-sm transition-colors">
                    Window-to-Door Grill Conversions
                  </a>
                  <a href="#services" className="block px-4 py-2 hover:bg-sky-50 text-slate-700 hover:text-brand-blue text-sm transition-colors">
                    Entry &amp; French Doors
                  </a>
                </div>
              )}
            </div>

            <a href="#gallery" className="hover:text-brand-blue transition-colors">
              Gallery
            </a>

            <a href="#services" className="hover:text-brand-blue transition-colors">
              Services
            </a>

            <a href="#contact" className="hover:text-brand-blue transition-colors">
              Contact
            </a>
          </div>

          {/* Right Action: Get a Free Estimate CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEstimate}
              className="px-5 sm:px-6 py-2.5 rounded-lg bg-brand-coral hover:bg-brand-coralHover text-white font-semibold text-sm sm:text-[15px] shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
            >
              Get a Free Estimate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenEstimate}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-brand-coral text-white text-xs font-semibold"
            >
              Free Estimate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-blue rounded-lg hover:bg-slate-50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 space-y-2 pb-3">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-semibold text-brand-coral bg-orange-50"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50"
            >
              About Us
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50"
            >
              Windows &amp; Replacements
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50"
            >
              Sliding Glass Doors &amp; Conversions
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50"
            >
              Project Gallery
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact Us
            </a>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="w-full py-2.5 rounded-lg bg-brand-coral text-white font-semibold text-center text-sm shadow"
              >
                Get a Free Estimate
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
