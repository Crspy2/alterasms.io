import { Link } from '@tanstack/react-router'
import { FaDiscord } from "react-icons/fa6"

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-7 w-full text-sm mt-12 mb-20">
      <div className="flex gap-x-5">
        <Link to="/terms" className="hover:underline underline-offset-1">
          Terms of Service
        </Link>
        <Link to="/privacy-policy" className="hover:underline underline-offset-1">
          Privacy Policy
        </Link>
        <Link to="/services" className="hover:underline underline-offset-1">
          Service List
        </Link>
      </div>
      <div className="flex gap-x-5">
        <a href="https://discord.gg/ku8dp8cdSs">
          <FaDiscord className="size-6" />
        </a>
      </div>
      <div>
        <p className="text-xs sm:text-sm font-light">© 2025 AlteraSMS. All Rights Reserved.</p>
      </div>
    </div>
  )
}