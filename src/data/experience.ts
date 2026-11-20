export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  current?: boolean;
  responsibilities: string[];
  focusAreas: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'bumbleb-trust',
    role: 'Implementation Lead',
    organization: 'BumbleB Trust',
    period: 'Present',
    current: true,
    focusAreas: ['Program Leadership', 'Stakeholder Management', 'Monitoring & Reporting'],
    responsibilities: [
      'Leading the implementation of the Kalvi40 digital education program in government schools.',
      'Coordinating smart TV-based digital learning through the Kalvi40 application.',
      'Leading and managing a team of 20 teachers.',
      'Managing stakeholders, including Headmasters (HMs), Chief Educational Officers (CEOs), and District Officers (DOs).',
      'Monitoring program implementation, progress, and follow-up activities.',
      'Managing program documentation and implementation reports.',
    ],
  },
  {
    id: 'nalandaway-foundation',
    role: 'Coordinator & Facilitator',
    organization: 'Nalandaway Foundation',
    period: 'Program Coordination',
    current: false,
    focusAreas: ['Multi-District Coordination', 'Assessment Tracking', 'Monthly Reporting'],
    responsibilities: [
      'Coordinated educational and wellbeing programs across multiple districts.',
      'Facilitated student sessions on wellbeing, Functional English, and 21st-century skills.',
      'Maintained student assessment data, attendance records, and session trackers.',
      'Prepared monthly reports and monitored student progress.',
      'Managed program documentation and stakeholder coordination.',
    ],
  },
  {
    id: 'ace-skill-development',
    role: 'Computer Trainer & MIS Support',
    organization: 'ACE Skill Development',
    period: 'January 2022 – January 2024',
    current: false,
    focusAreas: ['MIS Activities', 'MS Excel Training', 'Data Documentation'],
    responsibilities: [
      'Delivered computer skills training to graduates under the DDU-GKY scheme.',
      'Trained students in MS Word, MS Excel, and PowerPoint.',
      'Supported students in developing computer and digital literacy skills.',
      'Handled MIS activities and maintained student records and SF files.',
      'Tracked student attendance and maintained training documentation.',
      'Supported training activities and placement-related processes.',
    ],
  },
];
