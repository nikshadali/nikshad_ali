import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ProjectsPreview() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#3B82F6' }}>
              Selected Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Projects shipped for<br className="hidden sm:block" /> international clients
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: '#3B82F6' }}
            >
              All projects
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
