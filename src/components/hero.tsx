import { motion } from "framer-motion"
import { FaArrowRightLong } from "react-icons/fa6"
import { cn } from "@/lib/utils"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import ShinyButton from "@/components/ui/shiny-button"
import PhoneEmoji from "@/assets/phone.svg"

export const Hero = () => {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
            >
                <div
                    className="flex flex-col gap-4 md:gap-0 2xl:gap-y-4 px-4 text-black dark:text-white max-w-4xl 2xl:max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto">
                    <div className="flex items-center justify-center">
                        <a
                            href="https://dash.alterasms.io"
                            className={cn(
                                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                            )}
                        >
                            <AnimatedShinyText className="flex flex-row gap-x-2 items-center justify-center text-xs sm:text-sm md:text-base 2xl:text-lg mx-4 my-1 2xl:mx-3 2xl:my-1  transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                <img src={PhoneEmoji} alt="phone emoji" className="h-4 w-auto" />
                                Get your secure number now
                                <FaArrowRightLong className="ml-1 w-auto h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"/>
                            </AnimatedShinyText>
                        </a>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-y-3 2xl:gap-y-8 justify-center items-center">
                            <h1
                                className="font-poppins font-bold text-2xl md:text-4xl lg:text-5xl leading-relaxed md:leading-snug lg:leading-tight text-black dark:text-white">
                                Secure SMS Verification<br/>
                                <Highlight className="text-black dark:text-white">
                                    Privacy Without Compromise
                                </Highlight>
                            </h1>
                            <h3 className="max-w-lg 2xl:max-w-3xl text-sm 2xl:text-base text-neutral-200">
                                Value your digital privacy and don&apos;t want to use your phone number? Protect
                                yourself and use our non-VoIP phone numbers to verify your accounts.
                            </h3>
                        </div>
                        <div className="flex flex-row gap-4 max-w-sm mx-auto">
                            <a
                                href="https://dash.alterasms.io/login"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300 bg-gray-900 text-gray-50 shadow hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4"
                            >
                                Sign In
                            </a>
                            <a href="https://dash.alterasms.io/register">
                                <ShinyButton text="Get Started" className=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.h1>
        </HeroHighlight>
    )
}