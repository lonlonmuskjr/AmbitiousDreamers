import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ChevronLeft } from "lucide-react"

export default function ContactPage() {
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
            <span className="text-gradient">Get in</span> <span className="text-trust-blue">Touch</span>
          </h1>
          <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
            Have questions about our credit repair services? We're here to help you on your journey to financial
            freedom.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {/* Contact Form */}
          <div className="md:col-span-3 shadow-lg border-0 glass-card overflow-hidden rounded-lg">
            <div className="bg-trust-blue/10 p-4 border-b border-trust-blue/20">
              <h2 className="font-sans text-xl font-bold text-trust-blue">Send Us a Message</h2>
              <p className="text-sm text-muted-foreground font-serif">We'll get back to you within 24 hours</p>
            </div>
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-serif">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-blue/30"
                    />
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
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="font-serif">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-blue/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="font-serif">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-blue/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-serif">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Please provide details about your inquiry..."
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-trust-blue/30"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white font-sans font-bold transition-all duration-300 px-6 py-3 rounded-md"
                >
                  Send Message
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

          {/* Contact Information */}
          <div className="md:col-span-2 space-y-6">
            <div className="shadow-md border-0 glass-card overflow-hidden rounded-lg">
              <div className="bg-trust-blue/10 p-4 border-b border-trust-blue/20">
                <h2 className="font-sans text-lg font-bold text-trust-blue">Contact Information</h2>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-trust-blue/10 flex items-center justify-center mt-0.5">
                    <Phone className="h-4 w-4 text-trust-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-trust-blue hover:text-accent-coral transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-trust-blue/10 flex items-center justify-center mt-0.5">
                    <Mail className="h-4 w-4 text-trust-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href="mailto:info@ambitiousdreamersent.com"
                      className="text-trust-blue hover:text-accent-coral transition-colors"
                    >
                      info@ambitiousdreamersent.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-trust-blue/10 flex items-center justify-center mt-0.5">
                    <MapPin className="h-4 w-4 text-trust-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Office Address</p>
                    <p className="text-sm text-muted-foreground">
                      3455 Peachtree Rd NE Suite 500
                      <br />
                      Atlanta, GA 30326
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-trust-blue/10 flex items-center justify-center mt-0.5">
                    <Clock className="h-4 w-4 text-trust-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-video bg-muted relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground">Map placeholder - Embed Google Maps here</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground font-serif border-t border-muted/20 pt-6">
          <p>© {new Date().getFullYear()} Ambitious Dreams Enterprises LLC. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="/privacy-policy" className="text-trust-blue hover:text-accent-coral transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-trust-blue hover:text-accent-coral transition-colors">
              Terms of Service
            </Link>
            <Link href="/quick-links" className="text-trust-blue hover:text-accent-coral transition-colors">
              Quick Links
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
