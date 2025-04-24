import { IoPricetag } from "react-icons/io5"
import { TbLabelImportantFilled } from "react-icons/tb"

export const Info = () => {
  return (
    <div className="flex flex-col gap-y-3.5 items-center px-4 md:px-10 my-16 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold">SMS verification that <strong>JUST</strong> works.</h2>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4">
        <img src="/numbers.png" alt="Picture of numbers listed on our dashboard"  />
        <div className="flex flex-col justify-evenly gap-y-4 md:-mt-3">
          <div className="flex flex-row gap-x-2.5">
            <TbLabelImportantFilled className="flex-shrink-0 mt-2 size-7 text-cyan-400" />
            <div>
              <h4 className="text-lg font-semibold">High Quality Numbers</h4>
              <p className="text-sm">
                We provide high-quality non-VoiP numbers <strong>guaranteed to satisfy your verification needs</strong>. If your number doesn't meet security requirements, don't worry, we <strong>only charge when your number receives a message</strong> from your requested service.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-2.5">
            <IoPricetag className="flex-shrink-0 mt-2 size-7 text-cyan-400" />
            <div>
              <h4 className="text-lg font-semibold">Fixed Pricing</h4>
              <p className="text-sm">
                Our numbers stay at their prices even when they are in high demand. AlteraSMS prides itself on always offering you with great deals that never change!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}