import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Not Found' };
  return {
    title: `${project.title} | Nikshad Ali`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navigation />
      <main className="flex-1">

        {/* Case Study Hero */}
        <section className="relative pt-20 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 70%)' }}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <Link href="/projects" className="text-sm transition-colors" style={{ color: '#94A3B8' }}>
                  ← Projects
                </Link>
                <span style={{ color: '#1E293B' }}>/</span>
                <span className="text-sm" style={{ color: '#94A3B8' }}>{project!.title}</span>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{project!.clientCountry}</span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={{ background: 'rgba(59,130,246,0.1)', color: '#3B82F6', border: '1px solid rgba(59,130,246,0.2)' }}
                >
                  {project!.category.replace('-', ' ')}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 text-white">
                {project!.title}
              </h1>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#94A3B8' }}>
                {project!.tagline}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project!.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{ background: 'rgba(6,182,212,0.08)', color: '#06B6D4', border: '1px solid rgba(6,182,212,0.15)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project!.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl px-8 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', boxShadow: '0 0 30px rgba(59,130,246,0.2)' }}
              >
                Visit Live Site <ExternalLink size={15} />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="py-20" style={{ borderTop: '1px solid #1E293B' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-20">
            
            <AnimatedSection>
              <h2 className="font-display text-2xl font-bold text-white mb-5">Overview</h2>
              <p className="text-lg leading-relaxed" style={{ color: '#94A3B8' }}>{project!.description}</p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-display text-2xl font-bold text-white mb-5">Key Features</h2>
              <ul className="space-y-4">
                {project!.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 flex-shrink-0" size={18} style={{ color: '#10B981' }} />
                    <span className="text-base leading-relaxed" style={{ color: '#94A3B8' }}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-display text-2xl font-bold text-white mb-5">The Challenge</h2>
              <p className="text-lg leading-relaxed" style={{ color: '#94A3B8' }}>{project!.challenge}</p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-display text-2xl font-bold text-white mb-5">The Solution</h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#94A3B8' }}>{project!.solution}</p>
              <div
                className="p-6 rounded-2xl"
                style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}
              >
                <h3 className="font-bold mb-2" style={{ color: '#10B981' }}>Results & Impact</h3>
                <p style={{ color: '#94A3B8' }}>{project!.results}</p>
              </div>
            </AnimatedSection>

          </div>
        </section>

        {/* Next Project */}
        <section className="py-20" style={{ borderTop: '1px solid #1E293B', background: 'rgba(17,24,39,0.3)' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: '#94A3B8' }}>
                Up Next
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
                {nextProject.title}
              </h2>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex h-12 items-center gap-2 rounded-xl px-8 text-sm font-semibold transition-all hover:scale-[1.02]"
                style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid #1E293B', color: '#F1F5F9' }}
              >
                View Case Study <ArrowRight size={15} />
              </Link>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
