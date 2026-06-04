import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer style={{ borderTop: '1px solid #1E293B' }} className="mt-auto py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="font-display text-xl font-bold tracking-tight">
              Nikshad<span style={{ color: '#3B82F6' }}>.dev</span>
            </Link>
            <p className="text-sm mt-1" style={{ color: '#94A3B8' }}>
              Senior Frontend Engineer
            </p>
          </div>

          <nav className="flex items-center gap-6 text-sm" style={{ color: '#94A3B8' }}>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <a href="https://linkedin.com/in/nikshadali" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</a>
          </nav>
        </div>

        <div style={{ borderTop: '1px solid #1E293B' }} className="mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: '#94A3B8' }}>
            © {year} Nikshad Ali. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: '#94A3B8' }}>
            Peshawar, Pakistan &middot; Open to Remote Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
