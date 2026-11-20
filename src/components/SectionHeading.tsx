import { motion } from 'motion/react';

interface SectionHeadingProps {
  indexLabel: string;
  kicker: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  indexLabel,
  kicker,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="pb-6 mb-10 border-b border-[#172A25]/12 flex flex-col md:flex-row md:items-end justify-between gap-4"
    >
      <div>
        <div className="flex items-center gap-3 text-xs font-medium text-[#176B57] mb-2">
          <span className="font-mono tabular-nums text-[#64748B]">{indexLabel}</span>
          <span className="w-4 h-px bg-[#38A68C]" aria-hidden="true" />
          <span>{kicker}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold tracking-tight text-[#172A25] [text-wrap:balance]">
          {title}
        </h2>
      </div>

      {description && (
        <p className="max-w-md text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
