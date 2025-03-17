import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, CheckCircle } from "lucide-react"

export default function FreeConsultationPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-trust-blue hover:text-accent-coral transition-colors duration-300 font-sans font-medium group"
          >
            <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Homepage</span>
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
            <span className="text-gradient">Free</span> <span className="text-trust-blue">Consultation</span>
          </h1>
          <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
            Take the first step toward financial freedom. Schedule your free consultation with our credit experts.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {/* Consultation Form */}
          <div className="md:col-span-3 shadow-lg border-0 glass-card overflow-hidden rounded-lg">
            <div className="bg-trust-blue/10 p-4 border-b border-trust-blue/20">
              <h2 className="font-sans text-xl font-bold text-trust-blue">Schedule Your Free Consultation</h2>
              <p className="text-sm text-muted-foreground font-serif">No obligation, just expert advice</p>
            </div>
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="font-serif">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-blue/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="font-serif">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      placeholder="Smith"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-blue/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="font-serif">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-blue/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="font-serif">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-blue/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="creditScore" className="font-serif">
                    Current Credit Score Range
                  </label>
                  <select
                    id="creditScore"
                    name="creditScore"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-blue/30"
                  >
                    <option value="">Select a range</option>
                    <option value="below-500">Below 500</option>
                    <option value="500-579">500-579</option>
                    <option value="580-669">580-669</option>
                    <option value="670-739">670-739</option>
                    <option value="740-799">740-799</option>
                    <option value="800-plus">800+</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-serif">
                    What are your credit goals?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your credit goals and challenges..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-trust-blue/30"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" name="consent" required className="mt-1" />
                  <label htmlFor="consent" className="text-sm font-serif">
                    I consent to receive calls and text messages from Ambitious Dreams Enterprises LLC. I understand
                    that consent is not a condition of purchase.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white font-sans font-bold transition-all duration-300 px-6 py-3 rounded-md"
                >
                  Schedule My Free Consultation
                </button>

                <p className="text-xs text-muted-foreground text-center font-serif">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy-policy" className="text-trust-blue hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>

          {/* Benefits */}
          <div className="md:col-span-2 space-y-6">
            <div className="shadow-md border-0 glass-card overflow-hidden rounded-lg">
              <div className="bg-trust-blue/10 p-4 border-b border-trust-blue/20">
                <h2 className="font-sans text-lg font-bold text-trust-blue">What You'll Get</h2>
              </div>
              <div className="p-5 space-y-4">
                <ul className="space-y-3">
                  {[
                    "Personalized credit analysis",
                    "Custom action plan",
                    "Expert advice on improving your score",
                    "Answers to all your credit questions",
                    "No obligation or pressure",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-trust-green mt-0.5 flex-shrink-0" />
                      <span className="font-serif">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="shadow-md border-0 glass-card overflow-hidden rounded-lg">
              <div className="bg-trust-blue/10 p-4 border-b border-trust-blue/20">
                <h2 className="font-sans text-lg font-bold text-trust-blue">Why Choose Us</h2>
              </div>
              <div className="p-5">
                <p className="font-serif text-muted-foreground mb-4">
                  At Ambitious Dreams, we're committed to helping you achieve financial freedom through personalized
                  credit repair strategies and education.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-4 w-4 text-trust-green" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Trusted by hundreds of clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
