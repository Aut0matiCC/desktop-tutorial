import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Building2, Landmark, Waves, AlertCircle, CheckCircle2, ArrowUpRight, ArrowRight, Sparkles, Send, ShieldCheck, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal, { ScrollRevealGroup } from '../components/ui/ScrollReveal';
import { COMPANY, SERVICES, SECTORS } from '../data/content';

const SECTOR_ICONS = { Landmark, Waves, Building2, MapPin };

const INITIAL_FORM = {
  name: '', organization: '', email: '', phone: '', service: '', message: '',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required.';
  if (!form.email.trim()) errors.email = 'Email address is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email.';
  if (!form.message.trim()) errors.message = 'Message is required.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);

    // Simulated submission delay
    await new Promise(r => setTimeout(r, 800));

    setSubmitting(false);
    setSubmitted(true);
  };

  const fieldCls = (name) =>
    `w-full px-4 py-3.5 rounded-2xl border font-sans text-sm text-slate-900 bg-slate-50/80
    placeholder:text-slate-400 outline-none transition-all duration-200
    focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500
    ${errors[name] ? 'border-red-400 bg-red-50/30' : 'border-slate-200 hover:border-slate-300'}`;

  const labelCls = 'block font-heading font-bold text-slate-800 text-xs uppercase tracking-wider mb-2';

  return (
    <div className="overflow-hidden bg-[#F8FAFC]">

      {/* ── 1. FRAMED SKY HERO BOX (Matching Site Design System) ── */}
      <div className="pt-3 sm:pt-4 lg:pt-5 px-3 sm:px-6 lg:px-8">
        <section
          className="relative pt-28 sm:pt-36 lg:pt-40 pb-0 bg-gradient-to-b from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] overflow-hidden text-white rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] shadow-2xl shadow-sky-950/20 border border-white/20"
          aria-label="Sectors & Contact header"
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
              <span>SECTORS WE SERVE & ENGAGEMENT</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Built for the Departments <br className="hidden sm:block" />
              <span className="text-white drop-shadow-sm">We Serve.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              className="text-white/95 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              One Trust Services works directly with government departments, urban municipalities, and infrastructure contractors across Gujarat.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <a
                href="#contact-form-section"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-slate-900 font-heading font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-2xl shadow-sky-950/30 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>SEND AN INQUIRY</span>
                <span className="w-6 h-6 rounded-full bg-[#0284C7] text-white flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

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
            className="relative w-full h-80 sm:h-[480px] md:h-[540px] lg:h-[580px] -mt-8 sm:-mt-12 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 55%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 55%)'
            }}
          >
            <img
              src="/images/sector-municipalities.webp"
              alt="Public infrastructure sectors and consultation"
              className="absolute inset-0 w-full h-full object-cover object-center sm:object-top"
              loading="eager"
            />
          </motion.div>

        </section>
      </div>

      {/* ── 2. SECTORS BENTO CARDS ── */}
      <section className="-mt-12 xs:-mt-16 sm:-mt-28 md:-mt-[380px] lg:-mt-[440px] w-[90%] mx-auto relative z-20 pb-12 sm:pb-16" aria-labelledby="sectors-heading">
        <ScrollRevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SECTORS.map(sector => {
            const Icon = SECTOR_ICONS[sector.icon] || Landmark;
            return (
              <div
                key={sector.id}
                className="bento-card p-5 sm:p-6 bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-sky-950/5 flex flex-col justify-between hover:border-sky-300 transition-all"
              >
                <div>
                  <div className="relative h-36 rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-slate-100 shadow-inner">
                    <img
                      src={sector.image}
                      alt={sector.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md shadow text-sky-700 flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                    {sector.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-sky-600 uppercase tracking-wider">
                  {sector.tag}
                </div>
              </div>
            );
          })}
        </ScrollRevealGroup>
      </section>

      {/* ── 3. CONTACT FORM & OFFICE DETAILS SECTION ── */}
      <section id="contact-form-section" className="py-14 sm:py-20 w-[90%] mx-auto" aria-labelledby="contact-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Contact Form Card (Span 7) */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="bento-card p-6 sm:p-10 bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-sky-950/5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>GET IN TOUCH</span>
                </div>
                <h2 id="contact-heading" className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-3 tracking-tight leading-[1.15]">
                  Let's Discuss <span className="text-sky-600">Your Project</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-normal mb-8 leading-relaxed">
                  Reach out to One Trust Services for highway DPR preparation, survey, design, or project management consultancy support.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-3xl bg-sky-50 border border-sky-200 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#0284C7] text-white flex items-center justify-center mx-auto mb-4 font-bold shadow-md">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2">
                      Inquiry Received
                    </h3>
                    <p className="text-slate-600 text-sm font-normal max-w-md mx-auto leading-relaxed">
                      Thank you for contacting One Trust Services. We aim to respond to every enquiry promptly. For urgent project requirements, please call or write to us directly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className={labelCls}>
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          className={fieldCls('name')}
                          placeholder="e.g. Ronak Chaudhary"
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contact-org" className={labelCls}>
                          Organization / Department
                        </label>
                        <input
                          id="contact-org"
                          name="organization"
                          type="text"
                          value={form.organization}
                          onChange={handleChange}
                          className={fieldCls('organization')}
                          placeholder="e.g. Roads & Buildings Dept"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-email" className={labelCls}>
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          className={fieldCls('email')}
                          placeholder="you@department.gov.in"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className={labelCls}>
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className={fieldCls('phone')}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-service" className={labelCls}>
                        Service of Interest
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={fieldCls('service') + ' cursor-pointer'}
                      >
                        <option value="">Select a service practice area…</option>
                        {SERVICES.map(svc => (
                          <option key={svc.id} value={svc.id}>{svc.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className={labelCls}>
                        Message / Project Scope <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className={fieldCls('message') + ' resize-y'}
                        placeholder="Tell us about the project location, department requirements, and timeline…"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center gap-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-heading font-extrabold text-sm sm:text-base px-9 py-4 rounded-full shadow-lg shadow-sky-600/30 transition-transform hover:scale-105 disabled:opacity-50"
                      >
                        <span>{submitting ? 'SENDING INQUIRY…' : 'SEND MESSAGE'}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-slate-400 font-normal">
                      We aim to respond to every enquiry promptly. For urgent project requirements, please call or write to us directly.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Office Details & Map Bento (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="bento-card p-8 bg-white rounded-3xl border border-slate-200/80 shadow-md">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 mb-3 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>REGISTERED OFFICE</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">
                  ONE TRUST SERVICES
                </h3>
                <p className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-6">
                  {COMPANY.tagline}
                </p>

                <div className="space-y-4 text-sm text-slate-700 font-normal">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <MapPin className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900 mb-1">Office Address:</div>
                      <div>{COMPANY.address.line1}</div>
                      <div>{COMPANY.address.line2}</div>
                      <div className="font-bold text-sky-700 mt-1">{COMPANY.address.city}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="font-bold text-slate-900 mb-1">Consultancy Entity:</div>
                    <div className="text-xs text-slate-600">{COMPANY.structure} · Established {COMPANY.established}</div>
                    <div className="text-xs text-slate-600 mt-1 font-bold">Proprietor: {COMPANY.proprietor}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Google Maps Card */}
            <ScrollReveal delay={0.2}>
              <div className="bento-card overflow-hidden bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md">
                <div className="rounded-2xl overflow-hidden h-64 w-full">
                  <iframe
                    title="One Trust Services Palanpur Gujarat office map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.305!2d72.4238!3d24.1722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d2017ae61a655%3A0x1c0e04f2b2b85c0b!2sPalanpur%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1693000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

    </div>
  );
}
