import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onOpenEstimate }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image banner */}
        <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block py-0.5 px-2.5 rounded-full bg-brand-coral text-white text-xs font-bold mb-1.5">
              Service Overview
            </span>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">
          
          <div className="space-y-4">
            <h4 className="text-base font-bold text-brand-blue flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-coral" />
              <span>Full Installation Scope &amp; Craftsmanship</span>
            </h4>

            {service.accordions.map((acc) => (
              <div key={acc.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="font-bold text-slate-900 text-sm sm:text-base">
                  {acc.title}
                </div>
                {acc.content && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {acc.content}
                  </p>
                )}
                {acc.bullets && (
                  <ul className="space-y-1.5 pt-1">
                    {acc.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Operational Details */}
          <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 text-xs sm:text-sm space-y-2">
            <div className="font-bold text-brand-blue flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-coral" />
              <span>The JJW Window &amp; Door Standard</span>
            </div>
            <p className="text-slate-600">
              Every project is measured with precision, protected during enclosed transit, sealed against extreme Florida wind and rain, and cleaned up completely upon completion.
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Questions? Call Angela at <span className="font-bold text-slate-800">(386) 285-8675</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors flex-1 sm:flex-none"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenEstimate();
              }}
              className="px-5 py-2 rounded-lg bg-brand-coral hover:bg-brand-coralHover text-white text-xs sm:text-sm font-bold shadow hover:shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
            >
              <span>Get Estimate for This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
