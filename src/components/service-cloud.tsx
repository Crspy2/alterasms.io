import IconCloud from "@/components/ui/icon-cloud"

const slugs = [
    "twitch",
    "ubisoft",
    "venmo",
    "epicgames",
    "cashapp",
    "revolut",
    "apple",
    "zelle",
    "woocommerce",
    "nike",
    "adidas",
    "google",
    "gmail",
    "amazonaws",
    "alipay",
    "verizon",
    "netflix",
    "discord",
    "telegram",
    "uber",
    "postmates",
    "grubhub",
    "doordash",
    "ebay",
    "facebook",
    "faceit",
    "instagram",
    "g2g",
    "payoneer",
    "square",
]

export const ServiceCloud = () => {
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-white dark:bg-black px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs}/>
        </div>
    )
}
