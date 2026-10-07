import React from 'react';
import { X, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenEstimate }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project Image */}
        <div className="relative h-64 sm:h-72 bg-slate-900 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-brand-coral" />
            <span>{project.location}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {project.description}
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Installation Details
            </div>
            <p className="text-xs sm:text-sm text-slate-700">
              {project.details}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenEstimate();
            }}
            className="px-5 py-2 rounded-lg bg-brand-coral hover:bg-brand-coralHover text-white text-xs sm:text-sm font-bold shadow hover:shadow-md transition-all active:scale-[0.98] flex items-center gap-1.5"
          >
            <span>Request Similar Installation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
