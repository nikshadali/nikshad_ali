'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,15,30,0.92)' : 'rgba(10,15,30,0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #1E293B' : '1px solid transparent',
      }}
    >
      <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Link href="/" className="font-display text-xl font-bold tracking-tight">
          Nikshad<span style={{ color: '#3B82F6' }}>.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors"
              style={{
                color: pathname === link.href ? '#F1F5F9' : '#94A3B8',
                background: pathname === link.href ? 'rgba(59,130,246,0.1)' : 'transparent',
              }}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4 rounded-full"
                  style={{ background: '#3B82F6' }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-lg px-4 text-sm font-semibold transition-all hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', color: 'white', boxShadow: '0 0 20px rgba(59,130,246,0.2)' }}
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: '#94A3B8' }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div style={{ borderTop: '1px solid #1E293B', background: 'rgba(10,15,30,0.98)' }} className="md:hidden">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: pathname === link.href ? '#3B82F6' : '#94A3B8',
                  background: pathname === link.href ? 'rgba(59,130,246,0.08)' : 'transparent',
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center"
              style={{ background: 'rgba(59,130,246,0.1)', color: '#3B82F6', border: '1px solid rgba(59,130,246,0.2)' }}
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
