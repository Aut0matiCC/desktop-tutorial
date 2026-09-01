import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle2, Shield, Award, Landmark, Waves, Building2, MapPin, Sparkles, Layers, Compass, Check, SlidersHorizontal, FileText, Crosshair, ClipboardList, ShieldCheck, BarChart3 } from 'lucide-react';
// HeroCardsRibbon replaced by road image background
import DepartmentTicker from '../components/ui/DepartmentTicker';
import ServiceCard from '../components/ui/ServiceCard';
import CTABand from '../components/ui/CTABand';
import ScrollReveal, { ScrollRevealGroup } from '../components/ui/ScrollReveal';
import { SERVICES, SECTORS, COMPANY } from '../data/content';

const SECTOR_ICONS = { Landmark, Waves, Building2, MapPin };

const PILLARS = [
  {
    title: 'Technical Rigor',
    body: 'Engineering-grade surveys, studies, and designs prepared to departmental standards.',
    tag: 'IRC & MoRTH Compliant',
    bg: 'bg-white border-sky-100 shadow-sm hover:border-sky-300',
    badge: 'Standard Compliant',
  },
  {
    title: 'Full-Cycle Support',
    body: 'From DPR preparation through construction supervision to final inspection.',
    tag: 'Concept to Handover',
    bg: 'bg-white border-amber-100 shadow-sm hover:border-amber-300',
    badge: 'End-to-End',
  },
  {
    title: 'Sector Understanding',
    body: 'Work shaped around the real requirements of R&B, Irrigation, Municipal, and Panchayat projects.',
    tag: 'Government & Contractors',
    bg: 'bg-white border-emerald-100 shadow-sm hover:border-emerald-300',
    badge: 'Department Focused',
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch practice tabs infinitely every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const idx = SERVICES.findIndex(s => s.id === prev);
        const nextIdx = (idx + 1) % SERVICES.length;
        return SERVICES[nextIdx].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const selectedService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <div className="overflow-hidden bg-[#F8FAFC]">

      {/* ── 1. FRAMED BLUE HERO BOX (With Visible Rounded Margins on Screen) ── */}
      <div className="pt-3 sm:pt-4 lg:pt-5 px-3 sm:px-6 lg:px-8">
        <section
          className="relative pt-28 sm:pt-36 lg:pt-40 pb-0 bg-gradient-to-b from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] overflow-hidden text-white rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] shadow-2xl shadow-sky-950/20 border border-white/20"
          aria-label="Hero"
        >
          {/* Atmospheric subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/25 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-white/15 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full bg-blue-900/15 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

            {/* Pill Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/35 text-white text-xs font-extrabold tracking-wider uppercase mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>HIGHWAY & INFRASTRUCTURE ENGINEERING CONSULTANCY</span>
            </motion.div>

            {/* Big Bold Clean Headline */}
            <motion.h1
              className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight max-w-4xl mx-auto mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Engineering Insight. <br className="hidden sm:block" />
              <span className="text-white drop-shadow-sm">Trusted Solutions.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              className="text-white/95 font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 font-normal"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              A highway and infrastructure engineering consultancy providing DPR preparation,
              survey, design, and project management services for roads, bridges, and public
              infrastructure across Gujarat.
            </motion.p>

            {/* CTAs (Clean White Pill + Frosted Glass Button) */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link
                to="/contact"
                id="hero-cta-primary"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-slate-900 font-heading font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-2xl shadow-sky-950/30 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>REQUEST A CONSULTATION</span>
                <span className="w-6 h-6 rounded-full bg-[#0284C7] text-white flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                to="/services"
                id="hero-cta-secondary"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white font-heading font-bold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </motion.div>

          </div>

          {/* ── Highway Road Image — Alpha Mask Fade to eliminate hard edges ── */}
          <motion.div
            className="relative w-full h-80 sm:h-[480px] md:h-[560px] -mt-10 sm:-mt-16 md:-mt-24 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 55%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 55%)'
            }}
          >
            {/* The highway road image — zoomed out and centered */}
            <img
              src="/highway.webp"
              alt="Highway engineering infrastructure"
              className="absolute inset-0 w-full h-full object-cover object-center sm:object-top"
              loading="eager"
            />
          </motion.div>

        </section>
      </div>

      {/* ── 2. CLEAN DEPARTMENT TRUST GRID ── */}
      <DepartmentTicker />

      {/* ── 3. ABOUT BENTO GRID (Clean, Premium, High-Precision Layout) ── */}
      <section className="py-20 sm:py-24 w-[90%] mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
            <span>ABOUT ONE TRUST SERVICES</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.15] mb-4">
            Engineering Precision. <br className="hidden sm:block" />
            <span className="text-sky-600">Delivering Technical Rigor.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            A dedicated technical consultancy providing end-to-end highway DPR, survey, design, and inspection services for public infrastructure across Gujarat.
          </p>
        </ScrollReveal>

        {/* Bento Grid (4 Cohesive Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

          {/* Bento Card 1: Infrastructure Photo & Foundation Facts */}
          <ScrollReveal className="md:col-span-4 flex">
            <div className="bento-card w-full relative overflow-hidden flex flex-col justify-between p-6 bg-slate-950 text-white min-h-[420px] rounded-3xl border border-slate-200/80 shadow-md">
              <img
                src="/highway.webp"
                alt="Highway infrastructure engineering"
                className="absolute inset-0 w-full h-full object-cover opacity-75 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-extrabold tracking-wider uppercase text-white">
                  ONE TRUST
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Shield className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-5 text-slate-900 shadow-xl border border-white">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-extrabold text-slate-900 font-heading">Est. 2023</div>
                  <span className="text-[10px] font-extrabold bg-sky-100 text-sky-800 px-2.5 py-0.5 rounded-full uppercase">
                    {COMPANY.structure}
                  </span>
                </div>
                <div className="text-xs font-bold text-sky-700 tracking-wide mt-1">
                  Palanpur, Gujarat
                </div>
                <p className="text-xs text-slate-600 mt-2 font-medium leading-relaxed">
                  Founded and led by <strong className="text-slate-900">Ronak M. Chaudhary</strong>, dedicated to high-standard public infrastructure engineering.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Card 2: 100% Rigor & Quality Metric */}
          <ScrollReveal className="md:col-span-4 flex" delay={0.1}>
            <div className="bento-card w-full p-8 flex flex-col justify-between bg-white rounded-3xl border border-slate-200/80 shadow-md">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  <span>COMMITMENT TO QUALITY</span>
                </div>
                <div className="font-heading font-extrabold text-5xl sm:text-6xl text-slate-900 mb-3 tracking-tight">
                  100%
                </div>
                <div className="text-sm font-bold text-sky-700 mb-2">
                  Technical Compliance & Rigor
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Every DPR, topographic survey, hydraulic model, and inspection report is prepared strictly to departmental standards and regulatory criteria.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>IRC & MoRTH Compliant Deliverables</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>DGPS & Total Station Precision</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Cards 3 & 4 (Right Column) */}
          <div className="md:col-span-4 flex flex-col gap-6">

            {/* Blue Gradient Bento Card: 6 Practice Areas */}
            <ScrollReveal delay={0.2} className="flex-1">
              <div className="rounded-3xl p-7 bg-gradient-to-br from-[#0284C7] to-[#0369A1] text-white shadow-md flex flex-col justify-between h-full border border-sky-400/30">
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-sky-200 mb-2">
                    FULL LIFECYCLE SCOPE
                  </div>
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-2">
                    6 Practice Areas
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                    Highway DPR, Geomatics, Hydraulic Design, PMC Supervision, TPI Inspection, and Pavement Assessment.
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/80">All Gujarat Projects</span>
                  <Link
                    to="/services"
                    className="w-8 h-8 rounded-full bg-white text-sky-700 flex items-center justify-center font-bold shadow hover:scale-110 transition-transform"
                    aria-label="View all services"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Slate Dark Bento Card: 4 Core Bodies */}
            <ScrollReveal delay={0.3} className="flex-1">
              <div className="rounded-3xl p-6 bg-slate-900 text-white border border-slate-800 shadow-md flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
                    Government Sectors
                  </div>
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
                    4 Core Bodies
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">
                    R&B · Irrigation · Municipalities · Panchayat
                  </div>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center shadow-inner">
                  <Landmark className="w-5 h-5" />
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── 4. INTERACTIVE PRACTICE EXPLORER / SCOPE PREVIEW ── */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="w-[90%] mx-auto">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
              <span>INTERACTIVE PRACTICE EXPLORER</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.15] mb-4">
              Comprehensive Scope. <br className="hidden sm:block" />
              <span className="text-sky-600">Standardized Deliverables.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
              Explore the detailed technical deliverables, surveys, and documentation prepared by One Trust Services for each engineering discipline.
            </p>
          </ScrollReveal>

          {/* Interactive Tabs with 5s Auto-Cycle */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {SERVICES.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setActiveTab(svc.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-all overflow-hidden ${activeTab === svc.id
                  ? 'bg-[#0284C7] text-white shadow-md scale-105 ring-2 ring-sky-400/40'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  {activeTab === svc.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping inline-block" />
                  )}
                  {svc.shortName}
                </span>
              </button>
            ))}
          </div>

          {/* Active Tab Preview Box */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bento-card p-6 sm:p-10 bg-slate-50 border-slate-200/80 shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2 block">
                      {selectedService.eyebrow} • {selectedService.statsBadge}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-4">
                      {selectedService.name}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {selectedService.intro}
                    </p>
                    <Link
                      to={selectedService.path}
                      className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-heading font-bold text-xs px-6 py-3.5 rounded-full shadow transition-all hover:scale-105"
                    >
                      <span>EXPLORE FULL SERVICE SCOPE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Deliverables Checklist ({selectedService.included.length} Components)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedService.included.slice(0, 6).map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 5. ALL 6 SERVICES BENTO GRID ── */}
      <section className="py-20 w-[90%] mx-auto" aria-labelledby="expertise-heading">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>OUR EXPERTISE</span>
          </div>
          <h2 id="expertise-heading" className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.15] mb-4">
            End-to-End Consultancy. <br className="hidden sm:block" />
            <span className="text-sky-600">From Survey to Structure.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            From the first topographic survey to the final quality inspection, One Trust Services supports public infrastructure projects at every stage.
          </p>
        </ScrollReveal>

        {/* 6 Services Grid */}
        <ScrollRevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map(svc => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </ScrollRevealGroup>
      </section>

      {/* ── 6. SECTORS WE SERVE ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80" aria-labelledby="sectors-heading">
        <div className="w-[90%] mx-auto">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>WHO WE WORK WITH</span>
            </div>
            <h2 id="sectors-heading" className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.15] mb-4">
              Government Sectors. <br className="hidden sm:block" />
              <span className="text-sky-600">Proven Public Trust.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
              We work with departments and municipal bodies responsible for public infrastructure — bringing the same technical rigor to every project, regardless of scale.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((sector) => {
              const Icon = SECTOR_ICONS[sector.icon] || Landmark;
              return (
                <ScrollReveal key={sector.id} className="flex">
                  <div className="bento-card w-full p-6 flex flex-col justify-between group hover:border-sky-300">
                    <div>
                      <div className="relative h-36 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                        <img
                          src={sector.image}
                          alt={sector.name}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
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
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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

      {/* ── 7. WHY ONE TRUST SERVICES ── */}
      <section className="py-20 bg-white border-t border-slate-200/80" aria-labelledby="approach-heading">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>OUR APPROACH</span>
              </div>
              <h2 id="approach-heading" className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-[1.15] mb-5">
                Lifecycle Precision. <br className="hidden sm:block" />
                <span className="text-sky-600">Uncompromising Rigor.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                One Trust Services is built around a simple principle — that reliable infrastructure starts with rigorous engineering. From detailed field surveys to final structural assessment, every deliverable is prepared to stand up to technical and regulatory scrutiny.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sky-700 font-heading font-bold text-sm hover:text-sky-900 group"
              >
                <span>Read more about our engineering leadership</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>

            <ScrollRevealGroup className="lg:col-span-7 space-y-4" stagger={0.1}>
              {PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className={`p-6 rounded-3xl border ${pillar.bg} transition-all flex items-start gap-4`}
                >
                  <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center flex-shrink-0 font-heading font-extrabold text-sm shadow-inner">
                    0{idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                        {pillar.title}
                      </h3>
                      <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200 uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollRevealGroup>
          </div>
        </div>
      </section>

      {/* ── 8. CLOSING CTA BAND ── */}
      <CTABand
        heading="Have a project in mind?"
        body="Talk to us about your highway, road, or infrastructure consultancy requirement."
        buttonText="Request a Consultation"
        buttonTo="/contact"
      />

    </div>
  );
}
