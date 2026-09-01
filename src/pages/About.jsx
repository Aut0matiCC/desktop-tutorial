import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Shield, Award, CheckCircle2, MapPin, Building, Calendar, User, Sparkles, Landmark, Waves, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import CTABand from '../components/ui/CTABand';
import ScrollReveal, { ScrollRevealGroup } from '../components/ui/ScrollReveal';
import { COMPANY, SECTORS } from '../data/content';

const SECTOR_ICONS = { Landmark, Waves, Building2, MapPin };

const FACTS = [
  { label: 'Established', value: COMPANY.established, icon: Calendar, highlight: 'Founded in Gujarat' },
  { label: 'Business Structure', value: COMPANY.structure, icon: Building, highlight: 'Technical Consultancy' },
  { label: 'Proprietor', value: COMPANY.proprietor, icon: User, highlight: 'Engineering Leadership' },
  { label: 'Headquarters', value: 'Palanpur, Gujarat', icon: MapPin, highlight: 'District Banaskantha' },
];

export default function About() {
  return (
    <div className="overflow-hidden bg-[#F8FAFC]">

      {/* ── 1. FRAMED SKY HERO BOX (Matching Home Page Aesthetic) ── */}
      <div className="pt-3 sm:pt-4 lg:pt-5 px-3 sm:px-6 lg:px-8">
        <section
          className="relative pt-28 sm:pt-36 lg:pt-40 pb-0 bg-gradient-to-b from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] overflow-hidden text-white rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] shadow-2xl shadow-sky-950/20 border border-white/20"
          aria-label="About header"
        >
          {/* Atmospheric subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/25 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/15 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -left-32 w-[450px] h-[450px] rounded-full bg-blue-900/15 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

            {/* Pill Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/35 text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>ABOUT ONE TRUST SERVICES</span>
            </motion.div>

            {/* Big Bold Headline */}
            <motion.h1
              className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Engineering Trust. <br className="hidden sm:block" />
              <span className="text-white drop-shadow-sm">One Project at a Time.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              className="text-white/95 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              One Trust Services is a Palanpur-based engineering consultancy providing highway, survey, design, and project management services for public infrastructure across Gujarat.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-slate-900 font-heading font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-2xl shadow-sky-950/30 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>REQUEST A CONSULTATION</span>
                <span className="w-6 h-6 rounded-full bg-[#0284C7] text-white flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white font-heading font-bold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-200"
              >
                Explore All Services
              </Link>
            </motion.div>

          </div>

          {/* Highway Road Visual - Fades to Top with CSS Alpha Mask */}
          <motion.div
            className="relative w-full h-80 sm:h-[440px] md:h-[500px] -mt-8 sm:-mt-12 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 55%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 55%)'
            }}
          >
            <img
              src="/images/sector-roads-buildings.webp"
              alt="Highway engineering infrastructure"
              className="absolute inset-0 w-full h-full object-cover object-center sm:object-top"
              loading="eager"
            />
          </motion.div>

        </section>
      </div>

      {/* ── 2. COMPANY FACTS STRIP (Bento Cards) ── */}
      <section className="-mt-12 xs:-mt-16 sm:-mt-28 md:-mt-44 lg:-mt-56 w-[90%] mx-auto relative z-20 pb-8 sm:pb-12" aria-label="Company facts">
        <ScrollRevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {FACTS.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.label}
                className="bento-card bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-xl shadow-sky-950/5 hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shadow-sm">
                    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {fact.label}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-extrabold text-slate-900 text-lg sm:text-2xl mb-0.5 sm:mb-1">
                    {fact.value}
                  </div>
                  <div className="text-xs font-semibold text-sky-600">
                    {fact.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollRevealGroup>
      </section>

      {/* ── 3. FOUNDER & LEADERSHIP BENTO SECTION ── */}
      <section className="py-20 sm:py-24 w-[90%] mx-auto" aria-labelledby="founder-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Founder Leadership Card (Span 5) */}
          <ScrollReveal className="lg:col-span-5 flex">
            <div className="bento-card w-full p-6 sm:p-8 flex flex-col justify-between bg-white rounded-3xl border border-slate-200/80 shadow-md relative overflow-hidden">
              <div>
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-950 shadow-inner">
                  <img
                    src="/images/about-leadership.webp"
                    alt="Highway engineering leadership"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                    Proprietor & Engineering Lead
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                      One Trust Services
                    </div>
                    <div className="text-lg font-heading font-extrabold text-white">
                      Ronak M. Chaudhary
                    </div>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">
                  Ronak M. Chaudhary
                </h3>
                <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-4">
                  Owner & Proprietor · One Trust Services
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Offering engineering consultancy across highway DPR preparation, survey and geomatics, hydraulic structures, project management, third-party inspection, traffic studies, pavement design, and structural health assessment.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Palanpur – 385001, Gujarat</span>
                <span className="text-sky-600 font-bold">Est. 2023</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Vision & Approach Bento Cards (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Card 1: What We Believe */}
            <ScrollReveal delay={0.1}>
              <div className="bento-card p-8 bg-white rounded-3xl border border-slate-200/80 shadow-md">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>OUR PHILOSOPHY</span>
                </div>
                <h2 id="founder-heading" className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-4 tracking-tight leading-[1.15]">
                  Our Approach to <span className="text-sky-600">Every Project</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
                  Public infrastructure projects carry a responsibility that goes beyond the drawing board - every survey, design, and inspection feeds into something that people will depend on for years. One Trust Services approaches each engagement with that responsibility in mind: thorough fieldwork, careful documentation, and designs and assessments prepared to the standards departmental review demands.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">Thorough Fieldwork</div>
                      <div className="text-[11px] text-slate-400">On-ground accuracy</div>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">Careful Documentation</div>
                      <div className="text-[11px] text-slate-400">Department-ready reports</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Full-Service Infrastructure Scope Banner */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-3xl p-8 bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-sky-400/30">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-sky-200 mb-2">
                    FULL-SERVICE SCOPE
                  </div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-2">
                    A full-service infrastructure consultancy
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-md">
                    Supporting projects across their full lifecycle - from the first topographical survey and DPR preparation to construction-stage PMC and structural health assessment.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 font-heading font-extrabold text-xs px-6 py-3.5 rounded-full shadow hover:scale-105 transition-transform whitespace-nowrap"
                >
                  <span>VIEW ALL SERVICES</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-600" />
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── 4. SECTORS WE WORK WITH (Departmental Clientele Bento Grid) ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="w-[90%] mx-auto">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>DEPARTMENTAL CLIENTELE</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-4 tracking-tight leading-[1.15]">
              Government Departments & <br className="hidden sm:block" />
              <span className="text-sky-600">Public Bodies</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              Consultancy solutions structured for the specific technical workflows of Gujarat state and municipal authorities.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((sector) => {
              const Icon = SECTOR_ICONS[sector.icon] || Landmark;
              return (
                <ScrollReveal key={sector.id} className="flex">
                  <div className="bento-card w-full p-6 flex flex-col justify-between bg-white rounded-3xl border border-slate-200/80 shadow-md group hover:border-sky-300">
                    <div>
                      <div className="relative h-36 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                        <img
                          src={sector.image}
                          alt={sector.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md shadow text-sky-700 flex items-center justify-center">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="absolute bottom-2.5 left-2.5 bg-slate-950/75 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                          {sector.tag}
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-slate-900 text-base mb-2 group-hover:text-sky-700 transition-colors">
                        {sector.name}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                        {sector.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <Link
                        to="/contact"
                        className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1"
                      >
                        <span>Department details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. CLOSING CTA BAND ── */}
      <CTABand
        heading="Let's discuss your infrastructure project"
        body="Connect directly with Ronak M. Chaudhary and the engineering team at One Trust Services."
        buttonText="Request a Consultation"
        buttonTo="/contact"
      />

    </div>
  );
}
