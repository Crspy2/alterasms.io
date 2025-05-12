import type { CSSProperties, FC, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ShinyBannerProps {
  children: ReactNode
  className?: string
  shimmerWidth?: number
}

const ShinyBanner: FC<ShinyBannerProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "px-1.5 py-0.5 md:px-3 mx-auto max-w-md text-zinc-400/70 text-xs sm:text-sm md:text-base 2xl:text-lg ",

        // Shimmer effect
        "animate-[shimmer_8s_infinite] animate-shimmer bg-clip-text bg-no-repeat bg-position-[0_0] bg-size-[var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shimmer gradient
        "bg-linear-to-r from-transparent via-white/80 via-50% to-transparent",

        className,
      )}
    >
      {children}
    </p>
  )
}

export default ShinyBanner
