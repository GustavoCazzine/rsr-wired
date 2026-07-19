import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WelcomeCard } from '../components/home/WelcomeCard';
import { Hero } from '../components/home/Hero';
import { AboutMeSection } from '../components/home/AboutMeSection';
import { Features } from '../components/home/Features';
import { HowItWorks } from '../components/home/HowItWorks';
import { RoomsCarousel } from '../components/home/RoomsCarousel';
import { News } from '../components/home/News';
import { CTASection } from '../components/home/CTASection';

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <>
      <WelcomeCard />
      <Hero />
      <AboutMeSection />
      <Features />
      <HowItWorks />
      <RoomsCarousel />
      <News />
      <CTASection />
    </>
  );
}
