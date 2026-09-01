import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, ShieldCheck, MapPin, CheckCircle2, Award, Star, Activity, BarChart2, Plus, Sparkles } from 'lucide-react';

/**
 * HeroCardsRibbon - Ultra-high fidelity 3D curved perspective ribbon
 * with crisp civil engineering imagery and data widgets.
 */
export default function HeroCardsRibbon() {
  return (
    <div className="w-full overflow-hidden pt-6 pb-6 hero-ribbon-container">
      <div className="flex items-center justify-center gap-3.5 sm:gap-5 px-4 ribbon-track max-w-7xl mx-auto overflow-x-auto sm:overflow-x-visible pb-4 no-scrollbar">

        {/* Card 1: Left Mini Bar Chart Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 0.88 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ transform: 'perspective(1000px) rotateY(22deg) translateZ(-40px)' }}
          whileHover={{ scale: 0.98, rotateY: '0deg', translateZ: '30px', transition: { duration: 0.3 } }}
          className="flex-shrink-0"
        >
          <div className="w-[190px] sm:w-[210px] bg-white/95 backdrop-blur-xl rounded-[24px] p-4 shadow-2xl border border-white/80 text-left">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-sky-600 mb-1">
              Field Accuracy
            </div>
            <div className="text-xs font-bold text-slate-800 mb-3">Survey & DGPS</div>
            {/* Mini bar chart SVG */}
            <div className="h-16 flex items-end gap-1.5 px-1 py-1 bg-sky-50/70 rounded-xl mb-3">
              {[40, 65, 50, 85, 70, 95, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-md" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
              <span>Precision</span>
              <span className="text-emerald-600 font-extrabold">±20mm</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Highway DPR Pricing & Alignment Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 0.92 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ transform: 'perspective(1000px) rotateY(14deg) translateZ(-15px)' }}
          whileHover={{ scale: 1.02, rotateY: '0deg', translateZ: '40px', transition: { duration: 0.3 } }}
          className="flex-shrink-0"
        >
          <div className="w-[210px] sm:w-[230px] bg-white rounded-[26px] p-4 shadow-2xl border border-white/90 text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase text-slate-400">DPR Deliverables</span>
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
            </div>
            <div className="text-sm font-extrabold text-slate-900 mb-1">BOQ & Estimates</div>
            <div className="text-xs text-slate-500 mb-3">Detailed Project Reports</div>

            <div className="space-y-1.5 bg-slate-50 p-2.5 rounded-xl text-[11px] font-semibold text-slate-700">
              <div className="flex justify-between">
                <span>Alignment Studies</span>
                <span className="text-sky-600 font-bold">Ready</span>
              </div>
              <div className="flex justify-between">
                <span>Rate Analysis</span>
                <span className="text-sky-600 font-bold">Ready</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Center Featured Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1.05 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ transform: 'perspective(1000px) rotateY(0deg) translateZ(40px)' }}
          whileHover={{ scale: 1.1, translateZ: '60px', transition: { duration: 0.3 } }}
          className="flex-shrink-0 z-20"
        >
          <div className="w-[230px] sm:w-[260px] bg-white rounded-[28px] p-4 shadow-[0_25px_60px_-15px_rgba(2,132,199,0.35)] border-2 border-sky-400 text-left relative overflow-hidden">
            <div className="relative h-32 rounded-2xl overflow-hidden mb-3 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=600&q=80"
                alt="Highway Infrastructure Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Engineering Lead
              </div>
              <div className="absolute bottom-2 left-2.5 text-white text-xs font-bold">
                Ronak M. Chaudhary
              </div>
            </div>

            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-sm font-extrabold text-slate-900 leading-tight">One Trust Services</div>
                <div className="text-[11px] font-medium text-slate-500">Palanpur, Gujarat</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#0284C7] text-white flex items-center justify-center shadow">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-2 flex items-center justify-between border border-slate-100 text-[11px] font-bold">
              <span className="text-slate-600">Technical Rigor</span>
              <span className="text-sky-700 font-extrabold">100% Verified</span>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Wave / Area Chart Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 0.92 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ transform: 'perspective(1000px) rotateY(-14deg) translateZ(-15px)' }}
          whileHover={{ scale: 1.02, rotateY: '0deg', translateZ: '40px', transition: { duration: 0.3 } }}
          className="flex-shrink-0"
        >
          <div className="w-[210px] sm:w-[230px] bg-white rounded-[26px] p-4 shadow-2xl border border-white/90 text-left">
            <div className="text-[10px] font-extrabold uppercase text-slate-400 mb-1">
              Hydraulic Studies
            </div>
            <div className="text-sm font-extrabold text-slate-900 mb-3">
              Flow & Flood Design
            </div>

            {/* Mini smooth SVG Area chart */}
            <div className="h-16 w-full mb-2.5 relative">
              <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 35 Q 25 10 50 25 T 100 8 L 100 40 L 0 40 Z"
                  fill="url(#area-grad)"
                />
                <path
                  d="M 0 35 Q 25 10 50 25 T 100 8"
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
              <span>Culverts & Bridges</span>
              <span className="text-sky-600 font-bold">IRC SP-13</span>
            </div>
          </div>
        </motion.div>

        {/* Card 5: Dark Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 0.88 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ transform: 'perspective(1000px) rotateY(-22deg) translateZ(-40px)' }}
          whileHover={{ scale: 0.98, rotateY: '0deg', translateZ: '30px', transition: { duration: 0.3 } }}
          className="flex-shrink-0"
        >
          <div className="w-[190px] sm:w-[210px] bg-slate-950 text-white rounded-[24px] p-4 shadow-2xl border border-slate-800 text-left">
            <div className="w-7 h-7 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-xs mb-3">
              OT
            </div>
            <div className="text-xs font-bold text-slate-200 mb-1 leading-snug">
              Third Party Inspection
            </div>
            <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
              Independent quality & compliance monitoring for tenders.
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] font-bold text-sky-400">
              <span>TPI & PMC</span>
              <span>100% Quality</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 5-Star Trust rating bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4 text-white text-xs sm:text-sm font-semibold"
      >
        <span className="text-white/90">Trusted by Public Departments & Infrastructure Contractors</span>
        <span className="hidden sm:inline text-white/40">•</span>
        <span className="flex items-center gap-1 text-amber-300">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
          ))}
          <span className="text-white text-xs ml-1 font-bold">Palanpur & Gujarat</span>
        </span>
      </motion.div>
    </div>
  );
}
