import { motion } from 'motion/react';
import { PROFILE } from '../data/profile';

export function CareerObjective() {
  return (
    <section aria-labelledby="career-objective-heading" className="py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl bg-[#DFF4EC] border border-[#176B57]/20 px-6 py-12 sm:px-14 sm:py-16"
        >
          {/* Architectural corner crosshairs */}
          <span className="absolute top-3 left-3 font-mono text-xs text-[#176B57]/50" aria-hidden="true">+</span>
          <span className="absolute top-3 right-3 font-mono text-xs text-[#176B57]/50" aria-hidden="true">+</span>
          <span className="absolute bottom-3 left-3 font-mono text-xs text-[#176B57]/50" aria-hidden="true">+</span>
          <span className="absolute bottom-3 right-3 font-mono text-xs text-[#176B57]/50" aria-hidden="true">+</span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs font-semibold text-[#176B57] tracking-wider uppercase mb-2">
                05 · Direction
              </p>
              <h2
                id="career-objective-heading"
                className="font-display text-2xl sm:text-3xl font-semibold text-[#172A25]"
              >
                Career Objective
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="font-display italic text-xl sm:text-2xl lg:text-[1.65rem] text-[#172A25] leading-relaxed">
                &ldquo;{PROFILE.careerObjective}&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
