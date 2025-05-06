import { IoPricetag } from "react-icons/io5"
import { TbLabelImportantFilled } from "react-icons/tb"

export const Info = () => {
  return (
    <div className="flex flex-col gap-y-3.5 items-center justify-center px-4 md:px-10 my-16 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-start md:text-center gap-y-2 px-4 md:my-8">
        <h3 className="text-3xl sm:text-4xl 2xl:text-5xl font-semibold font-poppins">SMS verification that <strong>JUST</strong> works.</h3>
        <p className="text-neutral-300 text-sm xl:text-base 2xl:text-lg max-w-xl 2xl:max-w-2xl">
          From signup to verification code, AlteraSMS makes the process of verifying your accounts simple and efficient. Explore our key features designed to streamline your experience.
        </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4">
        <img src="/numbers.png" alt="Picture of numbers listed on our dashboard" />
        <div className="flex flex-col md:justify-evenly gap-y-8 md:gap-y-4 md:-mt-3">
          <div className="flex flex-row gap-x-2.5">
            <TbLabelImportantFilled className="flex-shrink-0 mt-2 size-7 text-cyan-400" />
            <div>
              <h4 className="text-lg font-semibold">High Quality Numbers</h4>
              <p className="text-sm text-neutral-200">
                We provide high-quality non-VoiP numbers <strong>guaranteed to satisfy your verification needs</strong>. If your number doesn't meet security requirements, don't worry, we <strong>only charge when your number receives a message</strong> from your requested service.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-2.5">
            <IoPricetag className="flex-shrink-0 mt-2 size-7 text-cyan-400" />
            <div>
              <h4 className="text-lg font-semibold">Fixed Pricing</h4>
              <p className="text-sm text-neutral-200">
                Our numbers stay at their prices even when they are in high demand. AlteraSMS prides itself on always offering you with great deals that never change!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}