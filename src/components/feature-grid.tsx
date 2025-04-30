import { cn } from "@/lib/utils"
import { Ping } from "@/components/ui/ping"
import { EvervaultCard } from "@/components/ui/evervault-card"
import Marquee from "@/components/ui/marquee"
import Amex from "@/assets/payments/amex.svg"
import Alipay from "@/assets/payments/alipay.svg"
import ApplePay from "@/assets/payments/applepay.svg"
import Bitcoin from "@/assets/payments/btc.svg"
import Cashapp from "@/assets/payments/cash-app.svg"
import Coinbase from "@/assets/payments/coinbase.svg"
import Discover from "@/assets/payments/discover.svg"
import GooglePay from "@/assets/payments/googlepay.svg"
import Link from "@/assets/payments/link.svg"
import Litecoin from "@/assets/payments/ltc.svg"
import Mastercard from "@/assets/payments/mastercard.svg"
import Nowpayments from "@/assets/payments/nowpayments.svg"
import PayPal from "@/assets/payments/paypal.svg"
import Solana from "@/assets/payments/sol.svg"
import Stripe from "@/assets/payments/stripe.svg"
import Visa from "@/assets/payments/visa.svg"

const PaymentMethods = [
  [
    {
      name: "ApplePay",
      src: ApplePay,
    },
    {
      name: "GooglePay",
      src: GooglePay,
    },
    {
      name: "Visa",
      src: Visa,
    },
    {
      name: "Mastercard",
      src: Mastercard,
      className: "-p-3 aspect-video bg-black"
    },
    {
      name: "Amex",
      src: Amex,
      className: "-p-3 aspect-video bg-[#027DC2]"
    },
    {
      name: "Discover",
      src: Discover,
    },
  ],
  [
    {
      name: "PayPal",
      src: PayPal,
    },
    {
      name: "Stripe",
      src: Stripe,
    },
    {
      name: "Cashapp",
      src: Cashapp,
    },
    {
      name: "Link",
      src: Link,
    },
    {
      name: "Alipay",
      src: Alipay,
    },
    {
      name: "Coinbase",
      src: Coinbase,
    },
    {
      name: "Nowpayments",
      src: Nowpayments,
      className: "bg-neutral-800"
    },
    {
      name: "Bitcoin",
      src: Bitcoin,
    },
    {
      name: "Litecoin",
      src: Litecoin,
      className: "bg-[#335D9C]"
    },
    {
      name: "Solana",
      src: Solana,
    },
  ],
]

