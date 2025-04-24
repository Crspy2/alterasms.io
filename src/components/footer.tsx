import { Link } from '@tanstack/react-router'
import { FaDiscord } from "react-icons/fa6"

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-7 w-full text-sm mb-20">
      <div className="flex gap-x-5">
        <Link to="/terms">
          Terms of Service
        </Link>
        <Link to="/privacy-policy">
          Privacy Policy
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