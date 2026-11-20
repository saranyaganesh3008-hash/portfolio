export type SkillIconKey =
  | 'python'
  | 'sql'
  | 'powerbi'
  | 'excel'
  | 'cleaning'
  | 'manipulation'
  | 'eda'
  | 'dashboard'
  | 'mis'
  | 'documentation';

export type SkillGroup = 'tools' | 'analytics';

export interface SkillItem {
  name: string;
  icon: SkillIconKey;
  detail: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  group: SkillGroup;
  items: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    category: 'Programming',
    group: 'tools',
    items: [
      {
        name: 'Python',
        icon: 'python',
        detail: 'Scripting, data handling, and exploratory analysis workflows',
      },
    ],
  },
  {
    id: 'database',
    category: 'Database',
    group: 'tools',
    items: [
      {
        name: 'SQL',
        icon: 'sql',
        detail: 'Structured querying, filtering, joins, and trend reporting',
      },
    ],
  },
  {
    id: 'data-visualization',
    category: 'Data Visualization',
    group: 'tools',
    items: [
      {
        name: 'Power BI',
        icon: 'powerbi',
        detail: 'Interactive visual reports and KPI tracking layouts',
      },
    ],
  },
  {
    id: 'spreadsheet',
    category: 'Spreadsheet',
    group: 'tools',
    items: [
      {
        name: 'Microsoft Excel',
        icon: 'excel',
        detail: 'Formulas, data organization, trackers, and structured summaries',
      },
    ],
  },
  {
    id: 'data-analytics',
    category: 'Data Analytics',
    group: 'analytics',
    items: [
      {
        name: 'Data Cleaning',
        icon: 'cleaning',
        detail: 'Handling missing entries, standardizing formats, and validation',
      },
      {
        name: 'Data Manipulation',
        icon: 'manipulation',
        detail: 'Reshaping, aggregating, and preparing datasets for analysis',
      },
      {
        name: 'Exploratory Data Analysis',
        icon: 'eda',
        detail: 'Uncovering distributions, patterns, and operational trends',
      },
    ],
  },
  {
    id: 'reporting',
    category: 'Reporting',
    group: 'analytics',
    items: [
      {
        name: 'Dashboard Creation',
        icon: 'dashboard',
        detail: 'Designing clear, stakeholder-ready visual summaries',
      },
      {
        name: 'MIS Reporting',
        icon: 'mis',
        detail: 'Monthly progress trackers, attendance records, and program metrics',
      },
      {
        name: 'Data Documentation',
        icon: 'documentation',
        detail: 'Structured record maintenance, SF files, and audit-ready logs',
      },
    ],
  },
];
