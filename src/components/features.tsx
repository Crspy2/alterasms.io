import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { LinkPreview } from "@/components/ui/link-preview.tsx"
import { AnimatedSteps } from "@/components/animated-steps.tsx"
import { ServiceCloud } from "@/components/service-cloud.tsx"
import { CommunicationModel } from "@/components/communication-model.tsx"
import { MdAutoMode } from "react-icons/md"
import { FaTasks } from "react-icons/fa"
import { FaLayerGroup } from "react-icons/fa6"

const items = [
    {
        title: (
            <span className="flex gap-2 items-start">
                <FaTasks className="flex-shrink-0 mt-0.5 md:mt-1 size-7 text-cyan-400"/>
                <h3>Easy to use</h3>
            </span>
        ),
        leftcontent: (
            <ol className="text-neutral-200 space-y-2">
                <li className="flex flex-col">
                    <strong>1. Deposit funds into your account</strong>
                    Add funds to your account via Paypal, Cashapp, Credit/Debit cards or Cryptocurrencies.
                </li>
                <li className="flex flex-col">
                    <strong>2. Select your service</strong>
                    Select your service from wide list of supported services.
                </li>
                <li className="flex flex-col">
                    <strong>3. Choose your country</strong>
                    Select the country you want your number to be from.
                </li>
                <li className="flex flex-col">
                    <strong>4. Receive your code</strong>
                    Request a sms code from your service, and wait it to appear in our dashboard.
                </li>
            </ol>
        ),
        rightcontent: (
            <AnimatedSteps className="max-w-xl"/>
        )
    },
    {
        title:  (
            <span className="flex gap-2 items-start">
                <FaLayerGroup className="flex-shrink-0 mt-0.5 md:mt-1 size-7 text-cyan-400"/>
                <h3>Wide Coverage</h3>
            </span>
        ),
        leftcontent: (
            <div className="text-neutral-200">
                Connect with over 1500 websites and services across 150+ countries through our platform. Can&apos;t find what you need? Reach
                out on our{" "}
                <LinkPreview url="https://discord.gg/ku8dp8cdSs"
                             className="font-bold underline underline-offset-2 hover:underline-offset-4 transition-all decoration-cyan-400">
                    Discord server
                </LinkPreview>
                , and we&apos;ll work to add your requested service.
            </div>
        ),
        rightcontent: (
            <ServiceCloud/>
        )
    },
    {
        title: (
            <span className="flex gap-2 items-start mt-12 md:mt-0">
                <MdAutoMode className="flex-shrink-0 mt-0.5 md:mt-1 size-7 text-cyan-400"/>
                <h3>Auto Delivery</h3>
            </span>
        ),
        leftcontent: (
            <div className="text-neutral-200">
                Experience real-time updates on your invoices and numbers, accelerating the account verification
                process. Our smart filtering system ensures you receive only the most relevant notifications,
                keeping your focus where it matters most.
            </div>
        ),
        rightcontent: (
            <CommunicationModel/>
        )
    },
]

export const Features = () => {
    const ref = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect()
            setHeight(rect.height)
        }
    }, [ref])

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    })

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    return (
        <div
            className="w-full font-sans md:px-10 -mt-20"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {/* Body of timeline*/}
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div
                            className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-lg md:w-full">
                            <div
                                className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
                                <div
                                    className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2"/>
                            </div>
                            <div className="hidden md:flex md:flex-col md:gap-4 md:pl-20 ">
                                <h2 className="md:text-3xl font-bold text-white justify-start items-start">
                                    {item.title}
                                </h2>
                                {item.leftcontent}
                            </div>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full select-none">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                                {item.title}
                            </h3>
                            {item.rightcontent}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="select-none absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}
