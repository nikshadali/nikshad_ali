import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { skills } from '@/data/skills';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SkillsStrip() {
  const expertSkills = skills.find(s => s.level === 'expert')?.skills || [];

  return (
    <section className="py-20" style={{ borderTop: '1px solid #1E293B' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: '#3B82F6' }}>
            Core Stack
          </p>
          <h2 className="font-display text-3xl font-bold">Technologies I ship with</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-3">
          {expertSkills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-default"
              style={{
                background: 'rgba(17,24,39,0.8)',
                border: '1px solid #1E293B',
                color: '#F1F5F9',
              }}
            >
              {skill}
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
