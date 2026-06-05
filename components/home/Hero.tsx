'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
  };

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse 40% 40% at 80% 60%, rgba(6,182,212,0.06) 0%, transparent 70%)' }} />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(248,250,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-20">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">

          {/* Availability badge */}
          <motion.div variants={item} className="mb-8 inline-flex">
            <span
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm"
              style={{
                background: 'rgba(59,130,246,0.06)',
                border: '1px solid rgba(59,130,246,0.25)',
                boxShadow: '0 0 16px rgba(59,130,246,0.08)',
                color: '#93C5FD',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#3B82F6' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#3B82F6' }}></span>
              </span>
              Available for remote roles &amp; freelance
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 variants={item} className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-[-0.03em] mb-6 leading-[1.08]">
            I build web apps<br />
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #93C5FD 0%, #3B82F6 45%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>that perform.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={item} style={{ color: '#94A3B8' }} className="mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl mb-12 leading-relaxed">
            Senior Frontend Engineer&nbsp;&middot;&nbsp;React & Next.js&nbsp;&middot;&nbsp;Meta Certified
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/projects"
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)', boxShadow: '0 0 30px rgba(59,130,246,0.25), inset 0 1px 0 rgba(255,255,255,0.1)' }}
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              style={{ borderColor: '#1E293B', background: 'rgba(17,24,39,0.6)', backdropFilter: 'blur(8px)', color: '#F1F5F9' }}
            >
              Let's Talk
            </Link>
          </motion.div>

          {/* Social Proof Strip */}
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { value: '4+', label: 'Years Experience' },
              { value: '3', label: 'International Clients' },
              { value: '🇦🇺🇦🇪', label: 'AU & UAE' },
              { value: '✓', label: 'Meta Certified' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="font-display text-2xl font-bold" style={{ color: '#3B82F6' }}>{stat.value}</span>
                <span className="text-xs tracking-widest uppercase" style={{ color: '#94A3B8' }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <p className="text-sm" style={{ color: '#94A3B8' }}>
          Shipped for clients in 🇦🇺 Australia &amp; 🇦🇪 UAE — available worldwide
        </p>
      </motion.div>
    </section>
  );
}
