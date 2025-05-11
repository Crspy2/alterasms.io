import { cn } from "@/lib/utils"
import { LinkPreview } from "@/components/ui/link-preview"
import Marquee from "@/components/ui/marquee"

const reviews = [
    {
        name: "tayz",
        username: "@okaytayz",
        body: "+rep numbers always hit ❤️",
        img: "/avatars/discordgrey.png",
    },
    {
        name: "Weedy",
        username: "@leancandy",
        body: "+rep owner sigma helped after frustation with number, recommend it to try it out",
        img: "/avatars/discordgrey.png",
    },
    {
        name: "recklessV4",
        username: "@recklessv4",
        body: "+rep works fast and easy plus @Crspy is a ton of help!",
        img: "/avatars/reckless_avatar.gif",
    },
    {
        name: "Poop",
        username: "@poop545",
        body: "+rep Works and is fast WITH no issues and support is great they will sort you out with any issues.",
        img: "/avatars/discordgrey.png",
    },
    {
        name: "Feelings",
        username: "@feelings.yay",
        body: "+rep Got both of my accounts verified that were in different regions of the world",
        img: "/avatars/discordgrey.png",
    },
    {
        name: "Vause",
        username: "@vause.",
        body: "+rep payment is instant, numbers are cheap & high quality. Perfect for my Ubisoft accounts !",
        img: "/avatars/discordgrey.png",
    },
    {
        name: "Princess Akuma",
        username: "@.msakuma",
        body: "+rep Works and was fast! Support was also extremely helpful!",
        img: "/avatars/akuma_avatar.jpeg",
    },
    {
        name: "Wrecxkd",
        username: "@xyloz._",
        body: "+rep Great way to get any phone number for verification",
        img: "/avatars/wrecxkd_avatar.gif",
    },
    {
        name: "Bit",
        username: "@bitdotdash",
        body: "+rep @Crspy Helped out quick and phone number worked for Ubisoft ✅",
        img: "/avatars/bit_avatar.webp",
    },
    {
        name: "selo",
        username: "@sselo25",
        body: "+rep @Crspy the goat helped me with a lot of stuff phone number and everything worked for ubisoft",
        img: "/avatars/selo_avatar.png",
    }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
                        img,
                        name,
                        username,
                        body,
                    }: {
    img: string
    name: string
    username: string
    body: string
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full size-10" alt="image" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    )
}

export const ReviewCards = () => {
    return (
        <div className="flex flex-col gap-12 md:mt-12">
            <div className="flex flex-col md:items-center text-start md:text-center gap-y-2 px-4">
                <h3 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold font-poppins">What people are saying</h3>
                <span className="text-neutral-300 text-sm xl:text-base 2xl:text-lg max-w-xl 2xl:max-w-2xl">
                    Don&apos;t just take our word for it. Here&apos;s what <strong>real people</strong> are saying about AlteraSMS in our{" "}
                    <LinkPreview url="https://discord.gg/alterasms">
                        Discord Server
                    </LinkPreview>.
                </span>
            </div>
            <div className="select-none relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden border-y black md:shadow-xl">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
            </div>
        </div>
    )
}
