import { Project } from '@/data/projects';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div
        className="group relative flex flex-col justify-between h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'linear-gradient(135deg, rgba(17,24,39,0.9) 0%, rgba(17,24,39,0.6) 100%)',
          border: '1px solid #1E293B',
        }}
      >
        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: '0 0 0 1px rgba(59,130,246,0.2), 0 20px 40px rgba(0,0,0,0.3)' }}
        />

        {/* Card content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" title={project.clientCountryName}>{project.clientCountry}</span>
                <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#94A3B8' }}>{project.year}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-sm mb-5 leading-relaxed" style={{ color: '#94A3B8' }}>
            {project.tagline}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-semibold"
                style={{
                  background: 'rgba(59,130,246,0.08)',
                  color: '#06B6D4',
                  border: '1px solid rgba(6,182,212,0.15)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="relative z-10 flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #1E293B' }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-semibold transition-all hover:scale-[1.02]"
            style={{ background: 'rgba(59,130,246,0.1)', color: '#3B82F6', border: '1px solid rgba(59,130,246,0.2)' }}
          >
            Live Site <ExternalLink size={13} />
          </a>
          <Link
            href={`/projects/${project.slug}`}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-semibold transition-all hover:scale-[1.02]"
            style={{ background: 'rgba(59,130,246,0.06)', color: '#93C5FD', border: '1px solid rgba(59,130,246,0.15)' }}
          >
            Case Study <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
