import Image from "next/image"
import Link from "next/link"
import { Shield, ChevronLeft, CheckCircle } from "lucide-react"

export default function CreditRepairPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <nav className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center text-trust-blue hover:text-accent-coral transition-colors duration-300 font-sans font-medium group"
          >
            <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Services</span>
          </Link>
        </nav>

        {/* Header Section */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Link href="/" className="relative h-16 w-16 transition-transform duration-300 hover:scale-110">
              <Image
                src="/ambitious-dreams-logo.png"
                alt="Ambitious Dreams Enterprises LLC Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
          <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Credit</span> <span className="text-trust-blue">Repair</span>
          </h1>
          <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
            We identify and dispute inaccurate, misleading, or unverifiable information on your credit reports to help
            improve your credit score.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="font-sans text-2xl font-bold mb-6 text-trust-blue">How Our Credit Repair Works</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 h-8 w-8 rounded-full bg-trust-blue flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold mb-2 text-trust-blue">Credit Report Analysis</h3>
                  <p className="font-serif text-muted-foreground">
                    We thoroughly analyze your credit reports from all three bureaus to identify errors, inaccuracies,
                    and items that can be disputed.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 h-8 w-8 rounded-full bg-trust-blue flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold mb-2 text-trust-blue">Custom Dispute Strategy</h3>
                  <p className="font-serif text-muted-foreground">
                    We create a personalized plan to address the specific issues on your credit report, prioritizing
                    items that have the biggest impact.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 h-8 w-8 rounded-full bg-trust-blue flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold mb-2 text-trust-blue">Dispute Filing</h3>
                  <p className="font-serif text-muted-foreground">
                    We prepare and submit professionally written dispute letters to the credit bureaus and creditors on
                    your behalf.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 h-8 w-8 rounded-full bg-trust-blue flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold mb-2 text-trust-blue">Progress Tracking</h3>
                  <p className="font-serif text-muted-foreground">
                    We continuously monitor responses from credit bureaus and creditors, and keep you updated on your
                    progress.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 h-8 w-8 rounded-full bg-trust-blue flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold mb-2 text-trust-blue">Ongoing Support</h3>
                  <p className="font-serif text-muted-foreground">
                    We provide guidance and support throughout the entire process to help you achieve your credit goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border-0 shadow-lg glass-card overflow-hidden rounded-lg">
              <div className="h-2 bg-gradient-to-r from-trust-blue to-trust-green"></div>
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-trust-blue/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-trust-blue" />
                </div>
                <h2 className="font-sans text-xl font-bold mb-4 text-trust-blue">What We Can Dispute</h2>
                <ul className="space-y-3 mb-6">
                  {[
                    "Late payments that are not yours",
                    "Accounts with incorrect balances or limits",
                    "Duplicate accounts",
                    "Collection accounts with errors",
                    "Outdated negative information",
                    "Inquiries you did not authorize",
                    "Identity theft issues",
                    "Bankruptcies with incorrect information",
                    "Judgments with errors",
                    "Foreclosures with inaccuracies",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-trust-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="font-serif">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white font-sans font-bold transition-all duration-300 px-6 py-3 rounded-md">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-trust-blue/20 to-trust-green/20 rounded-lg p-8 text-center mb-12">
          <h2 className="font-sans text-2xl font-bold mb-4">
            <span className="text-gradient">Ready to Improve</span>{" "}
            <span className="text-trust-blue">Your Credit Score?</span>
          </h2>
          <p className="font-serif text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take the first step toward financial freedom today. Schedule your free consultation and discover how we can
            help you repair your credit.
          </p>
          <button className="bg-trust-blue hover:bg-trust-blue/90 text-white font-sans font-bold transition-all duration-300 px-6 py-3 rounded-md">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </main>
  )
}
