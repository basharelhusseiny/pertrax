import React from 'react';
import HeroSection from './HeroSection';
import ValuesSection from './ValuesSection';
import AboutSection from './AboutSection';
import ProductsSection from './ProductsSection';
import IndustriesSection from './IndustriesSection';
import SolutionsSection from './SolutionsSection';
import ContactSection from './ContactSection';

export default function Home({ t, lang, scrollTo }) {
  return (
    <>
      <HeroSection t={t} lang={lang} scrollTo={scrollTo} />
      <ValuesSection t={t} />
      <AboutSection t={t} lang={lang} />
      <ProductsSection t={t} lang={lang} />
      <IndustriesSection t={t} lang={lang} />
      <SolutionsSection t={t} lang={lang} />
      <ContactSection t={t} lang={lang} />
    </>
  );
}
