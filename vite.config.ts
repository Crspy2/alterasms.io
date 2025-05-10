import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import MillionLint from '@million/lint'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        MillionLint.vite({
            enabled: true
        }),
        TanStackRouterVite({}),
        react(),
    ],
    server: {
        allowedHosts: ["alterasms.io", "www.alterasms.io"]
    },
    resolve: {
        alias: {
            '@': path.resolve(path.dirname("."), './src')
        }
    }
})
