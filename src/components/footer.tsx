import { Link } from '@tanstack/react-router'
import { LinkPreview } from "@/components/ui/link-preview"
import { FaCopyright, FaDiscord } from "react-icons/fa6"

export const Footer = () => {
    return (
        <div className="flex flex-row justify-between px-8 gap-2.5 my-12 w-full font-poppins">
            <div className="hidden md:flex flex-col text-sm gap-1.5">
                <Link to="/terms">
                    Terms of Service
                </Link>
                <Link to="/privacy-policy">
                    Privacy Policy
                </Link>
            </div>
            <div className="flex flex-row gap-1.5 justify-center items-center">
                <FaCopyright/>
                <p className="text-xs sm:text-sm md:text-base">Copyright 2024 AlteraSMS — All Rights Reserved.</p>
            </div>
            <div className="hidden md:flex flex-row gap-1.5">
                <LinkPreview url="https://discord.gg/ku8dp8cdSs" target="_blank">
                    <FaDiscord className="w-8 h-8 bg-[#454FBF] rounded-md p-1"/>
                </LinkPreview>
            </div>
        </div>
    )
}