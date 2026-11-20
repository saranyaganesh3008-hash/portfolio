import {
  BarChart3,
  Database,
  FileSpreadsheet,
  FileText,
  Filter,
  GitBranch,
  LayoutDashboard,
  Search,
  Table2,
  Terminal,
} from 'lucide-react';
import type { SkillIconKey, SkillItem } from '../data/skills';

export function SkillIcon({ icon, className = 'w-4 h-4 text-[#176B57]' }: { icon: SkillIconKey; className?: string }) {
  switch (icon) {
    case 'python':
      return <Terminal className={className} aria-hidden="true" />;
    case 'sql':
      return <Database className={className} aria-hidden="true" />;
    case 'powerbi':
      return <BarChart3 className={className} aria-hidden="true" />;
    case 'excel':
      return <FileSpreadsheet className={className} aria-hidden="true" />;
    case 'cleaning':
      return <Filter className={className} aria-hidden="true" />;
    case 'manipulation':
      return <GitBranch className={className} aria-hidden="true" />;
    case 'eda':
      return <Search className={className} aria-hidden="true" />;
    case 'dashboard':
      return <LayoutDashboard className={className} aria-hidden="true" />;
    case 'mis':
      return <Table2 className={className} aria-hidden="true" />;
    case 'documentation':
      return <FileText className={className} aria-hidden="true" />;
  }
}

interface SkillCardProps {
  skill: SkillItem;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="group flex items-start gap-3.5 py-3.5 border-b border-[#172A25]/8 last:border-b-0">
      <div className="w-8 h-8 bg-[#DFF4EC]/80 group-hover:bg-[#176B57] text-[#176B57] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-150">
        <SkillIcon icon={skill.icon} className="w-4 h-4 transition-colors duration-150" />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-semibold text-[#172A25] group-hover:text-[#176B57] transition-colors">
          {skill.name}
        </h4>
        <p className="mt-0.5 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          {skill.detail}
        </p>
      </div>
    </div>
  );
}
