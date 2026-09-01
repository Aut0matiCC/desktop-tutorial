import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ui/ServiceCard';
import CTABand from '../components/ui/CTABand';
import ScrollReveal, { ScrollRevealGroup } from '../components/ui/ScrollReveal';
import { SERVICES } from '../data/content';

export default function Services() {
  return (
    <div className="overflow-hidden bg-[#F8FAFC]">

      {/* ── 1. FRAMED SKY HERO BOX (Matching Design System) ── */}
      <div className="pt-3 sm:pt-4 lg:pt-5 px-3 sm:px-6 lg:px-8">
        <section
          className="relative pt-28 sm:pt-36 lg:pt-40 pb-0 bg-gradient-to-b from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] overflow-hidden text-white rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] shadow-2xl shadow-sky-950/20 border border-white/20"
          aria-label="Services header"
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
              <span>PRACTICE AREAS & CONSULTANCY</span>
            </motion.div>

            {/* Big Bold Headline */}
            <motion.h1
              className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Engineering Consultancy. <br className="hidden sm:block" />
              <span className="text-white drop-shadow-sm">Start to Finish.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              className="text-white/95 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              One Trust Services offers comprehensive engineering capabilities grouped into six core practice areas - covering the full lifecycle from survey to structural assessment.
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

              <a
                href="#services-grid-section"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white font-heading font-bold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-200"
              >
                Explore 6 Practice Areas
              </a>
            </motion.div>

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
              src="/highway.webp"
              alt="Highway engineering infrastructure"
              className="absolute inset-0 w-full h-full object-cover object-center sm:object-top"
              loading="eager"
            />
          </motion.div>

        </section>
      </div>

      {/* ── 2. 6 SERVICE CARDS BENTO GRID ── */}
      <section id="services-grid-section" className="py-20 w-[90%] mx-auto" aria-labelledby="services-grid-heading">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>CORE PRACTICES</span>
          </div>
          <h2 id="services-grid-heading" className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.15] mb-4">
            Technical Disciplines & <br className="hidden sm:block" />
            <span className="text-sky-600">Consultancy Solutions</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Detailed project reports, precision geomatics, hydraulic design, construction-stage PMC, and independent quality inspections.
          </p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map(svc => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </ScrollRevealGroup>
      </section>

      {/* ── 3. CLOSING CTA BAND ── */}
      <CTABand
        heading="Not sure which service you need?"
        body="Every project is different. Tell us about your requirement and we'll help you scope the right service."
        buttonText="Request a Consultation"
        buttonTo="/contact"
      />

    </div>
  );
}
