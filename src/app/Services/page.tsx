import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Credit Repair",
      description:
        "We identify and dispute inaccurate, misleading, or unverifiable information on your credit reports.",
      features: ["Credit report analysis", "Custom dispute strategies", "Progress tracking", "Bureau communications"],
      gradient: "from-trust-blue to-trust-green",
      link: "/services/credit-repair",
    },
    {
      title: "Credit Building",
      description: "We help you establish positive credit history and improve your score with proven strategies.",
      features: [
        "Personalized action plans",
        "Credit building tools",
        "Score improvement tactics",
        "Ongoing monitoring",
      ],
      gradient: "from-trust-green to-accent-yellow",
      link: "/services/credit-building",
    },
    {
      title: "Business Credit",
      description: "Establish and build business credit separate from your personal credit to grow your company.",
      features: ["Business credit profiles", "Funding strategies", "Vendor credit lines", "Business credit cards"],
      gradient: "from-accent-yellow to-accent-coral",
      link: "/services/business-credit",
    },
    {
      title: "Credit Monitoring",
      description: "Stay informed about changes to your credit report and score with our monitoring services.",
      features: ["Real-time alerts", "Identity theft protection", "Score tracking", "Report access"],
      gradient: "from-accent-coral to-trust-blue",
      link: "/services/credit-monitoring",
    },
    {
      title: "Financial Education",
      description: "We empower you with knowledge and tools to maintain excellent credit for life.",
      features: ["One-on-one coaching", "Educational resources", "Budgeting strategies", "Debt management"],
      gradient: "from-trust-blue to-accent-coral",
      link: "/services/financial-education",
    },
  ]

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16 animate-fade-in">
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
            <span className="text-gradient">Our</span> <span className="text-trust-blue">Services</span>
          </h1>
          <p className="font-serif text-muted-foreground max-w-2xl mx-auto text-lg">
            Our comprehensive credit repair and financial services are tailored to help you achieve your financial
            goals.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-0 shadow-lg glass-card hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-6">
                <h3 className="font-sans text-xl font-bold mb-2 text-trust-blue">{service.title}</h3>
                <p className="font-serif text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-trust-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="font-serif text-sm">{feature}</span>
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-trust-blue/20 to-trust-green/20 rounded-lg p-8 text-center mb-16">
          <h2 className="font-sans text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">Not Sure Which Service</span>{" "}
            <span className="text-trust-blue">Is Right For You?</span>
          </h2>
          <p className="font-serif text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a free consultation with our credit experts to get personalized recommendations based on your
            unique situation.
          </p>
          <button className="bg-trust-blue hover:bg-trust-blue/90 text-white font-sans font-bold transition-all duration-300 px-8 py-3 rounded-md">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </main>
  )
}
