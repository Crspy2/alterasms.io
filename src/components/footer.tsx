import { Link } from '@tanstack/react-router'
import { FaDiscord } from "react-icons/fa6"
import {FaTelegramPlane} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-7 w-full text-sm pt-8 mb-20 border-t">
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
        <a href="https://discord.gg/alterasms" target="_blank">
          <FaDiscord className="size-6" />
        </a>
        <a href="https://t.me/alterasms" target="_blank">
          <FaTelegramPlane className="size-6" />
        </a>
        <a href="https://vacban.wtf/threads/89618/" target="_blank" className="my-auto">
          <img src="/socials/vacban.png" alt="Vacban logo" className="w-6" />
        </a>
        {/*<a href="https://www.elitepvpers.com/forum/trading/5298480-cheap-reliable-sms-verification.html#post40274683" target="_blank">*/}
        {/*  <img src="/socials/elitepvpers.png" alt="ElitePVPers logo" className="size-6 bg-neutral-300 rounded-md" />*/}
        {/*</a>*/}
      </div>
      <div>
        <p className="text-xs sm:text-sm font-light">© 2025 AlteraSMS. All Rights Reserved.</p>
      </div>
    </div>
  )
}