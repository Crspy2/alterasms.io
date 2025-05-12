import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/custom/animated-list"
import { FaBattleNet, FaCommentSms, FaCreditCard, FaDiscord, FaPaypal } from "react-icons/fa6"
import { SiUbisoft } from "react-icons/si"
import { MdOutlinePassword } from "react-icons/md"
interface Item {
  name: string
  description: string
  icon:  ReactNode
  color: string
  time: string
}


let notifications = [
  {
    name: "User signed up",
    description: "via Discord",
    time: "Just now",
    icon: <FaDiscord className="text-white"/>,
    color: "#454FBF",
  },
  {
    name: "Payment received",
    description: "via PayPal",
    time: "Just now",
    icon: <FaPaypal className="text-white"/>,
    color: "#00457C",
  },
  {
    name: "Number Generated",
    description: "Service: Ubisoft",
    time: "Just now",
    icon: <SiUbisoft className="text-white"/>,
    color: "#FF3D71",
  },
  {
    name: "SMS Received",
    description: "Code: 432-892",
    time: "Just now",
    icon: <FaCommentSms className="text-white"/>,
    color: "#147efb",
  },
  // Second set
  {
    name: "User signed up",
    description: "via Credentials",
    time: "Just now",
    icon: <MdOutlinePassword className="text-white"/>,
    color: "#000000",
  },
  {
    name: "Payment received",
    description: "via Stripe",
    time: "Just now",
    icon: <FaCreditCard className="text-white"/>,
    color: "#6273e9",
  },
  {
    name: "Number Generated",
    description: "Service: Blizzard Entertainment",
    time: "Just now",
    icon: <FaBattleNet className="text-white"/>,
    color: "#009AE4",
  },
  {
    name: "SMS Received",
    description: "Code: 023-147",
    time: "Just now",
    icon: <FaCommentSms className="text-white"/>,
    color: "#147efb",
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",

        "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

const AnimatedSteps = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-white bg-black relative flex flex-col h-[500px] w-full p-6 overflow-hidden rounded-lg border border-white/[0.2] md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx}/>
        ))}
      </AnimatedList>
    </div>
  )
}

export default AnimatedSteps