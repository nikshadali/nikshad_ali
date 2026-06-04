import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Timeline } from '@/components/about/Timeline';
import { SkillsGrid } from '@/components/about/SkillsGrid';
import { Certifications } from '@/components/about/Certifications';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Nikshad Ali',
  description: 'My story, timeline, skills, and certifications.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">

        {/* Hero intro */}
        <section className="relative pt-20 pb-24 overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 70%)' }}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <AnimatedSection className="flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Avatar */}
              <div
                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center font-display font-bold text-4xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.1))',
                  border: '1px solid rgba(59,130,246,0.3)',
                  color: '#3B82F6',
                  boxShadow: '0 0 40px rgba(59,130,246,0.1)',
                }}
              >
                NA
              </div>
              
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#3B82F6' }}>
                  About Me
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
                  Hi, I'm Nikshad.
                </h1>
                <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#94A3B8' }}>
                  <p>
                    A Senior Frontend Engineer based in Peshawar, Pakistan — working remotely with international clients in Australia and the UAE.
                  </p>
                  <p>
                    With 4+ years of experience and a Meta Front-End Developer certification, I specialize in building highly performant, scalable, and visually refined web applications using React, Next.js, and TypeScript.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24" style={{ borderTop: '1px solid #1E293B' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <AnimatedSection className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#3B82F6' }}>
                Career Timeline
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">My Story</h2>
            </AnimatedSection>
            <Timeline />
          </div>
        </section>

        {/* Skills */}
        <section className="py-24" style={{ borderTop: '1px solid #1E293B', background: 'rgba(17,24,39,0.3)' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <AnimatedSection className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#3B82F6' }}>
                Technologies
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Technical Arsenal</h2>
            </AnimatedSection>
            <SkillsGrid />
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24" style={{ borderTop: '1px solid #1E293B' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <AnimatedSection className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#3B82F6' }}>
                Credentials
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Certifications</h2>
            </AnimatedSection>
            <Certifications />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
