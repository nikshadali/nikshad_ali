import { skills } from '@/data/skills';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const levelColors: Record<string, { bg: string; text: string; border: string }> = {
  expert:     { bg: 'rgba(59,130,246,0.08)',   text: '#3B82F6', border: 'rgba(59,130,246,0.2)' },
  proficient: { bg: 'rgba(6,182,212,0.08)',    text: '#06B6D4', border: 'rgba(6,182,212,0.2)' },
  familiar:   { bg: 'rgba(148,163,184,0.06)',  text: '#94A3B8', border: 'rgba(148,163,184,0.15)' },
};

export function SkillsGrid() {
  return (
    <div className="space-y-12">
      {skills.map((group, groupIndex) => {
        const colors = levelColors[group.level];
        return (
          <AnimatedSection key={group.category} delay={groupIndex * 0.12}>
            <div className="flex items-center gap-3 mb-5">
              <h3 className="font-display text-lg font-bold text-white">{group.category}</h3>
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
              >
                {group.level}
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  style={{
                    background: 'rgba(17,24,39,0.8)',
                    border: '1px solid #1E293B',
                    color: '#F1F5F9',
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
