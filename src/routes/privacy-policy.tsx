import { LinkPreview } from "@/components/ui/link-preview"
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyRoute,
})

function PrivacyPolicyRoute(){
  return (
    <main className="pt-40 text-center">
      <h1 className="text-white font-warp font-bold text-5xl">Privacy Policy</h1>
      <p className="text-zinc-300 font-neon text-xl">Last Updated on March 11, 2023</p>
      <div className="max-w-2xl px-5 mx-auto text-left mt-24">
        <p className="text-zinc-200 text-sm">
          This Privacy Policy explains how AlteraSMS collects, uses, and protects your personal information
          when you use our website and services. We are committed to ensuring the privacy and security of your
          data.
        </p>
        <div className="mt-10">
          <h3 className="text-white text-xl mb-5 font-extrabold font-neon">1. Information We Collect</h3>
          <p className="text-zinc-200 text-sm">
            We collect the following types of information:
          </p>
          <ul className="list-disc text-sm ml-4">
            <li>Email addresses</li>
            <li>Discord account information (provided through OAuth)</li>
            <li>Hashed passwords</li>
            <li>Temporary phone numbers assigned to users</li>
            <li>Usage data related to our services</li>
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="text-white text-xl mb-5 font-extrabold font-neon">2. How We Use Your Information</h3>
          <p className="text-zinc-200 text-sm">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc text-sm ml-4">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our services</li>
            <li>To detect, prevent, and address technical issues</li>
            <li>To provide you with news, special offers, and general information about other goods,
              services, and events which we offer
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="text-white text-xl mb-5 font-extrabold font-neon">3. Data Storage and Security</h3>
          <p className="text-zinc-200 text-sm">
            We implement appropriate technical and organizational measures to protect your personal data
            against unauthorized or unlawful processing, accidental loss, destruction, or damage. However,
            please note that no method of transmission over the Internet or method of electronic storage is
            100% secure.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-white text-xl mb-5 font-extrabold font-neon">4. Data Retention</h3>
          <p className="text-zinc-200 text-sm">
            We will retain your personal information only for as long as necessary to fulfill the purposes
            outlined in this Privacy Policy, unless a longer retention period is required or permitted by
            law.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-white text-xl mb-5 font-extrabold font-neon">5. Third-Party Services</h3>
          <p className="text-zinc-200 text-sm">
            We may employ third-party companies and individuals to facilitate our service, provide the
            service on our behalf, perform service-related services, or assist us in analyzing how our
            service is used. These third parties have access to your personal information only to perform
            these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-white text-xl mb-5 font-extrabold font-neon">6. Communications</h3>
          <p className="text-zinc-200 text-sm">
            We may use your personal information to contact you with newsletters, marketing or promotional
            materials, and other information that may be of interest to you. You may opt out of receiving
            any, or all, of these communications from us by following the unsubscribe link or instructions
            provided in any email we send.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-white text-xl mb-5 font-extrabold font-neon">7. Your Data Protection Rights</h3>
          <p className="text-zinc-200 text-sm">
            Depending on your location, you may have certain rights regarding your personal information,
            such as the right to access, correct, or delete your data. To exercise these rights, please
            contact us using the information provided at the end of this policy.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-white text-xl mb-5 font-extrabold font-neon">8. Changes to This Privacy Policy</h3>
          <p className="text-zinc-200 text-sm">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting
            the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-white text-xl mb-5 font-extrabold font-neon">9. Contact Us</h3>
          <p className="text-zinc-200 text-sm">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc text-sm ml-4">
            <li><a href="mailto:support@alterasms.io" target="_blank" className="hover:underline underline-offset-1">support@alterasms.io</a></li>
            <li>
              <LinkPreview
                url="https://discord.gg/ku8dp8cdSs"
                className="font-bold underline underline-offset-2 hover:underline-offset-4 transition-all decoration-cyan-400"
              >
                https://discord.gg/ku8dp8cdSs
              </LinkPreview>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

