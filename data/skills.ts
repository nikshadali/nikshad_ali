export interface SkillGroup {
  category: string
  level: 'expert' | 'proficient' | 'familiar'
  skills: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Expert',
    level: 'expert',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Shadcn/UI',
      'HTML5',
      'CSS3',
    ],
  },
  {
    category: 'Proficient',
    level: 'proficient',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux Toolkit',
      'TanStack Query',
      'Framer Motion',
      'GSAP',
    ],
  },
  {
    category: 'Familiar',
    level: 'familiar',
    skills: [
      'Supabase',
      'Firebase',
      'Docker',
      'PostgreSQL',
      'WordPress',
    ],
  },
]
