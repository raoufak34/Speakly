import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { LanguagePreview } from "@/components/language-preview" // Import the new component
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <LanguagePreview /> {/* Add the new interactive component here */}
      <CallToAction />
    </>
  )
}
