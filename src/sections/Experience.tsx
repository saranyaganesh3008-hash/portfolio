import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ExperienceCard } from '../components/ExperienceCard';
import { EXPERIENCES } from '../data/experience';

export function Experience() {
  const [selectedOrg, setSelectedOrg] = useState<string>('all');

  const filtered =
    selectedOrg === 'all'
      ? EXPERIENCES
      : EXPERIENCES.filter((exp) => exp.id === selectedOrg);

  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          indexLabel="02"
          kicker="Career Dossier"
          title="Professional Experience"
          description="Program leadership, multi-district facilitation, MIS operations, and structured training documentation."
        />

        {/* Interactive Organization Filter Bar */}
        <div className="mb-6 flex flex-wrap items-center gap-2 border-b border-[#172A25]/12 pb-4">
          <button
            type="button"
            onClick={() => setSelectedOrg('all')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              selectedOrg === 'all'
                ? 'bg-[#176B57] text-white'
                : 'bg-white text-[#64748B] hover:text-[#172A25] border border-[#172A25]/12'
            }`}
          >
            All Roles (03)
          </button>
          {EXPERIENCES.map((exp, i) => (
            <button
              key={exp.id}
              type="button"
              onClick={() => setSelectedOrg(exp.id)}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedOrg === exp.id
                  ? 'bg-[#176B57] text-white'
                  : 'bg-white text-[#64748B] hover:text-[#172A25] border border-[#172A25]/12'
              }`}
            >
              0{i + 1}. {exp.organization}
            </button>
          ))}
        </div>

        {/* Architectural Two-Column Dossier Rows */}
        <div className="border-t border-[#172A25]/12">
          {filtered.map((experience) => {
            const realIndex = EXPERIENCES.findIndex((e) => e.id === experience.id);
            return (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={realIndex}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
