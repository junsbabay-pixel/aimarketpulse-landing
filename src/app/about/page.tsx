import type { Metadata } from 'next'
import AboutHeroSection from '@/components/about/AboutHeroSection'
import MissionSection from '@/components/about/MissionSection'
import TeamSection from '@/components/about/TeamSection'
import DifferentiatorSection from '@/components/about/DifferentiatorSection'

export const metadata: Metadata = {
  title: 'About AI Market Pulse',
  description:
    'Learn about the team and mission behind AI Market Pulse—making professional-grade investment research accessible to everyone.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionSection />
      <TeamSection />
      <DifferentiatorSection />
    </>
  )
}
