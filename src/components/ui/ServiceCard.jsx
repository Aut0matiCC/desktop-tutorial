import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, FileText, Crosshair, Waves, ClipboardList, ShieldCheck, BarChart3 } from 'lucide-react';

const ICONS = {
  FileText, Crosshair, Waves, ClipboardList, ShieldCheck, BarChart3,
};

/**
 * ServiceCard - Bento-style service card with Unsplash imagery, rounded pill tags,
 * and aesthetic micro-interactions.
 */
export default function ServiceCard({ service, className = '' }) {
  const Icon = ICONS[service.icon] || FileText;

  return (
    <Link
      to={service.path}
      className={`group bento-card flex flex-col justify-between overflow-hidden p-5 sm:p-7 ${className}`}
      aria-label={`Learn more about ${service.name}`}
    >
      <div>
        {/* Top image & floating badges */}
        <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100 shadow-inner">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Floating Icon badge */}
          <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md shadow-md text-sky-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200">
            <Icon className="w-5 h-5" aria-hidden="true" strokeWidth={2} />
          </div>

          {/* Stats Badge */}
          {service.statsBadge && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-[11px] font-bold tracking-wide uppercase">
              {service.statsBadge}
            </div>
          )}

          {/* Sub-included count preview */}
          <div className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1.5 drop-shadow">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            <span>{service.included.length} Deliverables Included</span>
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-600 mb-1.5 block">
            {service.eyebrow}
          </span>
          <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl leading-snug group-hover:text-sky-700 transition-colors mb-2.5">
            {service.name}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>

      {/* Footer link */}
      <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors flex items-center gap-1">
          Explore Service Details
        </span>
        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:rotate-45 shadow-sm">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
