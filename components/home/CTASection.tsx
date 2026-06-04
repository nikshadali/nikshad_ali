import { AnimatedSection } from '@/components/shared/AnimatedSection';
import Link from 'next/link';
import { Download, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ borderTop: '1px solid #1E293B' }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(59,130,246,0.08) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative">
        <AnimatedSection className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: '#3B82F6' }}>
            Open to Opportunities
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            Ready to build<br />
            <span style={{
              background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              something great?
            </span>
          </h2>
          <p className="text-lg mb-12 leading-relaxed" style={{ color: '#94A3B8' }}>
            Open to senior remote roles and freelance frontend projects.<br className="hidden sm:block" />
            Response within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl px-8 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', boxShadow: '0 0 30px rgba(59,130,246,0.25)' }}
            >
              <Mail size={18} />
              Get In Touch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl px-8 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid #1E293B', color: '#F1F5F9' }}
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
