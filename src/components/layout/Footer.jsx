import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { COMPANY, SERVICES, SECTORS } from '../../data/content';
import logoImg from '/logo.jpeg';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F8FAFC] pt-6 pb-10 sm:pb-14" role="contentinfo">
      <div className="w-[90%] mx-auto">

        {/* ── Floating White Container ── */}
        <div className="relative rounded-[28px] sm:rounded-[44px] lg:rounded-[48px] bg-white border border-slate-200/80 shadow-2xl shadow-slate-900/5 overflow-hidden p-5 sm:p-10 lg:p-12">

          {/* ── Subtle Blue Watermark ("ONE TRUST SERVICES") ── */}
          <div
            className="absolute inset-x-0 bottom-12 text-center font-heading font-black pointer-events-none select-none leading-none z-0 tracking-tighter opacity-[0.05] text-[#0284C7]"
            style={{
              fontSize: 'clamp(28px, 7.5vw, 135px)',
              whiteSpace: 'nowrap',
            }}
            aria-hidden="true"
          >
            ONE TRUST SERVICES
          </div>

          {/* Soft ambient radial glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_center,_rgba(2,132,199,0.04)_0%,_transparent_70%)]" />

          {/* ── Top Header Strip ── */}
          <div className="relative z-10 bg-slate-50/70 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/80 mb-8 sm:mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-sm flex-shrink-0">
                <img
                  src={logoImg}
                  alt="One Trust Services logo"
                  className="h-9 sm:h-11 w-auto object-contain rounded-lg sm:rounded-xl"
                />
              </div>
              <div>
                <div className="font-heading font-extrabold text-lg sm:text-2xl text-slate-900 leading-tight">
                  ONE TRUST SERVICES
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-sky-600 tracking-wide uppercase mt-0.5">
                  {COMPANY.tagline}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-full shadow transition-all duration-150 hover:scale-105"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-heading font-bold text-xs sm:text-sm px-4 sm:px-5 py-3 sm:py-3.5 rounded-full transition-all duration-150"
              >
                <span>VIEW SERVICES</span>
              </Link>
            </div>
          </div>

          {/* ── 4-Column Links Grid ── */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-10">

            {/* Col 1 - Consultancy Office */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
                Consultancy Office
              </h3>
              <address className="not-italic text-sm text-slate-600 leading-relaxed space-y-2 mb-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <div>{COMPANY.address.line1}</div>
                    <div>{COMPANY.address.line2}</div>
                    <div className="font-bold text-slate-900">{COMPANY.address.city}</div>
                  </div>
                </div>
              </address>

              <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100/80 text-xs text-sky-900">
                <span className="font-bold block mb-0.5">Leadership & Governance:</span>
                <span>{COMPANY.structure} · Led by {COMPANY.proprietor}</span>
              </div>
            </div>

            {/* Col 2 - Technical Services */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
                Technical Services
              </h3>
              <ul className="space-y-2.5">
                {SERVICES.map(svc => (
                  <li key={svc.id}>
                    <Link
                      to={svc.path}
                      className="text-slate-600 hover:text-sky-600 text-sm font-medium transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-sky-500 transition-colors" />
                      <span>{svc.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 - Sectors We Serve */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
                Sectors We Serve
              </h3>
              <ul className="space-y-2.5">
                {SECTORS.map(s => (
                  <li key={s.id}>
                    <Link
                      to="/contact"
                      className="text-slate-600 hover:text-sky-600 text-sm font-medium transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-sky-500 transition-colors" />
                      <span>{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 - Quick Links */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5 mb-5">
                {[
                  { label: 'Home Page', path: '/' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Services Overview', path: '/services' },
                  { label: 'Sectors & Contact', path: '/contact' },
                ].map(link => (
                  <li key={link.path + link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-600 hover:text-sky-600 text-sm font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                <div className="text-xs font-bold text-slate-900 mb-1">Tender Inquiries</div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Connect directly with our engineering team in Palanpur for RFPs and DPR proposals.
                </p>
              </div>
            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <div className="relative z-10 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {year} {COMPANY.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <span>{COMPANY.structure}</span>
              <span>•</span>
              <span>Established {COMPANY.established}</span>
              <span>•</span>
              <span>Palanpur, Gujarat</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
