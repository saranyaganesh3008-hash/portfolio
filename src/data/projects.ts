export type ProjectIllustrationType = 'python' | 'sql' | 'powerbi' | 'excel';

export interface ProjectItem {
  id: string;
  title: string;
  technology: string;
  description: string;
  status: 'Coming Soon';
  illustration: ProjectIllustrationType;
  plannedFocus: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'python-data-analysis',
    title: 'Python Data Analysis Project',
    technology: 'Python',
    description:
      'Data cleaning, exploratory analysis, identifying patterns, and extracting meaningful insights from datasets.',
    status: 'Coming Soon',
    illustration: 'python',
    plannedFocus: [
      'Dataset profiling and missing-value treatment',
      'Exploratory statistical summaries and distribution checks',
      'Pattern identification and visual insight synthesis',
    ],
  },
  {
    id: 'sql-data-analysis',
    title: 'SQL Data Analysis Project',
    technology: 'SQL',
    description:
      'Using SQL queries to explore datasets, analyze trends, and generate meaningful reports.',
    status: 'Coming Soon',
    illustration: 'sql',
    plannedFocus: [
      'Multi-table joins and relational dataset exploration',
      'Cohort, category, and time-period trend aggregations',
      'Structured analytical queries for recurring reporting',
    ],
  },
  {
    id: 'power-bi-dashboard',
    title: 'Power BI Dashboard Project',
    technology: 'Power BI',
    description:
      'Developing interactive dashboards to visualize data, track KPIs, and support data-driven decisions.',
    status: 'Coming Soon',
    illustration: 'powerbi',
    plannedFocus: [
      'Clean data modeling and KPI card hierarchy',
      'Interactive slicers for multi-dimensional filtering',
      'Executive summary views tailored for stakeholder decisions',
    ],
  },
  {
    id: 'excel-data-analysis',
    title: 'Excel Data Analysis Project',
    technology: 'Microsoft Excel',
    description:
      'Analyzing data using Excel functions, data cleaning, reporting, and visualization.',
    status: 'Coming Soon',
    illustration: 'excel',
    plannedFocus: [
      'Structured data cleaning and formula-driven validation',
      'Pivot summaries and cross-tabulated reporting',
      'Decision-ready charts and formatted MIS templates',
    ],
  },
];
