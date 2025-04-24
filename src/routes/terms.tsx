import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  component: TermsRoute,
})

function TermsRoute() {
  return (
    <main className="pt-40 text-center">
      <h1 className="text-5xl font-bold text-white font-poppins">Terms of Service</h1>
      <p className="text-xl text-zinc-300 font-poppins">Last Updated on September 16, 2024</p>
      <div className="max-w-2xl px-5 mx-auto mt-24 text-left">
        <p className="text-sm text-zinc-200">
          This Terms of Service (&quot;TOS&quot;) describes how you (the
          customer) are expected to act while using our services.
        </p>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white">1. Acceptance of Terms</h3>
          <p className="text-sm text-zinc-200">
            By accessing and using this website and our services, you accept and agree to be bound by the
            terms and provisions of this agreement.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white">2. Description of Service</h3>
          <p className="text-sm text-zinc-200">
            AlteraSMS provides a software-as-a-service (SaaS) platform that offers temporary, one-time use,
            phone numbers to customers. Our service allows users to obtain and use temporary phone numbers
            to receive one-time authentication codes from various websites.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white">3. User Accounts</h3>
          <p className="text-sm text-zinc-200">
            To use our services, you must create an account. You are responsible for maintaining the
            confidentiality of your account information, including your password, and for all activities
            that occur under your account.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white font-neon">4. Use of the Service</h3>
          <p className="text-sm text-zinc-200">
            You agree to use the service only for lawful purposes and in accordance with these Terms. You
            are prohibited from using the service to:
          </p>
          <ol>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Engage in fraudulent activities</li>
            <li>Attempt to gain unauthorized access to any part of the service</li>
          </ol>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white font-neon">5. Payment and Refunds</h3>
          <p className="text-sm text-zinc-200">
            AlteraSMS provides a &ldquo;pay what you want&rdquo; pricing model. The customer chooses how much money to
            deposit into their account. The customer&apos;s balance will only be charged when they receive a sms
            code. Once a payment is processed, the customer has up to 24 hours to
            contact us about a possible refund. The customer will not receive a refund if they have either
            received a sms code during the 24 hour period, or contacted us for a refund after the 24 hours
            has passed.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white font-neon">6. Data Collection and Use</h3>
          <p className="text-sm text-zinc-200">
            We collect and store certain information, including your email address, Discord account
            information (provided through OAuth), and hashed passwords. By using our service, you consent to
            this data collection and storage. For more details, please refer to our Privacy Policy.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white font-neon">7. Communication</h3>
          <p className="text-sm text-zinc-200">
            By using our service, you agree to receive emails from us regarding account activities,
            notifications, and two-factor authentication (2FA) codes. These communications are an integral
            part
            of our service.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white font-neon">8. Intellectual Property</h3>
          <p className="text-sm text-zinc-200">
            The content, organization, graphics, design, compilation, magnetic translation, digital
            conversion,
            and other matters related to the Site are protected under applicable copyrights, trademarks, and
            other proprietary rights.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white font-neon">9. Disclaimer of Warranties</h3>
          <p className="text-sm text-zinc-200">
            This website, along with other websites on the &ldquo;alterasms.io&rdquo; domain, and our services are
            provided
            &ldquo;as is&rdquo; without any representations or warranties, express or implied.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white font-neon">10. Limitation of Liability</h3>
          <p className="text-sm text-zinc-200">
            In no event will we be liable for any loss or damage including without limitation, indirect or
            consequential loss or damage, or any loss or damage whatsoever arising from loss of data or
            profits
            arising out of, or in connection with, the use of our website or services.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white font-neon">11. Governing Law</h3>
          <p className="text-sm text-zinc-200">
            These terms and conditions are governed by and construed in accordance with the laws of the
            state of
            California, in the United State, and you irrevocably submit to the exclusive jurisdiction of the
            courts in that State or location.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white font-neon">12. Changes to Terms</h3>
          <p className="text-sm text-zinc-200">
            We reserve the right to modify these terms at any time. We will notify users of any significant
            changes via email. Your continued use of the service after such modifications will constitute
            your acknowledgment and agreement to the modified terms.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-extrabold text-white font-neon">13. Termination</h3>
          <p className="text-sm text-zinc-200">
            We reserve the right to terminate or suspend your account and access to our services at our sole
            discretion, without notice, for conduct that we believe violates these Terms or is harmful to
            other users of the service, us, or third parties, or for any other reason.
          </p>
        </div>
      </div>
    </main>
  )
}
