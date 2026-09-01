import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

/**
 * CTABand - Vibrant modern light CTA block with gradient background,
 * floating badge elements, and responsive layout.
 */
export default function CTABand({
  heading = 'Have a project in mind?',
  body = 'Talk to us about your highway, road, or infrastructure consultancy requirement.',
  buttonText = 'Request a Consultation',
  buttonTo = '/contact',
  className = '',
}) {
  return (
    <section className={`py-16 sm:py-20 w-[90%] mx-auto ${className}`}>
      <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl shadow-sky-900/20 text-white">

        {/* Decorative background circles & mesh */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-sky-300/20 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">

          {/* Floating Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-extrabold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Consultancy & Tender Support</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl leading-tight mb-5 tracking-tight">
            {heading}
          </h2>

          {/* Body */}
          {body && (
            <p className="text-white/90 text-sm sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 font-medium leading-relaxed">
              {body}
            </p>
          )}

          {/* Action button (Dark Slate / Solid Contrast Button) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={buttonTo}
              className="inline-flex items-center justify-center gap-2.5 bg-slate-950 hover:bg-slate-900 text-white font-heading font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-2xl shadow-slate-950/40 transition-all duration-200 hover:scale-105 active:scale-95 border border-slate-700/50"
            >
              <span>{buttonText.toUpperCase()}</span>
              <span className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-heading font-bold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-200"
            >
              Explore All Services
            </Link>
          </div>

          {/* Trust bullets */}
          <div className="mt-10 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/80 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-white" />
              Departmental Review Ready
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-white" />
              Field-Verified Surveys
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-white" />
              Full Lifecycle Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
