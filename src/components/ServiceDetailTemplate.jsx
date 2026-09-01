import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ArrowUpRight, FileText, Crosshair, Waves, ClipboardList, ShieldCheck, BarChart3, Users, Sparkles, Shield, BookmarkCheck, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import CTABand from './ui/CTABand';
import ServiceCard from './ui/ServiceCard';
import ScrollReveal, { ScrollRevealGroup } from './ui/ScrollReveal';
import { SERVICES, SECTORS } from '../data/content';

const SERVICE_ICONS = {
  FileText, Crosshair, Waves, ClipboardList, ShieldCheck, BarChart3,
};

/**
 * ServiceDetailTemplate - Unified light-mode template for all 6 service detail pages.
 * Framed sky hero, highway visual fade, deliverables checklist bento cards,
 * and technical rationale section.
 */
export default function ServiceDetailTemplate({ service }) {
  if (!service) return null;

  const Icon = SERVICE_ICONS[service.icon] || FileText;
  const relatedServices = SERVICES.filter(s => service.related.includes(s.id));
  const hasGroups = !!service.includedGroups;

  return (
    <div className="overflow-hidden bg-[#F8FAFC]">

      {/* ── 1. FRAMED SKY HERO BOX (Matching Design System) ── */}
      <div className="pt-3 sm:pt-4 lg:pt-5 px-3 sm:px-6 lg:px-8">
        <section
          className="relative pt-28 sm:pt-36 lg:pt-40 pb-0 bg-gradient-to-b from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] overflow-hidden text-white rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] shadow-2xl shadow-sky-950/20 border border-white/20"
          aria-label={`${service.name} service header`}
        >
          {/* Atmospheric subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/25 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/15 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -left-32 w-[450px] h-[450px] rounded-full bg-blue-900/15 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Top Bar: Eyebrow + Breadcrumb */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/35 text-white text-xs font-bold tracking-wider uppercase shadow-sm w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>{service.eyebrow} • {service.statsBadge || 'TECHNICAL CONSULTANCY'}</span>
              </motion.div>

              {/* Breadcrumb Pill */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950/40 backdrop-blur-md text-xs font-semibold text-white/90 border border-white/15 w-fit"
              >
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 text-white/50" />
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight className="w-3 h-3 text-white/50" />
                <span className="text-white font-bold">{service.shortName}</span>
              </motion.div>
            </div>

            {/* Title & Intro */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white text-sky-700 shadow-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7" aria-hidden="true" strokeWidth={2} />
                  </div>
                  <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12]">
                    {service.name}
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-white/95 text-base sm:text-lg md:text-xl font-normal leading-relaxed"
                >
                  {service.intro}
                </motion.p>
              </div>

              {/* Header Action Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex-shrink-0"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-slate-900 font-heading font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-2xl shadow-sky-950/30 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <span>REQUEST CONSULTATION</span>
                  <span className="w-6 h-6 rounded-full bg-[#0284C7] text-white flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            </div>

          </div>

          {/* Highway Road Visual - Fades to Top with CSS Alpha Mask */}
          <motion.div
            className="relative w-full h-64 sm:h-80 md:h-96 -mt-8 sm:-mt-12 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 55%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 55%)'
            }}
          >
            <img
              src={service.image || '/images/service-highway-dpr.webp'}
              alt={`${service.name} infrastructure visual`}
              className="absolute inset-0 w-full h-full object-cover object-center sm:object-top"
              loading="eager"
            />
          </motion.div>

        </section>
      </div>

      {/* ── 2. WHAT'S INCLUDED DELIVERABLES SECTION ── */}
      <section className="py-20 w-[90%] mx-auto" aria-labelledby={`included-heading-${service.id}`}>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>DELIVERABLES & SCOPE</span>
          </div>
          <h2 id={`included-heading-${service.id}`} className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.15] mb-4">
            Scope & Components in <br className="hidden sm:block" />
            <span className="text-sky-600">{service.shortName}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Prepared strictly to relevant IRC, MoRTH, and Gujarat departmental codes and specifications.
          </p>
        </ScrollReveal>

        {hasGroups ? (
          /* Grouped Layout (for Traffic/Pavement/Structural) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.includedGroups.map((group, idx) => (
              <ScrollReveal key={group.title} delay={idx * 0.1}>
                <div className="bento-card p-6 sm:p-7 bg-white rounded-3xl border border-slate-200/80 shadow-md h-full flex flex-col justify-between hover:border-sky-300 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                      <h3 className="font-heading font-bold text-slate-900 text-lg">
                        {group.title}
                      </h3>
                      <span className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 text-xs font-extrabold flex items-center justify-center">
                        0{idx + 1}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-slate-700 text-sm font-normal leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          /* Standard 2-3 Column Grid */
          <ScrollRevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.included.map((item, idx) => (
              <div
                key={item}
                className="bento-card p-5 sm:p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm flex items-start gap-4 hover:border-sky-300 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 font-heading font-extrabold text-xs shadow-sm">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-snug mb-1">
                    {item}
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Included in Consultancy Deliverables
                  </span>
                </div>
              </div>
            ))}
          </ScrollRevealGroup>
        )}
      </section>

      {/* ── 3. WHY IT MATTERS & WHO THIS IS FOR (Bento Grid) ── */}
      <section className="py-20 bg-white border-y border-slate-200/80" aria-labelledby={`why-heading-${service.id}`}>
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Left: Why It Matters (Span 7) */}
            <ScrollReveal className="lg:col-span-7 flex">
              <div className="bento-card p-8 sm:p-10 bg-slate-50 rounded-3xl border border-slate-200/80 w-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    <span>TECHNICAL RATIONALE</span>
                  </div>
                  <h3 id={`why-heading-${service.id}`} className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-5 tracking-tight leading-[1.15]">
                    Why Rigorous <span className="text-sky-600">{service.shortName}</span> Matters
                  </h3>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                    {service.whyItMatters}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-3 text-xs font-bold text-slate-600">
                  <BookmarkCheck className="w-4 h-4 text-sky-600" />
                  <span>Aligned with Gujarat R&B & Central MoRTH Standards</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Who This Is For (Span 5) */}
            <ScrollReveal className="lg:col-span-5 flex" delay={0.1}>
              <div className="bento-card p-8 bg-white rounded-3xl border border-slate-200/80 shadow-md w-full flex flex-col justify-between hover:border-sky-300 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-5 shadow-sm">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    <span>APPLICABILITY & AUDIENCE</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-4">
                    Who This Is For
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {service.whoFor}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sky-700 font-heading font-bold text-sm hover:text-sky-900 group"
                  >
                    <span>Discuss requirement for your department</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── 4. RELATED TECHNICAL SERVICES ── */}
      {relatedServices.length > 0 && (
        <section className="py-20 w-[90%] mx-auto">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>COMPLEMENTARY DISCIPLINES</span>
            </div>
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-[1.15] mb-4">
              Related Technical <span className="text-sky-600">Services</span>
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
              Explore interconnected engineering solutions that support your project from concept through execution.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map(svc => (
              <ServiceCard key={svc.id} service={svc} />
            ))}
          </ScrollRevealGroup>
        </section>
      )}

      {/* ── 5. CLOSING CTA BAND ── */}
      <CTABand
        heading={service.ctaHeading}
        body="Talk to us about your requirement - we'll help you scope the right approach."
        buttonText="Request a Consultation"
        buttonTo="/contact"
      />

    </div>
  );
}
