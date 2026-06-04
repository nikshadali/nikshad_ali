import { Hero } from '@/components/home/Hero';
import { ProjectsPreview } from '@/components/home/ProjectsPreview';
import { SkillsStrip } from '@/components/home/SkillsStrip';
import { CTASection } from '@/components/home/CTASection';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col">
        <Hero />
        <SkillsStrip />
        <ProjectsPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
