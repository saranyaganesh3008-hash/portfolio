import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, ChevronRight, Clock } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectDiagram } from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';

export function Projects() {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);
  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0];

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          indexLabel="04"
          kicker="Analytics Notebook"
          title="Data Analytics Projects"
          description="Upcoming hands-on projects across Python, SQL, Power BI, and Microsoft Excel. All projects listed are currently planned (Coming Soon)."
        />

        {/* Mobile & Tablet (< lg): Inline Expandable Project Accordion Cards */}
        <div className="lg:hidden space-y-4">
          {PROJECTS.map((project, idx) => {
            const isExpanded = project.id === activeId;
            return (
              <div
                key={project.id}
                className="rounded-2xl border border-[#172A25]/12 bg-white overflow-hidden shadow-[0_8px_24px_-16px_rgba(23,107,87,0.12)]"
              >
                <button
                  type="button"
                  onClick={() => setActiveId(project.id)}
                  aria-expanded={isExpanded}
                  className={`w-full text-left p-5 flex items-start justify-between gap-3 transition-colors cursor-pointer ${
                    isExpanded ? 'bg-[#DFF4EC]/45' : 'bg-white'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs mb-1">
                      <span className="font-mono tabular-nums text-[#64748B]">0{idx + 1}</span>
                      <span className="text-[#64748B]" aria-hidden="true">·</span>
                      <span className="font-semibold text-[#176B57]">{project.technology}</span>
                      <span className="text-[#64748B]" aria-hidden="true">·</span>
                      <span className="text-[#64748B]">{project.status}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#172A25]">
                      {project.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 mt-1 shrink-0 text-[#176B57] transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isExpanded && (
                  <div className="p-5 pt-2 border-t border-[#172A25]/10 bg-white">
                    <div className="my-3 aspect-[16/9] w-full rounded-xl border border-[#172A25]/10 overflow-hidden bg-[#F8FAF8]">
                      <ProjectDiagram type={project.illustration} />
                    </div>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[#172A25]/10">
                      <p className="font-mono text-[11px] font-semibold text-[#172A25] mb-2.5 uppercase tracking-wider">
                        Planned Analytical Scope
                      </p>
                      <ul className="space-y-2">
                        {project.plannedFocus.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-[#172A25]/85"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-[#176B57] mt-0.5 shrink-0"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop (lg+): Interactive Split Notebook Workbench */}
        <div className="hidden lg:grid lg:grid-cols-12 rounded-2xl overflow-hidden border border-[#172A25]/12 bg-white shadow-[0_14px_34px_-18px_rgba(23,107,87,0.12)]">
          {/* Left Rail: Selectable Planned Project Index */}
          <div
            role="tablist"
            aria-label="Planned Data Analytics Projects"
            className="lg:col-span-5 divide-y divide-[#172A25]/12 border-r border-[#172A25]/15"
          >
            {PROJECTS.map((project, idx) => {
              const isSelected = project.id === activeId;
              return (
                <button
                  key={project.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(project.id)}
                  className={`w-full text-left p-6 transition-colors cursor-pointer flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#176B57] ${
                    isSelected
                      ? 'bg-[#DFF4EC]/60'
                      : 'bg-white hover:bg-[#F8FAF8]'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs mb-1.5">
                      <span className="font-mono tabular-nums text-[#64748B]">
                        0{idx + 1}
                      </span>
                      <span className="text-[#64748B]" aria-hidden="true">
                        ·
                      </span>
                      <span className="font-semibold text-[#176B57]">{project.technology}</span>
                      <span className="text-[#64748B]" aria-hidden="true">
                        ·
                      </span>
                      <span className="text-[#64748B]">{project.status}</span>
                    </div>

                    <h3
                      className={`font-display text-xl font-semibold tracking-tight ${
                        isSelected ? 'text-[#176B57]' : 'text-[#172A25]'
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 mt-1 shrink-0 transition-transform ${
                      isSelected ? 'text-[#176B57] translate-x-0.5' : 'text-[#64748B]'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Right Panel: Interactive Planned Scope & Visual Preview */}
          <div className="lg:col-span-7 p-8 flex flex-col justify-between bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#172A25]/10">
                  <span className="font-mono text-xs font-semibold text-[#176B57]">
                    {activeProject.technology}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#64748B]">
                    <Clock className="w-3.5 h-3.5 text-[#38A68C]" aria-hidden="true" />
                    <span>Status: {activeProject.status}</span>
                  </span>
                </div>

                {/* Custom Visual Diagram */}
                <div className="my-6 aspect-[21/10] w-full rounded-xl border border-[#172A25]/10 overflow-hidden bg-[#F8FAF8]">
                  <ProjectDiagram type={activeProject.illustration} />
                </div>

                <h3 className="font-display text-3xl font-semibold text-[#172A25]">
                  {activeProject.title}
                </h3>

                <p className="mt-3 text-base text-[#64748B] leading-relaxed">
                  {activeProject.description}
                </p>

                <div className="mt-6 pt-5 border-t border-[#172A25]/10">
                  <p className="font-mono text-xs font-semibold text-[#172A25] mb-3">
                    PLANNED ANALYTICAL SCOPE
                  </p>
                  <ul className="space-y-2.5">
                    {activeProject.plannedFocus.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#172A25]/85"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#176B57] mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
