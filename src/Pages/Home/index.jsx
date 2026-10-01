import React from 'react'
import HeroSection from './HeroSection'
import ProductSection from './productSection'
import CategorySection from './CategorySection'
import FeaturesSection from './FeaturesSection'
import CtaSection from './CtaSection'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ProductSection/>
      <CategorySection/>
      <FeaturesSection/>
      <CtaSection/>
    </div>
  )
}