export const FeatureGrid = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      <div className="flex flex-col text-start md:text-center gap-y-4 md:px-4">
        <h3 className="text-3xl font-semibold font-poppins">Why choose us?</h3>
        <p className="text-neutral-300 text-sm max-w-xl">
          Experience premium SMS verification with unmatched reliability and convenience. Our platform combines robust security, intuitive tools, and flexible payment options to deliver a seamless verification experience every time.
        </p>
      </div>
      <div className="flex flex-col gap-4 px-4 max-w-7xl mx-auto">
        <div className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-6 lg:grid-cols-7">
          <div className="col-span-1 h-72 w-full sm:col-span-3 md:col-span-2">
            <div
              className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md bg-bg-muted shadow-md">
              <div className="relative w-full flex-1 overflow-hidden bg-bg/50">
                <div className="flex justify-center items-center size-full">
                  <Ping />
                </div>
              </div>
              <div className="space-x-1 p-4 text-sm border-t">
                <span className="font-medium text-cyan-500">Uptime:</span>
                <span className="text-neutral-300">
                An up-to-date status page displaying real-time latency and responses.
              </span>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-72 w-full sm:col-span-3 md:col-span-2">
            <div
              className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md bg-bg-muted shadow-md">
              <div className="relative w-full flex-1 overflow-hidden bg-bg/50">
                <EvervaultCard text="Secure" />
              </div>
              <div className="space-x-1 p-4 text-sm border-t">
                <span className="font-medium text-cyan-500">Security first:</span>
                <span className="text-neutral-300">
                All sensitive data is stored securely and we do not log user activity.
              </span>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-72 w-full sm:col-span-6 md:col-span-2 lg:col-span-3">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-bg-muted shadow-md">
              <div className="relative w-full flex-1 overflow-hidden bg-gradient-to-b from-transparent to-bg">
                <img
                  alt="Dashboard Placeholder" loading="lazy" width={2062} height={854}
                  className="absolute left-8 top-8 z-10 rounded-md border"
                  src="/dashboard.png"/>
              </div>
              <div className="space-x-1 p-4 text-sm border-t">
                <span className="font-medium text-cyan-500">Custom dashboard:</span>
                <span className="text-neutral-300">
                View and manage your numbers effortlessly in our user-friendly environment, built from the ground up.
              </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-6 lg:grid-cols-7">
          <div className="col-span-1 h-72 w-full sm:col-span-6 md:col-span-2 lg:col-span-3">
            <div
              className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md bg-bg-muted shadow-md">
              <div className="relative flex w-full flex-1 select-none items-center justify-center overflow-hidden rounded-t-md bg-gradient-to-br from-transparent to-bg">
                <div className="relative z-10 rounded-full bg-transparent">
                  <Marquee repeat={6} className="[--duration:24s]">
                    {PaymentMethods[0].map((method) => (
                      <span className="h-16 px-2 flex items-center justify-center my-auto bg-bg rounded-lg border border-neutral-200/40" key={method.name}>
                      <img src={method.src} alt={method.name} className={cn("h-12 w-auto bg-neutral-200 p-3 aspect-video rounded-lg", method.className)} />
                    </span>
                    ))}
                  </Marquee>
                  <Marquee reverse repeat={10} className="[--duration:40s]">
                    {PaymentMethods[1].map((method) => (
                      <span className="h-16 px-2 flex items-center justify-center my-auto bg-bg rounded-lg border border-neutral-200/40" key={method.name}>
                      <img src={method.src} alt={method.name} className={cn("h-12 w-auto bg-neutral-200 p-3 aspect-video rounded-lg", method.className)} />
                    </span>
                    ))}
                  </Marquee>
                </div>
              </div>
              <div className="space-x-1 p-4 text-sm border-t">
                <span className="text-cyan-500 font-medium">Secure payments:</span>
                <span className="text-neutral-300">
                We support trusted payment methods ensuring you can make safe transactions the way you want!
              </span>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-72 w-full sm:col-span-3 md:col-span-2">
            <div
              className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md bg-bg-muted shadow-md">
              <div className="relative w-full flex-1 overflow-hidden bg-gradient-to-tr from-transparent to-bg">
                <img
                  alt="Dashboard Placeholder" loading="lazy" width={2062} height={854}
                  className="absolute right-4 top-8 z-10 rounded-md border"
                  src="/getnumber.png"/>
              </div>
              <div className="space-x-1 p-4 text-sm border-t">
                <span className="font-medium text-cyan-500">Advanced Discord Bot:</span>
                <span className="text-neutral-300">
                Manage your numbers from the comfort of your Discord account.
              </span>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-72 w-full sm:col-span-3 md:col-span-2">
            <div
              className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md bg-bg-muted shadow-md">
              <div className="relative w-full flex-1 overflow-hidden bg-gradient-to-l from-transparent to-bg">
                <img
                  alt="Dashboard Placeholder"
                  width={1662} height={1230}
                  className="absolute left-4 top-12 z-10 rounded-md border"
                  src="/autocomplete.png"
                />
              </div>
              <div className="space-x-1 p-4 text-sm border-t">
                <span className="font-medium text-cyan-500">No guesswork required:</span>
                <span className="text-neutral-300">
                Autocomplete shows exactly which services you can use.
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}