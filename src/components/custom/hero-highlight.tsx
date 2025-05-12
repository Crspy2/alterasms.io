import { useMotionValue, motion, useMotionTemplate } from "motion/react"
import { cn } from "../../lib/utils"

export const HeroHighlight = ({
                                  children,
                                  className,
                                  containerClassName,
                              }: {
    children: React.ReactNode
    className?: string
    containerClassName?: string
}) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({
                                 currentTarget,
                                 clientX,
                                 clientY,
                             }: React.MouseEvent<HTMLDivElement>) {
        if (!currentTarget) return
        const { left, top } = currentTarget.getBoundingClientRect()

        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }
    return (
        <div
            className={cn(
                "relative h-[calc(100dvh-80px)] flex items-center bg-black justify-center w-full group",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 bg-dot-thick pointer-events-none" />
            <motion.div
                className="pointer-events-none bg-dot-thick-hover absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                    WebkitMaskImage: useMotionTemplate`
                        radial-gradient(
                        200px circle at ${mouseX}px ${mouseY}px,
                        black 0%,
                        transparent 100%
                        )
                    `,
                    maskImage: useMotionTemplate`
                        radial-gradient(
                        200px circle at ${mouseX}px ${mouseY}px,
                        black 0%,
                        transparent 100%
                        )
                    `,
                }}
            />

            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    )
}

export const Highlight = ({
                              children,
                              className,
                          }: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block pb-1 px-1 rounded-lg bg-linear-to-r from-blue-400 to-teal-400 dark:from-blue-600 dark:to-teal-600`,
                className
            )}
        >
            {children}
        </motion.span>
    )
}