import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Whole-Home Replacement Windows',
    location: 'Deltona, FL',
    category: 'windows',
    image: '/images/hero_slide_2.jpg',
    description: 'Upgraded outdated drafty windows with clean, energy-efficient Low-E replacement windows, improving comfort, insulation, and curb appeal.',
    details: 'Block construction installation with high-grade Florida silicone sealing and interior trim restoration.'
  },
  {
    id: 2,
    title: 'Garage Addition Picture Windows',
    location: 'Port Orange, FL',
    category: 'windows',
    image: '/images/service_new_construction.jpg',
    description: 'Installed 3 new picture windows set in concrete block construction to introduce natural light while maintaining a clean modern exterior.',
    details: 'Proper masonry prep, pressure-treated buck anchors, and weather-tight perimeter flashing.'
  },
  {
    id: 3,
    title: 'Kitchen Double Window to Patio Door Conversion',
    location: 'Deltona, FL',
    category: 'doors',
    image: '/images/intro_doors.jpg',
    description: 'Homeowner wanted direct access to his grill from the kitchen. We cleanly transformed a double window opening into a smooth sliding patio door.',
    details: 'Wall cut, header adjustment, custom sliding door installation, and seamless interior drywall integration.'
  },
  {
    id: 4,
    title: 'Energy-Efficient Dining Room Windows',
    location: 'Volusia County, FL',
    category: 'windows',
    image: '/images/service_windows.jpg',
    description: 'Large picture windows with high solar heat gain rejection, framing Florida landscaping while keeping the indoor living space cool.',
    details: 'Multi-chamber vinyl frames with Argon-filled insulated double glazing.'
  },
  {
    id: 5,
    title: 'Sliding Glass Door Replacement',
    location: 'Leesburg, FL',
    category: 'doors',
    image: '/images/service_doors.jpg',
    description: 'Replaced a heavy, weathered patio slider with an effortless glide multi-track sliding glass door with stainless steel hardware.',
    details: 'Tandem rollers, heavy-duty threshold track, and dual-point mortise security lock.'
  },
  {
    id: 6,
    title: 'Clean Enclosed Trailer Delivery',
    location: 'Central Florida Service Area',
    category: 'operations',
    image: '/images/hero_1.jpg',
    description: 'Our dedicated enclosed equipment trailer keeps every customer window and door clean, dry, and protected for installation day.',
    details: 'Protected transport prevents transit dirt, rain exposure, or road debris before installation starts.'
  }
];

export default function ProjectGallery({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-brand-blue text-xs sm:text-sm font-semibold mb-3 border border-sky-100">
              <Sparkles className="w-3.5 h-3.5 text-brand-coral" />
              <span>Real Central Florida Installations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
              Recent Field Work &amp; Transformations
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Take a look at verified window and door installations completed right here across Volusia, Seminole, and Central Florida communities.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'windows', label: 'Windows' },
              { id: 'doors', label: 'Patio Doors' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  activeFilter === tab.id
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-elevated transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Location Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-coral" />
                  <span>{project.location}</span>
                </div>

                {/* View Details Icon */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ArrowUpRight className="w-4 h-4 text-brand-coral" />
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-blue">
                  <span>View Project Details</span>
                  <span className="text-brand-coral">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
