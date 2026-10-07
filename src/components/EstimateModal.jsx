import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, Sparkles, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EstimateModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Window Replacement',
    city: 'Deltona',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-brand-blueTop px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-brand-coral" />
            <h3 className="text-lg font-bold tracking-tight">Request Your Free Estimate</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-sky-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">
                Estimate Request Received!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-800">{formData.name || 'there'}</span>. Angela will review your {formData.projectType.toLowerCase()} details and call or text you shortly at <span className="font-semibold text-slate-800">{formData.phone || 'your phone number'}</span> to schedule your free in-home consultation.
              </p>

              <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 text-left text-xs sm:text-sm text-slate-700 space-y-1">
                <div className="font-bold text-brand-blue">Need immediate assistance?</div>
                <div>Call Angela directly: <a href="tel:13862858675" className="font-bold text-brand-coral hover:underline">(386) 285-8675</a></div>
                <div>Email: <span className="font-medium text-slate-800">jjw.windowdoor@gmail.com</span></div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-brand-blue hover:bg-brand-blueDark text-white text-sm font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600">
                No job too big or small! Complete this short form for a free, no-obligation quote from JJW Window &amp; Door Installations.
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(386) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none bg-white transition-colors"
                  >
                    <option value="Window Replacement">Window Replacement</option>
                    <option value="Sliding Glass Patio Door">Sliding Glass Patio Door</option>
                    <option value="New Construction Windows">New Construction Windows</option>
                    <option value="Window-to-Door Conversion">Window-to-Door Conversion</option>
                    <option value="Soffit, Fascia & Screen Rooms">Soffit, Fascia &amp; Screen Rooms</option>
                    <option value="Junk Removal & Demolition">Junk Removal &amp; Demolition</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / Area in Central Florida
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Deltona, Port Orange, Sanford"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Project Notes / Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the windows or doors you would like replaced or installed..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-brand-coral hover:bg-brand-coralHover text-white font-bold text-sm shadow hover:shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Send Free Estimate Request</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your information is strictly protected and never shared.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
