import React, { forwardRef, type RefObject, useRef } from "react"
import { cn } from "@/lib/utils"
import AnimatedBeam from "@/components/custom/animated-beam"
import { FaDiscord, FaTiktok, FaWhatsapp } from "react-icons/fa6"
import { SiEpicgames, SiRiotgames, SiUbisoft } from "react-icons/si"

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

const CommunicationModel = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-black p-10 md:shadow-xl",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.ubisoft />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.riot />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.epic />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.discord />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <Icons.altera />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef as RefObject<HTMLElement>}
        fromRef={div1Ref as RefObject<HTMLElement>}
        toRef={div6Ref as RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as RefObject<HTMLElement>}
        fromRef={div2Ref as RefObject<HTMLElement>}
        toRef={div6Ref as RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as RefObject<HTMLElement>}
        fromRef={div3Ref as RefObject<HTMLElement>}
        toRef={div6Ref as RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as RefObject<HTMLElement>}
        fromRef={div4Ref as RefObject<HTMLElement>}
        toRef={div6Ref as RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as RefObject<HTMLElement>}
        fromRef={div5Ref as RefObject<HTMLElement>}
        toRef={div6Ref as RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as RefObject<HTMLElement>}
        fromRef={div6Ref as RefObject<HTMLElement>}
        toRef={div7Ref as RefObject<HTMLElement>}
      />
    </div>
  )
}

const Icons = {
  ubisoft: () => (
    <SiUbisoft className="text-black w-10 h-10" />
  ),
  altera: () => (
    <img src="/altera_light.png" alt="AlteraSMS" width={500} height={500} className="rounded-md" />
  ),
  discord: () => (
    <FaDiscord className="text-[#5865F2] w-16 h-16" />
  ),
  riot: () => (
    <SiRiotgames className="text-[#DB1515] w-10 h-10" />
  ),
  epic: () => (
    <SiEpicgames className="text-black w-12 h-12" />

  ),
  whatsapp: () => (
    <FaWhatsapp className="text-[#25D366] w-16 h-16" />

  ),
  tiktok: () => (
    <FaTiktok className="text-black w-12 h-12" />

  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
}

export default CommunicationModel