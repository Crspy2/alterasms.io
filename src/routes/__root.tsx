import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { Footer } from "@/components/footer.tsx"
import {Navigation} from "@/components/navigation.tsx";

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
      <TanStackRouterDevtools position="bottom-right" />
    </ThemeProvider>
  )
}
