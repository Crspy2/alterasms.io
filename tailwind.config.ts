import type { Config } from "tailwindcss"
import * as defaultTheme from "tailwindcss/defaultTheme"
import { fontFamily } from "tailwindcss/defaultTheme"
import { withTV } from "tailwind-variants/transformer"
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const svgToDataUri = require("mini-svg-data-uri")

const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{ts,tsx}", "./content/**/*.{ts,tsx,mdx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		data: {
			mobile: 'mobile~="true"',
		},
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				bg: {
					DEFAULT: "hsl(var(--color-bg))",
					inverse: "hsl(var(--color-bg-inverse))",
					surface: "hsl(var(--color-bg-surface))",
					muted: "hsl(var(--color-bg-muted))",
					disabled: "hsl(var(--color-bg-disabled))",
					overlay: "hsl(var(--color-bg-overlay))",
					tooltip: "hsl(var(--color-bg-tooltip))",
					neutral: {
						DEFAULT: "hsl(var(--color-bg-neutral))",
						hover: "hsl(var(--color-bg-neutral-hover))",
						active: "hsl(var(--color-bg-neutral-active))",
					},
					primary: {
						DEFAULT: "hsl(var(--color-bg-primary))",
						hover: "hsl(var(--color-bg-primary-hover))",
						active: "hsl(var(--color-bg-primary-active))",
					},
					success: {
						DEFAULT: "hsl(var(--color-bg-success))",
						hover: "hsl(var(--color-bg-success-hover))",
						active: "hsl(var(--color-bg-success-active))",
						muted: {
							DEFAULT: "hsl(var(--color-bg-success-muted))",
							hover: "hsl(var(--color-bg-success-muted-hover))",
							active: "hsl(var(--color-bg-success-muted-active))",
						},
					},
					danger: {
						DEFAULT: "hsl(var(--color-bg-danger))",
						hover: "hsl(var(--color-bg-danger-hover))",
						active: "hsl(var(--color-bg-danger-active))",
						muted: {
							DEFAULT: "hsl(var(--color-bg-danger-muted))",
							hover: "hsl(var(--color-bg-danger-muted-hover))",
							active: "hsl(var(--color-bg-danger-muted-active))",
						},
					},
					warning: {
						DEFAULT: "hsl(var(--color-bg-warning))",
						hover: "hsl(var(--color-bg-warning-hover))",
						active: "hsl(var(--color-bg-warning-active))",
						muted: {
							DEFAULT: "hsl(var(--color-bg-warning-muted))",
							hover: "hsl(var(--color-bg-warning-muted-hover))",
							active: "hsl(var(--color-bg-warning-muted-active))",
						},
					},
					accent: {
						DEFAULT: "hsl(var(--color-bg-accent))",
						hover: "hsl(var(--color-bg-accent-hover))",
						active: "hsl(var(--color-bg-accent-active))",
						muted: {
							DEFAULT: "hsl(var(--color-bg-accent-muted))",
							hover: "hsl(var(--color-bg-accent-muted-hover))",
							active: "hsl(var(--color-bg-accent-muted-active))",
						},
					},
				},
				fg: {
					DEFAULT: "hsl(var(--color-fg))",
					muted: {
						DEFAULT: "hsl(var(--color-fg-muted))",
						inverse: "hsl(var(--color-fg-muted-inverse))",
					},
					inverse: "hsl(var(--color-fg-inverse))",
					disabled: "hsl(var(--color-fg-disabled))",
					link: {
						DEFAULT: "hsl(var(--color-fg-link))",
						hover: "hsl(var(--color-fg-link-hover))",
						active: "hsl(var(--color-fg-link-active))",
						visited: "hsl(var(--color-fg-link-visited))",
					},
					accent: "hsl(var(--color-fg-accent))",
					success: "hsl(var(--color-fg-success))",
					warning: "hsl(var(--color-fg-warning))",
					danger: "hsl(var(--color-fg-danger))",
					info: "hsl(var(--color-fg-info))",
					onAccent: "hsl(var(--color-fg-onAccent))",
					onNeutral: "hsl(var(--color-fg-onNeutral))",
					onPrimary: "hsl(var(--color-fg-onPrimary))",
					onSuccess: "hsl(var(--color-fg-onSuccess))",
					onMutedSuccess: "hsl(var(--color-fg-onMutedSuccess))",
					onDanger: "hsl(var(--color-fg-onDanger))",
					onMutedDanger: "hsl(var(--color-fg-onMutedDanger))",
					onWarning: "hsl(var(--color-fg-onWarning))",
					onMutedWarning: "hsl(var(--color-fg-onMutedWarning))",
					onTooltip: "hsl(var(--color-fg-onTooltip))",
				},
				border: {
					DEFAULT: "hsl(var(--color-border))",
					field: "hsl(var(--color-border-field))",
					control: "hsl(var(--color-border-control))",
					hover: "hsl(var(--color-border-hover))",
					active: "hsl(var(--color-border-active))",
					disabled: "hsl(var(--color-border-disabled))",
					danger: "hsl(var(--color-border-danger))",
					success: "hsl(var(--color-border-success))",
					warning: "hsl(var(--color-border-warning))",
					info: "hsl(var(--color-border-info))",
					secondary: "hsl(var(--color-border-secondary))",
					focus: "hsl(var(--color-border-focus))",
					inverse: "hsl(var(--color-border-inverse))",
				},
			},
			transitionTimingFunction: {
				drawer: "cubic-bezier(0.32,0.72,0,1)",
			},
			transitionDuration: {
				"3000": "3000ms",
			},
			backgroundImage: {
				gradient:
					"linear-gradient(108deg, rgba(8,148,255,1) 0%, rgba(255,46,84,1) 70%, rgba(255,144,4,1) 100%)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)", ...fontFamily.sans],
				mono: ["var(--font-geist-mono)", ...fontFamily.mono],
				display: ["var(--font-display)", ...fontFamily.sans],
				josephin: ["var(--font-josephin)", ...fontFamily.sans],
				poppins: ["Poppins", "sans-serif"],
			},
			transitionDelay: {
				"400": "400ms",
				"600": "600ms",
				"800": "800ms",
				"900": "900ms",
				"1200": "1200ms",
			},
			gridTemplateColumns: {
				"16": "repeat(16, minmax(0, 1fr))",
				"18": "repeat(18, minmax(0, 1fr))",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				shimmer: {
					"0%, 90%, 100%": {
						"background-position": "calc(-100% - var(--shimmer-width)) 0",
					},
					"30%, 60%": {
						"background-position": "calc(100% + var(--shimmer-width)) 0",
					},
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				shimmer: "shimmer 8s infinite",
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
			},
		},
	},
	plugins: [
		addVariablesForColors,
		function ({ matchUtilities, theme }: { matchUtilities: (arg0: object, arg1: object) => void; theme: (arg0: string) => unknown }) {
			matchUtilities(
				{
					"bg-dot-thick": (value: string) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		},
		function ({ matchUtilities, theme }: { matchUtilities: (arg0: object, arg1: object) => void; theme: (arg0: string) => unknown }) {
			matchUtilities(
				{
					'bg-grid': (value: string) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`
					})
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			)
		},
	],
} satisfies Config;


function addVariablesForColors({ addBase, theme }: { addBase: (arg0: object) => void; theme: (arg0: string) => unknown }) {
	const allColors = flattenColorPalette(theme("colors"));
	const newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

export default withTV(config);