import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight, ArrowRight, FileText, Crosshair, Waves, ClipboardList, ShieldCheck, BarChart3, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../../data/content';
import logoImg from '/logo.jpeg';

const SERVICE_ICONS = {
  'highway-dpr': FileText,
  'survey-geomatics': Crosshair,
  'hydraulic-structures': Waves,
  'pmc': ClipboardList,
  'tpi': ShieldCheck,
  'traffic-pavement-structural': BarChart3,
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      {/* ── FLOATING ISLAND CAPSULE NAVBAR ── */}
      <div
        className={`fixed inset-x-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ease-out ${scrolled ? 'top-3 sm:top-4' : 'top-5 sm:top-7 lg:top-8'
          }`}
      >
        <header
          className={`pointer-events-auto w-[92%] sm:w-[86%] md:w-[82%] lg:w-[80%] max-w-6xl transition-all duration-300 rounded-full ${scrolled
              ? 'bg-white/95 backdrop-blur-2xl shadow-[0_16px_40px_-8px_rgba(0,0,0,0.16)] border border-slate-200/90 py-2 sm:py-2.5 px-3.5 sm:px-6'
              : 'bg-white/95 backdrop-blur-2xl shadow-[0_12px_36px_-6px_rgba(0,0,0,0.14)] border border-white/90 py-2.5 sm:py-3.5 px-4 sm:px-6'
            }`}
          role="banner"
        >
          <div className="flex items-center justify-between gap-3 sm:gap-4">

            {/* Left: Brand Logo + Typography */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0"
              aria-label="One Trust Services - Home"
            >
              <div className="p-1 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:scale-105 transition-transform flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="One Trust Services logo"
                  className="h-7 sm:h-9 w-auto object-contain rounded-lg"
                />
              </div>
              <div>
                <div className="font-heading font-extrabold text-xs xs:text-sm sm:text-base tracking-tight leading-none text-slate-900">
                  ONE TRUST
                </div>
                <div className="text-[8px] xs:text-[9px] sm:text-[10px] font-extrabold tracking-widest uppercase text-sky-600">
                  SERVICES
                </div>
              </div>
            </Link>

            {/* Center: Spacious & High-Legibility Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-1.5"
              aria-label="Main navigation"
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-sky-700 hover:bg-slate-100/80'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-sky-700 hover:bg-slate-100/80'
                  }`
                }
              >
                About Us
              </NavLink>

              {/* Services Dropdown (Click redirects to /services, Hover opens sleek menu) */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => {
                  if (dropdownRef.current._timeout) clearTimeout(dropdownRef.current._timeout);
                  setServicesOpen(true);
                }}
                onMouseLeave={() => {
                  dropdownRef.current._timeout = setTimeout(() => {
                    setServicesOpen(false);
                  }, 180);
                }}
              >
                <NavLink
                  to="/services"
                  id="services-menu-btn"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  aria-controls="services-dropdown"
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${isActive || location.pathname.startsWith('/services')
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-700 hover:text-sky-700 hover:bg-slate-100/80'
                    }`
                  }
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-sky-500' : 'text-slate-400'}`}
                    aria-hidden="true"
                  />
                </NavLink>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      id="services-dropdown"
                      role="menu"
                      aria-labelledby="services-menu-btn"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      style={{ backgroundColor: '#ffffff' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 sm:w-80
                        bg-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(15,23,42,0.22)]
                        border border-slate-200/90 p-2 overflow-hidden z-50 text-slate-900"
                    >
                      {/* 1-Column Clean Service List */}
                      <div className="flex flex-col gap-0.5">
                        {SERVICES.map((svc) => {
                          const Icon = SERVICE_ICONS[svc.id] || FileText;
                          return (
                            <Link
                              key={svc.id}
                              to={svc.path}
                              role="menuitem"
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-sky-50 text-slate-700 hover:text-[#0284C7] group transition-all duration-150"
                              onClick={() => setServicesOpen(false)}
                            >
                              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0284C7] group-hover:text-white transition-colors duration-150">
                                <Icon className="w-4 h-4" aria-hidden="true" strokeWidth={2} />
                              </div>
                              <span className="font-heading font-semibold text-xs sm:text-sm leading-tight group-hover:translate-x-0.5 transition-transform">
                                {svc.name}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-sky-700 hover:bg-slate-100/80'
                  }`
                }
              >
                Sectors & Contact
              </NavLink>
            </nav>

            {/* Right: Prominent Blue CTA Pill Button */}
            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                id="header-cta-btn"
                className="hidden sm:inline-flex items-center gap-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white
                  font-heading font-extrabold text-xs sm:text-sm tracking-wide px-5 py-2.5 sm:px-6 sm:py-3 rounded-full
                  shadow-[0_4px_16px_rgba(2,132,199,0.35)] hover:shadow-[0_6px_22px_rgba(2,132,199,0.55)]
                  border border-sky-400/40 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span className="font-extrabold text-white">REQUEST CONSULTATION</span>
                <span className="w-5 h-5 rounded-full bg-white text-[#0284C7] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                </span>
              </Link>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                onClick={() => setMobileOpen(v => !v)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.nav
              id="mobile-menu"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col p-6 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 350, damping: 35 }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <img src={logoImg} alt="Logo" className="h-8 w-auto rounded" />
                  <span className="font-heading font-bold text-slate-900 text-base">ONE TRUST</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-6 space-y-2 flex-1">
                <MobileNavLink to="/" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>
                <MobileNavLink to="/about" onClick={() => setMobileOpen(false)}>About Us</MobileNavLink>
                <MobileNavLink to="/services" onClick={() => setMobileOpen(false)}>All Services</MobileNavLink>

                {/* Sub services list in mobile */}
                <div className="pl-3 py-2 space-y-1.5 border-l-2 border-sky-100 my-2">
                  {SERVICES.map(s => (
                    <Link
                      key={s.id}
                      to={s.path}
                      onClick={() => setMobileOpen(false)}
                      className="block text-xs font-semibold text-slate-600 hover:text-sky-600 py-1"
                    >
                      • {s.name}
                    </Link>
                  ))}
                </div>

                <MobileNavLink to="/contact" onClick={() => setMobileOpen(false)}>Sectors & Contact</MobileNavLink>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-heading font-extrabold text-sm py-3.5 rounded-full shadow-md"
                >
                  <span>REQUEST CONSULTATION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavLink({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      end
      onClick={onClick}
      className={({ isActive }) =>
        `block px-4 py-2.5 rounded-xl font-heading font-bold text-sm transition-colors ${isActive
          ? 'bg-sky-50 text-sky-700'
          : 'text-slate-800 hover:bg-slate-50'
        }`
      }
    >
      {children}
    </NavLink>
  );
}
