import Marquee from "../components/custom/marquee"

import Activision from "../assets/services/activision.svg"
import Amazon from "../assets/services/amazon.svg"
import Blizzard from "../assets/services/blizzard.svg"
import Coinbase from "../assets/services/coinbase.svg"
import Discord from "../assets/services/discord.svg"
import Onlyfans from "../assets/services/onlyfans.svg"
import OpenAI from "../assets/services/openai.svg"
import PayPal from "../assets/services/paypal.svg"
import Rainbow from "../assets/services/rainbowsix.svg"
import Riot from "../assets/services/riot.svg"
import Spotify from "../assets/services/spotify.svg"
import Stripe from "../assets/services/stripe.svg"


const services = [
  {
    name: "Rainbow",
    src: Rainbow,
  },
  {
    name: "Blizzard",
    src: Blizzard ,
  },
  {
    name: "Discord",
    src: Discord,
  },
  {
    name: "Riot",
    src: Riot,
  },
  {
    name: "Activision",
    src: Activision,
  },
  {
    name: "Amazon",
    src: Amazon,
  },
  {
    name: "Coinbase",
    src: Coinbase,
  },
  {
    name: "OpenAI",
    src: OpenAI,
  },
  {
    name: "PayPal",
    src: PayPal,
  },
  {
    name: "Spotify",
    src: Spotify,
  },
  {
    name: "Stripe",
    src: Stripe,
  },
  {
    name: "Onlyfans",
    src: Onlyfans,
  },
]

const ServicesMarquee = () => {
  return (
      <div className="flex flex-col w-full gap-y-4">
        <div
          className="select-none mt-auto relative flex flex-col w-full items-center justify-center overflow-hidden border-y border-neutral-700/30 bg-black md:shadow-xl py-2.5">
          <Marquee repeat={12} className="[--duration:40s]">
            {services.map((service) => (
              <span className="h-10 w-64 flex items-center justify-center mx-4 contrast-0 my-auto" key={service.name}>
                <img src={service.src.src} alt={service.name} className="h-14 w-auto" />
              </span>
            ))}
          </Marquee>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
        </div>
        <p className="text-neutral-300 text-xs xl:text-sm 2xl:text-base mx-2 text-center">Over <strong>1000</strong> supported services for you to choose from. — We are not affiliated with the services listed above.</p>
      </div>
    );
}

export default ServicesMarquee