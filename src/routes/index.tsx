import { createFileRoute } from '@tanstack/react-router'
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Info } from "@/components/info"
import { FeatureGrid } from "@/components/feature-grid"
import { Features } from "@/components/features"
import { ReviewCards } from "@/components/reviews"
import { FAQ } from "@/components/FAQ"

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <main>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Hero />
          <Services />
        </div>
      </div>
      <Info />
      <FeatureGrid />
      <Features />
      <ReviewCards />
      <FAQ />
    </main>
  )
}
