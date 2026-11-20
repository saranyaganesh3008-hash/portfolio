import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { ExperienceItem } from '../data/experience';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 py-7 sm:py-10 border-b border-[#172A25]/12 last:border-b-0 hover:bg-white/70 transition-colors sm:px-4 sm:-mx-4"
    >
      {/* Left Metadata Ledger */}
      <div className="lg:col-span-4 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs font-semibold tabular-nums text-[#176B57]">
              {num}
            </span>
            <span className="h-px w-5 bg-[#38A68C]" aria-hidden="true" />
            <span className="font-mono text-xs tabular-nums text-[#64748B]">
              {experience.period}
            </span>
          </div>

          <h3 className="font-display text-2xl font-semibold text-[#172A25] tracking-tight group-hover:text-[#176B57] transition-colors">
            {experience.role}
          </h3>

          <p className="mt-1 text-base font-medium text-[#176B57]">
            {experience.organization}
          </p>
        </div>

        <div className="text-xs text-[#64748B] leading-relaxed">
          {experience.focusAreas.join(' · ')}
        </div>
      </div>

      {/* Right Responsibilities Column */}
      <div className="lg:col-span-8">
        <ul className="space-y-3">
          {experience.responsibilities.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[15px] text-[#172A25]/85 leading-relaxed"
            >
              <ArrowRight
                className="w-4 h-4 text-[#38A68C] mt-1 shrink-0"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
