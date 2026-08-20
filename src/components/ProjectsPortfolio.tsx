import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectPortfolio } from '../types';
import { 
  Building, 
  MapPin, 
  Zap, 
  CheckCircle2, 
  TrendingDown, 
  Layers, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProjectsPortfolioProps {
  onOpenQuoteModal: (context?: { title?: string; details?: string }) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ onOpenQuoteModal }) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectPortfolio | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Institutional'];

  const filteredProjects = useMemo(() => {
    if (filterCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === filterCategory);
  }, [filterCategory]);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Building className="w-3.5 h-3.5 text-emerald-700" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Solar Installations Across Nigeria
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Inspect our recent high-yield turnkey residential and commercial microgrids across Lagos, Abuja, Port Harcourt, Ibadan, and Enugu.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  filterCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Overlay Tag */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white/90 backdrop-blur-xs text-slate-900 shadow-xs">
                    {project.category}
                  </span>
                </div>

                {/* Location overlay */}
                <div className="absolute bottom-3 left-3.5 text-xs text-white font-semibold flex items-center gap-1.5 drop-shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mb-2.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{project.capacity}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Client: {project.clientType}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Components snippet */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Installed Hardware:
                    </span>
                    <ul className="space-y-1">
                      {project.componentsUsed.slice(0, 2).map((comp, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Savings & Request Similar */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                  <div className="p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-200 text-xs font-semibold text-emerald-900 flex items-center justify-between">
                    <span>Diesel / Fuel Slashed:</span>
                    <strong className="text-emerald-700">{project.estimatedSavings}</strong>
                  </div>

                  <button
                    onClick={() =>
                      onOpenQuoteModal({
                        title: `Quote inquiry for system similar to ${project.title}`,
                        details: `Reference Project: ${project.title}\nCapacity: ${project.capacity}\nLocation: ${project.location}\nHardware: ${project.componentsUsed.join(', ')}`
                      })
                    }
                    className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request a Similar System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
