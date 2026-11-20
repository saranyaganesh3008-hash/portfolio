import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PROFILE } from '../data/profile';

const BRIDGE_ITEMS = [
  {
    id: 'implementation',
    background: 'Program Implementation',
    analytics: 'KPI & Progress Monitoring',
    detail:
      'Coordinating digital education across schools translates directly into defining operational KPIs, tracking adoption trends, and measuring follow-up outcomes.',
  },
  {
    id: 'mis',
    background: 'MIS & SF Files',
    analytics: 'Data Cleaning & Integrity',
    detail:
      'Managing student records, SF files, and attendance trackers builds rigorous habits in data validation, formatting consistency, and anomaly checks.',
  },
  {
    id: 'reporting',
    background: 'Monthly Reporting',
    analytics: 'Power BI & Executive Visuals',
    detail:
      'Preparing monthly progress summaries for HMs, CEOs, and District Officers informs clear, stakeholder-focused dashboard design.',
  },
  {
    id: 'training',
    background: 'MS Excel Instruction',
    analytics: 'Structured Modeling & Formulas',
    detail:
      'Teaching MS Excel and digital literacy strengthens structured spreadsheet problem-solving, pivot reporting, and logical querying.',
  },
];

export function About() {
  const [activeBridgeId, setActiveBridgeId] = useState<string>(BRIDGE_ITEMS[0].id);

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-y border-[#172A25]/12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          indexLabel="01"
          kicker="Background & Transition"
          title="About Me"
          description="Connecting multi-district program leadership and MIS documentation with structured analytical tools."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative Prose & Architectural Spec Grid */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="space-y-5 text-base sm:text-[17px] text-[#172A25]/90 leading-[1.75]">
              {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 rounded-xl overflow-hidden border border-[#172A25]/12 bg-[#F8FAF8]/60">
              {[
                { label: 'Core Stack', value: 'Python, SQL, Power BI, Excel' },
                { label: 'Field Leadership', value: '20 Teachers & Multi-Districts' },
                { label: 'Data Practice', value: 'MIS, SF Files & Monthly Reports' },
                { label: 'Stakeholders', value: 'HMs, CEOs & District Officers' },
              ].map((cell, idx) => (
                <div
                  key={cell.label}
                  className={`p-5 border-[#172A25]/12 ${
                    idx > 0 ? 'border-t sm:border-t-0' : ''
                  } ${idx >= 2 ? 'sm:border-t' : ''} ${
                    idx % 2 === 0 ? 'sm:border-r' : ''
                  }`}
                >
                  <p className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
                    {cell.label}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-[#172A25]">{cell.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Experience-to-Analytics Translation Bridge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 rounded-2xl bg-[#F8FAF8] border border-[#172A25]/12 p-6 sm:p-8 shadow-[0_12px_30px_-18px_rgba(23,107,87,0.12)]"
          >
            <div className="flex items-center justify-between pb-4 mb-2 border-b border-[#172A25]/12">
              <div>
                <p className="font-mono text-xs font-semibold text-[#176B57]">
                  CAPABILITY TRANSLATION
                </p>
                <h3 className="font-display text-xl font-semibold text-[#172A25] mt-0.5">
                  Operations Experience → Data Analytics
                </h3>
              </div>
              <span className="font-mono text-xs text-[#64748B] hidden sm:inline">
                Select row
              </span>
            </div>

            <div className="divide-y divide-[#172A25]/10">
              {BRIDGE_ITEMS.map((item, idx) => {
                const isSelected = activeBridgeId === item.id;
                return (
                  <div key={item.id} className="py-3">
                    <button
                      type="button"
                      onClick={() => setActiveBridgeId(item.id)}
                      aria-expanded={isSelected}
                      className="w-full min-h-[44px] py-1 text-left flex items-center justify-between gap-3 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B57]"
                    >
                      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2.5 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-[#64748B] tabular-nums shrink-0">
                            0{idx + 1}
                          </span>
                          <span
                            className={`text-sm sm:text-base font-semibold transition-colors ${
                              isSelected ? 'text-[#176B57]' : 'text-[#172A25] group-hover:text-[#176B57]'
                            }`}
                          >
                            {item.background}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 pl-6 sm:pl-0">
                          <ArrowRight className="w-3.5 h-3.5 text-[#38A68C] shrink-0" aria-hidden="true" />
                          <span className="text-xs sm:text-sm font-medium text-[#176B57]">
                            {item.analytics}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-sm text-[#64748B] shrink-0 w-6 text-right">
                        {isSelected ? '−' : '+'}
                      </span>
                    </button>

                    {isSelected && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2.5 pl-6 text-sm text-[#64748B] leading-relaxed"
                      >
                        {item.detail}
                      </motion.p>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
