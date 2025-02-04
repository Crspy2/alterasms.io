import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button.tsx"

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <Button size="sm" variant="quiet" shape="square" className="[&_svg]:size-[18px]" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <IoSunnyOutline className="block dark:hidden" />
            <IoMoonOutline className="hidden dark:block" />
        </Button>
    )
}