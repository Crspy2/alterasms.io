import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { LinkPreview } from "@/components/ui/link-preview"

const faqs = [
    {
        question: 'What payment methods do you accept?',
        answer:
            'We offer flexible payment options to suit your preferences. AlteraSMS accepts all major credit cards (Visa, MasterCard, American Express, Discover), popular digital wallets like PayPal and CashApp, as well as a wide range of cryptocurrencies. Your convenience is our priority.'
    },
    {
        question: 'Do your numbers work for Ubisoft and Rainbow Six Siege?',
        answer: 'Yes, our numbers have been vigorously tested and confirmed to be working with Ubisoft.'
    },
    {
        question: 'How much does it cost?',
        answer:
            'Our flexible pricing starts at just $0.10 per number. We offer a "pay what you want" model to accommodate various budgets. You can deposit any amount you choose, with a minimum deposit of $2 per transaction. This approach allows you to control your spending while accessing our services.',
    },
    {
        question: 'How many countries and services you do support?',
        answer:
            'Our global reach spans 150+ countries, offering support for over 1,500 services - and we\'re expanding daily. Can\'t find a specific service? Contact our support team on Discord, and we\'ll work to add it to our growing list.',
    },
    {
        question: 'How long can I use each number for?',
        answer:
            'Our numbers have a short lifespan of 10-20 minutes, perfectly timed for one-time 2FA code usage. This brief window ensures optimal security while giving you ample time to complete your verification process.\n'
    },{
        question: 'Why didn\'t my 2FA code work?',
        answer: 'There are a few reasons why your 2FA code might not have worked. First, double-check that you have entered the number correctly on the website. A common mistake is including the area code when it is not needed. Also, ensure you are using the code within the valid time window, as most 2FA codes expire quickly. If you are still having trouble, try requesting a new number or contact our support team for assistance.'
    },
    {
        question: 'How do I get started with AlteraSMS?',
        answer: 'Getting started with AlteraSMS is quick and easy. Begin by visiting our registration page at https://dash.alterasms.io/register to create your account. Once registered, simply log in to access your personalized dashboard. From there, you can deposit funds and start managing your SMS needs. Your dashboard serves as your control center for all AlteraSMS services, putting everything you need at your fingertips.'
    }
]

export const FAQ = () => {
    return (
        <div id="faq" className="">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="flex flex-col lg:col-span-5">
                        <h2 className="text-3xl font-semibold font-poppins">Frequently asked questions</h2>
                        <span className="mt-4 text-base leading-1 text-neutral-200">
                            Can’t find the answer you’re looking for? Reach out to our customer support team through{' '}
                            <LinkPreview url="https://discord.gg/ku8dp8cdSs"
                                         className="font-bold underline underline-offset-2 hover:underline-offset-4 transition-all decoration-cyan-400">
                                Discord
                            </LinkPreview>.
                        </span>
                    </div>
                    <div className="mt-10 lg:col-span-7 lg:mt-0">
                        <dl className="space-y-10">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={faq.question}
                                        className="group"
                                    >
                                        <AccordionTrigger className="group-hover:font-bold text-left">{faq.question}</AccordionTrigger>
                                        <AccordionContent>{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}