import { createFileRoute } from '@tanstack/react-router'
import { Hero } from "@/components/hero.tsx"
import { Services } from "@/components/services.tsx"
import { Info } from "@/components/info.tsx"
import { Timeline } from "@/components/ui/timeline.tsx"
import { ReviewCards } from "@/components/reviews.tsx"
import { FAQ } from "@/components/FAQ.tsx"

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
      <Timeline />
      <ReviewCards />
      <FAQ />
    </main>
  )
}
