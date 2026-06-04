export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  client: string
  clientCountry: string
  clientCountryName: string
  liveUrl: string
  year: string
  role: string
  stack: string[]
  category: 'saas-dashboard' | 'fintech' | 'consulting' | 'landing-page'
  featured: boolean
  highlights: string[]
  screenshots: string[]
  challenge: string
  solution: string
  results: string
}

export const projects: Project[] = [
  {
    slug: 'subtv-manager',
    title: 'SubTV Manager',
    tagline: 'Enterprise SaaS admin dashboard for Australian digital signage platform',
    description: 'A multi-module admin panel for managing overlay and campaign distribution for physical venue networks.',
    client: 'Spinsrart',
    clientCountry: '🇦🇺',
    clientCountryName: 'Australia',
    liveUrl: 'https://subtv-154100.web.app/manager/',
    year: '2023–Present',
    role: 'Frontend Developer',
    stack: ['React', 'Shadcn/UI', 'Firebase', 'TypeScript'],
    category: 'saas-dashboard',
    featured: true,
    highlights: [
      'Multi-module admin panel: Venue Management, System Admin, Ops Dash',
      'Overlay management with 510+ records across 51 paginated pages',
      'Advanced filter system (name filter + active status + advanced filter modal)',
      'Global search with keyboard shortcut (⌘K style)',
      'Venue switcher in header for multi-tenant access',
      'Dark mode UI throughout using Shadcn/UI components'
    ],
    screenshots: ['/projects/subtv-manager/screenshot-1.png'],
    challenge: 'Managing state and pagination across 510+ overlay records while ensuring performant rendering and immediate UI feedback for filtering and bulk actions.',
    solution: 'Implemented robust React state management with Shadcn/UI table components, incorporating efficient debounced search and structured data fetching from Firebase.',
    results: 'Streamlined distribution for major brands like Adidas across the entire network.'
  },
  {
    slug: 'paygex',
    title: 'Paygex',
    tagline: 'UAE fintech payment platform for MENA businesses',
    description: 'Full public-facing marketing and product platform for a leading payment gateway.',
    client: 'Paygex',
    clientCountry: '🇦🇪',
    clientCountryName: 'UAE',
    liveUrl: 'https://www.paygex.ae/',
    year: '2024–Present',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'SEO'],
    category: 'fintech',
    featured: true,
    highlights: [
      'Full public-facing marketing and product platform',
      'Full technical SEO: meta descriptions, OG tags, structured multi-page architecture',
      'Multi-language toggle (EN)',
      'PCI DSS Level 1 trust signals integration'
    ],
    screenshots: ['/projects/paygex/screenshot-1.png'],
    challenge: 'Achieving perfect technical SEO scores and fast loading times for a highly visual, multi-page financial platform.',
    solution: 'Utilized Next.js App Router with strict server-side rendering for optimal indexability, heavily optimized images using next/image, and structured schema markup.',
    results: 'Lighthouse SEO score of 100 and extremely fast LCP under 1.5s.'
  },
  {
    slug: 'futureaxis',
    title: 'FutureAxis',
    tagline: 'AI ERP & Business Consulting Platform — UAE',
    description: 'Multi-page Next.js marketing and product platform with an auth-protected client dashboard.',
    client: 'FutureAxis',
    clientCountry: '🇦🇪',
    clientCountryName: 'UAE',
    liveUrl: 'https://www.futureaxis.ae/',
    year: '2025–Present',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Auth'],
    category: 'consulting',
    featured: true,
    highlights: [
      'Multi-page Next.js marketing platform',
      'Dark/light theme toggle',
      'Services and industry showcase sections',
      'Auth-protected client Dashboard'
    ],
    screenshots: ['/projects/futureaxis/screenshot-1.png'],
    challenge: 'Creating a seamless transition between public marketing pages and the secure, authenticated client dashboard.',
    solution: 'Implemented custom authentication flow and protected routes within Next.js, managing session state gracefully across transitions.',
    results: 'Provided a unified and premium digital experience from lead generation to client onboarding.'
  }
]
