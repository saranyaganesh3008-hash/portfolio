import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { PROFILE } from '../data/profile';

export function Hero() {
  const [imgError, setImgError] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-8 pb-14 sm:pt-14 sm:pb-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: Executive Editorial Typography & Summary Strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-7 sm:w-8 h-px bg-[#176B57]" aria-hidden="true" />
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[#176B57]">
                HELLO, I&apos;M
              </p>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold tracking-tight text-[#172A25] leading-[1.04] [text-wrap:balance]">
              {PROFILE.name}
            </h1>

            <div className="mt-4 sm:mt-5 pb-5 sm:pb-6 border-b border-[#172A25]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
              <p className="font-display text-xl sm:text-2xl font-medium text-[#176B57]">
                {PROFILE.title}
              </p>
              <p className="font-mono text-xs sm:text-sm font-medium text-[#64748B] tracking-tight">
                {PROFILE.skillsLine}
              </p>
            </div>

            <div className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4 text-[15px] sm:text-base text-[#172A25]/85 leading-[1.7] sm:leading-[1.75] max-w-[58ch]">
              {PROFILE.heroDescription.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-lg bg-[#176B57] hover:bg-[#125444] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#176B57]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-lg bg-white hover:bg-[#DFF4EC]/70 text-[#172A25] text-sm font-semibold border border-[#172A25]/18 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#176B57]"
              >
                <Mail className="w-4 h-4 text-[#176B57]" aria-hidden="true" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Clean Executive Summary Strip */}
            <dl className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 rounded-xl overflow-hidden border border-[#172A25]/12 bg-white">
              <div className="p-4 border-b sm:border-b-0 sm:border-r border-[#172A25]/12">
                <dt className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
                  Current Role
                </dt>
                <dd className="mt-1 text-sm font-semibold text-[#172A25]">Implementation Lead</dd>
                <dd className="text-xs text-[#176B57]">BumbleB Trust</dd>
              </div>
              <div className="p-4 border-b sm:border-b-0 sm:border-r border-[#172A25]/12">
                <dt className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
                  Team Leadership
                </dt>
                <dd className="mt-1 font-mono text-sm font-semibold text-[#172A25] tabular-nums">
                  20 Teachers
                </dd>
                <dd className="text-xs text-[#64748B]">Kalvi40 Digital Program</dd>
              </div>
              <div className="p-4">
                <dt className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
                  MIS &amp; Training
                </dt>
                <dd className="mt-1 font-mono text-sm font-semibold text-[#172A25] tabular-nums">
                  Jan 2022 – Jan 2024
                </dd>
                <dd className="text-xs text-[#64748B]">ACE Skill Development</dd>
              </div>
            </dl>
          </motion.div>

          {/* RIGHT COLUMN (First on Mobile): Clean Studio-Cropped Executive Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px]">
              {/* Subtle geometric emerald backdrop accent */}
              <div
                className="absolute -bottom-2.5 -right-2.5 sm:-bottom-3 sm:-right-3 w-full h-full rounded-2xl bg-[#DFF4EC] border border-[#176B57]/15 -z-10"
                aria-hidden="true"
              />

              <div className="bg-white rounded-2xl border border-[#172A25]/12 overflow-hidden shadow-[0_20px_44px_-18px_rgba(23,107,87,0.16)]">
                {/* Clean Focal Bust Portrait Crop */}
                <div className="aspect-[4/4.2] sm:aspect-[4/4.3] w-full overflow-hidden bg-[#DFF4EC]/40">
                  {!imgError ? (
                    <img
                      src={PROFILE.photoUrl}
                      alt="Portrait of Saranya K, Aspiring Data Analyst"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      style={{
                        objectPosition: '53% 23%',
                        transform: 'scale(1.38)',
                        transformOrigin: '53% 28%',
                      }}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#DFF4EC] flex flex-col items-center justify-center p-6 text-center">
                      <span className="font-display text-3xl font-bold text-[#176B57]">
                        {PROFILE.initials}
                      </span>
                      <span className="mt-2 text-sm font-medium text-[#172A25]">
                        {PROFILE.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Clean Architectural Caption Strip Below Image */}
                <div className="px-4 sm:px-5 py-3.5 sm:py-4 bg-white border-t border-[#172A25]/10 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-display text-base font-semibold text-[#172A25] truncate">
                      {PROFILE.name}
                    </p>
                    <p className="text-xs text-[#64748B] truncate">
                      {PROFILE.title} · MIS &amp; Analytics
                    </p>
                  </div>

                  {/* Minimal Animated 4-Bar Toolkit Chart */}
                  <div className="flex items-end gap-1 h-6 shrink-0" aria-hidden="true">
                    {[52, 76, 66, 94].map((pct, i) => (
                      <motion.span
                        key={i}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.25 + i * 0.06,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{ height: `${pct}%`, transformOrigin: 'bottom' }}
                        className={`w-1.5 rounded-t-xs ${
                          i % 2 === 0 ? 'bg-[#176B57]' : 'bg-[#38A68C]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
