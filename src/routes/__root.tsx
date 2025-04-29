import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div>
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        <Outlet />
        <Footer/>
      </div>
    </ThemeProvider>
  )
}
