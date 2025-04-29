import { motion } from "framer-motion"

export const Ping = () => {
  return (
    <div className="relative">
      <img src="/altera_dark.png" alt="AlteraSMS logo" className="relative size-12 rounded-2xl z-10" />
      <Band delay={0} />
      <Band delay={1} />
      <Band delay={2} />
      <Band delay={3} />
    </div>
  )
}

const Band = ({ delay }: { delay: number }) => {
  return (
    <motion.span
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{
        opacity: 0,
        scale: 0.25,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 1,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.5, 0.75, 1],
        duration: 4,
        ease: "linear",
        delay,
      }}
      className="absolute left-[50%] top-[50%] z-0 h-56 w-56 rounded-full border-[1px] border-green-500 bg-gradient-to-br from-green-500/50 to-green-800/20 shadow-xl shadow-green-500/40"
    />
  )
}