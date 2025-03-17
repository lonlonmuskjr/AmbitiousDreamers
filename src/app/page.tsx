import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-trust-blue/10 to-trust-green/10 z-0"></div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient">Transform Your Credit,</span>{" "}
                <span className="text-trust-blue">Transform Your Future</span>
              </h1>
              <p className="font-serif text-muted-foreground text-lg mb-8 max-w-lg">
                We specialize in helping you repair your credit, build financial stability, and achieve your ambitious
                dreams.
              </p>

              <ul className="space-y-2 mb-8">
                {[
                  "Personalized credit repair strategies",
                  "Dispute inaccurate items on your report",
                  "Improve your credit score",
                  "Expert financial guidance",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-trust-green mr-2 flex-shrink-0" />
                    <span className="font-serif">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/free-consultation" className="inline-block">
                  <button className="bg-trust-blue hover:bg-trust-blue/90 text-white font-sans font-bold transition-all duration-300 px-6 py-3 rounded-md">
                    Start Your Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </button>
                </Link>
                <Link href="/services" className="inline-block">
                  <button className="border border-trust-blue text-trust-blue hover:bg-trust-blue/10 font-sans font-bold transition-all duration-300 px-6 py-3 rounded-md">
                    Learn How It Works
                  </button>
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/Customer Journey To better credit .jpg"
                  alt="Credit repair journey illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 glass-card">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent-yellow text-accent-yellow" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </div>
                <p className="text-xs text-muted-foreground">Based on 200+ client reviews</p>
              </div>

              {/* Floating achievement card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 glass-card">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-trust-green/20 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-trust-green" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Average Improvement</p>
                    <p className="text-sm font-bold text-trust-green">+100 Points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-background to-trust-blue/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">How We Can</span> <span className="text-trust-blue">Help You</span>
            </h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive credit repair services are designed to address all aspects of your financial health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Credit Repair",
                description:
                  "We identify and dispute inaccurate, misleading, or unverifiable information on your credit reports.",
                icon: "shield",
                features: ["Credit report analysis", "Custom dispute strategies", "Progress tracking"],
                gradient: "from-trust-blue to-trust-green",
                link: "/services/credit-repair",
              },
              {
                title: "Credit Building",
                description:
                  "We help you establish positive credit history and improve your score with proven strategies.",
                icon: "trending-up",
                features: ["Personalized action plans", "Credit building tools", "Score improvement tactics"],
                gradient: "from-trust-green to-accent-yellow",
                link: "/services/credit-building",
              },
              {
                title: "Financial Education",
                description: "We empower you with knowledge and tools to maintain excellent credit for life.",
                icon: "message-square",
                features: ["One-on-one coaching", "Educational resources", "Budgeting strategies"],
                gradient: "from-trust-blue to-accent-coral",
                link: "/services/financial-education",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="border-0 shadow-lg glass-card hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-6">
                  <div className="h-12 w-12 rounded-full bg-trust-blue/10 flex items-center justify-center mb-4">
                    {service.icon === "shield" && <CheckCircle className="h-6 w-6 text-trust-blue" />}
                    {service.icon === "trending-up" && <CheckCircle className="h-6 w-6 text-trust-green" />}
                    {service.icon === "message-square" && <CheckCircle className="h-6 w-6 text-trust-blue" />}
                  </div>
                  <h3 className="font-sans text-xl font-bold mb-2 text-trust-blue">{service.title}</h3>
                  <p className="font-serif text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-trust-green mr-2 flex-shrink-0 mt-0.5" />
                        <span className="font-serif text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="flex items-center text-trust-blue hover:text-accent-coral transition-colors font-medium"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-trust-blue/5 to-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Our Success</span> <span className="text-trust-blue">Stories</span>
            </h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              See how we've helped clients transform their credit and achieve their financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Testimonial 1 */}
            <div className="border-0 shadow-lg p-6 glass-card rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-trust-blue/20 flex items-center justify-center text-white font-bold text-xl">
                    J
                  </div>
                </div>
                <div>
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent-yellow text-accent-yellow" />
                    ))}
                  </div>
                  <h3 className="font-sans font-bold">James R.</h3>
                  <p className="text-sm text-muted-foreground">Atlanta, GA</p>
                </div>
              </div>
              <p className="font-serif text-muted-foreground italic mb-4">
                "Ambitious Dreams helped me raise my credit score by 120 points in just 6 months. Their team was
                professional and kept me informed throughout the entire process."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-trust-green/10 text-trust-green text-xs font-medium rounded-full">
                    +120 points
                  </div>
                  <div className="px-3 py-1 bg-trust-blue/10 text-trust-blue text-xs font-medium rounded-full">
                    6 months
                  </div>
                </div>
                <Link
                  href="/success-stories"
                  className="text-sm text-trust-blue hover:text-accent-coral transition-colors"
                >
                  Read full story
                </Link>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="border-0 shadow-lg p-6 glass-card rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-trust-blue/20 flex items-center justify-center text-white font-bold text-xl">
                    M
                  </div>
                </div>
                <div>
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent-yellow text-accent-yellow" />
                    ))}
                  </div>
                  <h3 className="font-sans font-bold">Michelle T.</h3>
                  <p className="text-sm text-muted-foreground">Columbus, OH</p>
                </div>
              </div>
              <p className="font-serif text-muted-foreground italic mb-4">
                "I was able to qualify for my first home loan thanks to the credit repair services from Ambitious
                Dreams. I'm so grateful for their guidance and support!"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-trust-green/10 text-trust-green text-xs font-medium rounded-full">
                    +95 points
                  </div>
                  <div className="px-3 py-1 bg-accent-coral/10 text-accent-coral text-xs font-medium rounded-full">
                    Home loan approved
                  </div>
                </div>
                <Link
                  href="/success-stories"
                  className="text-sm text-trust-blue hover:text-accent-coral transition-colors"
                >
                  Read full story
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/testimonial-submission">
              <button className="border border-trust-blue text-trust-blue hover:bg-trust-blue/10 font-sans font-medium transition-all duration-300 px-6 py-2 rounded-md">
                Share Your Success Story
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-trust-blue/20 to-trust-green/20">
        <div className="container text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Ready to Transform</span>{" "}
            <span className="text-trust-blue">Your Credit?</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward financial freedom today. Schedule your free consultation and discover how we can
            help you achieve your ambitious dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-consultation">
              <button className="bg-trust-blue hover:bg-trust-blue/90 text-white font-sans font-bold transition-all duration-300 px-8 py-3 rounded-md">
                Schedule Free Consultation
              </button>
            </Link>
            <Link href="/quick-links">
              <button className="border border-trust-blue text-trust-blue hover:bg-trust-blue/10 font-sans font-bold transition-all duration-300 px-8 py-3 rounded-md">
                Explore Quick Links
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
