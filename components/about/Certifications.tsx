import { certifications } from '@/data/certifications';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export function Certifications() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {certifications.map((cert, index) => (
        <AnimatedSection key={cert.id} delay={index * 0.08}>
          <div
            className="group relative flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid #1E293B' }}
          >
            {/* Icon */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg mt-0.5"
              style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
            >
              🏅
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-white mb-1 leading-snug text-sm">{cert.title}</h4>
              <p className="text-xs mb-2" style={{ color: '#94A3B8' }}>{cert.issuer}</p>
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(59,130,246,0.1)', color: '#3B82F6', border: '1px solid rgba(59,130,246,0.2)' }}
              >
                {cert.date}
              </span>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
