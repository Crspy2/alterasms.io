
import { useEffect, useState } from "react"
import { Link, useRouter } from '@tanstack/react-router'
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useScrolled } from "@/hooks/use-scrolled"
import { cn } from "@/lib/utils/classes"
import { focusRing } from "@/lib/utils/styles"
import { FaDiscord } from "react-icons/fa6"
import { FaTelegramPlane} from "react-icons/fa"

const links = [
    { href: "/#faq", label: "FAQ" },
    { href: "/services", label: "Services" },
    { href: "https://status.alterasms.io", label: "Uptime" },
]

export const Navigation = () => {
    const { scrolled } = useScrolled({ initial: false });

    return (
        <header
            className={cn(
                "top-0 z-50 flex h-14 rounded-md max-md:border-b bg-bg md:bg-transparent md:h-16",
                // "sticky top-0 z-50 flex h-14 rounded-md max-md:border-b max-md:bg-bg md:h-16",
                scrolled && "pointer-events-none"
            )}
        >
            <div className="container flex h-full max-w-screen-2xl 2xl:max-w-none mx-16 items-center">
                {/* Desktop Nav */}
                <div className="hidden w-full items-center justify-between md:flex">
                    <div className="w-[130px]">
                        <Link
                            to="/"
                            className={cn(
                                focusRing(),
                                "flex items-center space-x-2 rounded opacity-100 transition-[opacity,transform] duration-300 ease-out",
                                scrolled && "pointer-events-none -translate-x-2 opacity-0"
                            )}
                            aria-hidden={scrolled}
                        >
                            <Avatar
                                src="/altera_dark.png"
                                alt="AlteraSMS"
                                loading="lazy"
                                width={24}
                                height={24}
                                className="size-6 rounded-sm"
                            />
                            <div className="mt-1 font-josephin font-bold leading-normal tracking-tighter">
                                AlteraSMS
                            </div>
                            <Badge size="sm" variant="neutral" className="border">
                                v3
                            </Badge>
                        </Link>
                    </div>
                    <div
                        className={cn(
                            "relative flex items-center gap-6 overflow-hidden rounded-md bg-transparent px-4 py-1 transition-[padding,background-color] duration-300 ease-out",
                            scrolled && "pointer-events-auto bg-bg-muted pl-14 shadow-md"
                        )}
                    >
                        <Link
                            to="/"
                            className={cn(
                                focusRing(),
                                "pointer-events-none absolute -translate-x-14 rounded opacity-0 transition-[opacity,transform] duration-300 ease-out",
                                scrolled && "-translate-x-10 opacity-100"
                            )}
                            aria-hidden={!scrolled}
                            tabIndex={scrolled ? undefined : -1}
                        >
                            <img
                                src="/altera_dark.png"
                                alt="AlteraSMS"
                                className="size-6 rounded-sm"
                            />
                        </Link>
                        <Nav items={links} />
                    </div>
                    <div
                        className={cn(
                            "flex w-[130px] items-center justify-end space-x-2 opacity-100 transition-[opacity,transform] duration-300 ease-out",
                            scrolled && "pointer-events-none translate-x-2 opacity-0"
                        )}
                        aria-hidden={scrolled}
                        tabIndex={scrolled ? -1 : undefined}
                    >
                        <Button
                            href="https://discord.gg/alterasms"
                            target="_blank"
                            size="lg"
                            shape="square"
                            variant="quiet"
                            aria-label="discord"
                        >
                            <FaDiscord className="size-12" />
                        </Button>
                        <Button
                          href="https://t.me/alterasms"
                          target="_blank"
                          size="lg"
                          shape="square"
                          variant="quiet"
                          aria-label="telegram"
                        >
                            <FaTelegramPlane className="size-12" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

interface NavItem {
    label: string;
    href?: string;
}

interface NavProps {
    items: NavItem[];
    direction?: "col" | "row";
    onNavItemClick?: () => void;
}

const Nav = (props: NavProps) => {
    const { items, direction = "row", onNavItemClick } = props;
    const router = useRouter();
    const [ fragment, setFragment ] = useState<string | undefined>();

    const currentPath = router.state.location.pathname

    useEffect(() => {
        const updateHash = () => setFragment(window.location.hash)
        updateHash()

        window.addEventListener('hashchange', updateHash)
        return () => window.removeEventListener('hashchange', updateHash)
    }, [router.state.location])

    return (
        <nav
            className={cn("flex items-center gap-0 sm:gap-2", {
                "flex-col gap-2": direction === "col",
            })}
        >
            {items.map((item, index) =>
                    item.href && (
                        <Link
                            key={index}
                            to={item.href}
                            onClick={onNavItemClick}
                            className={cn(
                                focusRing(),
                                "flex items-center justify-center gap-2 rounded px-4 py-1 text-sm font-medium text-fg/60 transition-colors hover:text-fg",
                                currentPath.startsWith(item.href) && item.href !== "/" && "bg-bg-inverse/10 text-fg",
                                item.href === `/${fragment}` && "bg-bg-inverse/10 text-fg",
                                direction === "col" && "text-md w-full py-2"
                            )}
                        >
                            {item.href === "/" && (
                                <img
                                    src="/altera_dark.png"
                                    alt="AlteraSMS"
                                    loading="lazy"
                                    width={24}
                                    height={24}
                                />
                            )}
                            <span>{item.label}</span>
                        </Link>
                    )
            )}
        </nav>
    )
};