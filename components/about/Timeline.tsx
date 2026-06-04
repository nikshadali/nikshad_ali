import { timeline } from '@/data/timeline';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export function Timeline() {
  return (
    <div className="relative" style={{ paddingLeft: '2px' }}>
      {/* Vertical line */}
      <div
        className="absolute top-0 bottom-0 left-0 w-px"
        style={{ background: 'linear-gradient(to bottom, rgba(59,130,246,0.8), rgba(59,130,246,0.1))', marginLeft: '7px' }}
      />

      <div className="space-y-10">
        {timeline.map((item, index) => (
          <AnimatedSection key={index} delay={index * 0.07}>
            <div className="relative flex gap-5 pl-10">
              {/* Dot */}
              <div
                className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full flex-shrink-0"
                style={{
                  background: index === 0 ? '#3B82F6' : '#1E293B',
                  border: index === 0 ? '2px solid #3B82F6' : '2px solid #94A3B8',
                  boxShadow: index === 0 ? '0 0 12px rgba(59,130,246,0.4)' : 'none',
                }}
              />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 mb-2">
                  <h3 className="font-display font-bold text-white">{item.title}</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(59,130,246,0.1)', color: '#06B6D4' }}>
                    {item.date || item.year}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{item.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
