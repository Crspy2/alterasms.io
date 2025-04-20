import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { LinkPreview } from "@/components/ui/link-preview"
import { AnimatedSteps } from "@/components/animated-steps"
import { EncryptedCard } from "@/components/ui/encrypted-card.tsx"
import { ServiceCloud } from "@/components/service-cloud"
import { CommunicationModel } from "@/components/communication-model"
import { SiLetsencrypt } from "react-icons/si"
import { MdAutoMode } from "react-icons/md"
import { FaTasks } from "react-icons/fa"
import { FaLayerGroup } from "react-icons/fa6"

const items = [
    {
        title: (
            <span className="flex gap-2 items-start">
                <FaTasks className="hidden md:inline text-blue-500 dark:text-blue-600"/>
                <h3>Easy to use</h3>
            </span>
        ),
        leftcontent: (
            <div>
                <ol className="space-y-2">
                    <li>
                        <strong>1. </strong>
                        Register for an account on{" "}
                        <LinkPreview url="https://dash.alterasms.io/"
                                     className="font-bold underline underline-offset-2 hover:underline-offset-4 transition-all decoration-blue-500">
                            our dashboard
                        </LinkPreview>{" "}
                        by linking your{" "}
                        <LinkPreview url="https://discord.com"
                                     className="font-bold underline underline-offset-2 hover:underline-offset-4 transition-all decoration-blue-500">
                            Discord
                        </LinkPreview>{" "}
                        account, or through an email-password combination.
                    </li>
                    <li>
                        <strong>2. </strong>
                        Add funds to your account through our
                        payment integration via Credit/Debit cards, PayPal, CashApp, or a variety of
                        cryptocurrencies.
                    </li>
                    <li>
                        <strong>3. </strong>
                        Generate a phone number through our dashboard by specifying a service and
                        country combination.
                    </li>
                    <li>
                        <strong>4. </strong>
                        Enter the phone number information on your desired site and wait for our
                        real-time system to
                        display
                        received sms codes, or notify you through{" "}
                        <LinkPreview url="https://discord.com"
                                     className="font-bold underline underline-offset-2 hover:underline-offset-4 transition-all decoration-blue-500">
                            Discord
                        </LinkPreview>.
                    </li>
                </ol>
            </div>
        ),
        rightcontent: (
            <AnimatedSteps className="max-w-xl"/>
        )
    },
    {
        title: (
            <span className="flex gap-2 items-start">
                <SiLetsencrypt className="hidden md:inline text-blue-500 dark:text-blue-600" />
                <h3>Secure Data</h3>
            </span>
        ),
        leftcontent: (
            <div>
                <span>
                    Your security is our priority. Our SMS service uses <strong>secure webhooks</strong> to send
                    real-time notifications, keeping your data safe. We protect your account with strong{" "}
                    <strong>authentication and authorization</strong> measures to ensure only you can access your
                    information. Learn more about how we keep your data secure by visiting{" "}
                    <LinkPreview url="https://owasp.org/"
                                 className="font-bold underline underline-offset-2 hover:underline-offset-4 transition-all decoration-blue-500">
                        OWASP
                    </LinkPreview>{" and "}
                    <LinkPreview url="https://oauth.net/"
                                 className="font-bold underline underline-offset-2 hover:underline-offset-4 transition-all decoration-blue-500">
                        OAuth
                    </LinkPreview>.
                </span>
            </div>
        ),
        rightcontent: (
            <div
                className="relative flex h-[30rem] max-w-sm items-center justify-center overflow-hidden border bg-white dark:bg-black p-2 md:shadow-xl">
                <EncryptedCard text="🔒"/>
            </div>
        )
    },
    {
        title:  (
            <span className="flex gap-2 items-start">
                <FaLayerGroup className="hidden md:inline text-blue-500 dark:text-blue-600"/>
                <h3>Wide Coverage</h3>
            </span>
        ),
        leftcontent: (
            <div>
                <span>
                    Connect with over 1500 websites and services across 150+ countries through our platform. Can&apos;t find what you need? Reach
                    out on our{" "}
                    <LinkPreview url="https://discord.gg/ku8dp8cdSs"
                                 className="font-bold underline underline-offset-2 hover:underline-offset-4 transition-all decoration-blue-500">
                        Discord server
                    </LinkPreview>{" "}
                    , and we&apos;ll work to add your requested service.
                </span>
            </div>
        ),
        rightcontent: (
            <ServiceCloud/>
        )
    },
    {
        title: (
            <span className="flex gap-2 items-start mt-12 md:mt-0">
                <MdAutoMode className="hidden md:inline text-blue-500 dark:text-blue-600"/>
                <h3>Auto Delivery</h3>
            </span>
        ),
        leftcontent: (
            <div>
                <p>
                    Experience real-time updates on your invoices and numbers, accelerating the account verification
                    process. Our smart filtering system ensures you receive only the most relevant notifications,
                    keeping your focus where it matters most.
                </p>
            </div>
        ),
        rightcontent: (
            <CommunicationModel/>
        )
    },
]

export const Timeline = () => {
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
            className="w-full font-sans md:px-10"
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
                                    className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"/>
                            </div>
                            <div className="hidden md:flex md:flex-col md:gap-4 md:pl-20 ">
                                <h2 className="md:text-5xl font-bold text-neutral-500 dark:text-neutral-300 justify-start items-start">
                                    {item.title}
                                </h2>
                                {item.leftcontent}
                            </div>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full select-none">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
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
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
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
