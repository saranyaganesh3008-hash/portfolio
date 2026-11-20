import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';
import { SKILL_CATEGORIES, type SkillGroup } from '../data/skills';

type FilterTab = 'all' | SkillGroup;

const FILTER_TABS: { id: FilterTab; label: string }[] = [
  { id: 'all', label: 'All Categories (06)' },
  { id: 'tools', label: 'Core Tools' },
  { id: 'analytics', label: 'Analytics & Reporting' },
];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');

  const visibleCategories = SKILL_CATEGORIES.filter((cat) =>
    activeFilter === 'all' ? true : cat.group === activeFilter
  );

  return (
    <section id="skills" className="py-16 sm:py-24 bg-white border-y border-[#172A25]/12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          indexLabel="03"
          kicker="Capabilities Matrix"
          title="Technical Skills"
          description="Technical tools, analytical workflows, and structured MIS reporting competencies."
        />

        {/* Segmented Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter skills by category"
          className="w-full sm:w-auto inline-flex flex-wrap sm:flex-nowrap items-center gap-1 p-1 rounded-xl bg-[#F8FAF8] border border-[#172A25]/12 mb-8 sm:mb-10"
        >
          {FILTER_TABS.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B57] ${
                  isSelected
                    ? 'bg-[#176B57] text-white'
                    : 'text-[#64748B] hover:text-[#172A25]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Hairline Architectural Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleCategories.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl border border-[#172A25]/12 bg-white hover:border-[#38A68C]/50 hover:shadow-[0_12px_28px_-16px_rgba(23,107,87,0.14)] transition-all duration-200 flex flex-col"
            >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#172A25]/10">
                <h3 className="font-mono text-xs font-semibold tracking-wider text-[#176B57] uppercase">
                  {group.category}
                </h3>
                <span className="font-mono text-[11px] text-[#64748B] tabular-nums">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex-1">
                {group.items.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
