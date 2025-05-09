import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter, createHashHistory, createMemoryHistory } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './index.css'

// const memoryHistory = createMemoryHistory({
//   initialEntries: ["/"]
// })
const hashHistory = createHashHistory()


// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  history: hashHistory,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
