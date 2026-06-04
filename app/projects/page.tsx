import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { projects } from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Nikshad Ali',
  description: 'Selected case studies and projects built for international clients across SaaS, Fintech, and Consulting.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">

        {/* Header */}
        <section className="relative pt-20 pb-12 overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)' }}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: '#3B82F6' }}>
                Portfolio
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
                Projects
              </h1>
              <p className="text-xl max-w-2xl" style={{ color: '#94A3B8' }}>
                A selection of my recent work across SaaS dashboards, Fintech platforms, and full-stack consulting products.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24 pt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
