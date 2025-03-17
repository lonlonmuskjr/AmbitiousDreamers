import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-sans text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">About</span> <span className="text-trust-blue">Ambitious Dreams</span>
              </h1>
              <p className="font-serif text-muted-foreground text-lg mb-6">
                Ambitious Dreams Enterprises LLC was founded with a clear mission: to help individuals repair their
                credit, build financial stability, and achieve their dreams of homeownership, business funding, and
                financial freedom.
              </p>
              <p className="font-serif text-muted-foreground mb-8">
                Since 2018, we've helped hundreds of clients improve their credit scores, secure better interest rates,
                and take control of their financial futures. Our team of credit experts is passionate about empowering
                our clients with the knowledge and tools they need to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/team">
                  <button className="bg-trust-blue hover:bg-trust-blue/90 text-white font-sans font-bold transition-all duration-300 px-6 py-3 rounded-md">
                    Meet Our Team
                  </button>
                </Link>
                <Link href="/success-stories">
                  <button className="border border-trust-blue text-trust-blue hover:bg-trust-blue/10 font-sans font-bold transition-all duration-300 px-6 py-3 rounded-md">
                    Our Success Stories
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Customer Journey To better credit .jpg"
                alt="Ambitious Dreams Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl font-bold mb-4">
              <span className="text-gradient">Our</span> <span className="text-trust-blue">Values</span>
            </h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              At Ambitious Dreams, we're guided by a set of core values that inform everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity",
                description:
                  "We operate with complete transparency and honesty, always putting our clients' best interests first.",
                color: "bg-trust-blue/10",
                textColor: "text-trust-blue",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from customer service to credit repair strategies.",
                color: "bg-trust-green/10",
                textColor: "text-trust-green",
              },
              {
                title: "Efficiency",
                description:
                  "We value your time and work diligently to achieve results as quickly and efficiently as possible.",
                color: "bg-accent-yellow/10",
                textColor: "text-accent-yellow",
              },
              {
                title: "Empathy",
                description:
                  "We understand the stress of credit challenges and approach each client with compassion and support.",
                color: "bg-accent-coral/10",
                textColor: "text-accent-coral",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="border-0 shadow-lg glass-card hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className={`h-12 w-12 rounded-full ${value.color} flex items-center justify-center mb-4`}>
                    <CheckCircle className={`h-6 w-6 ${value.textColor}`} />
                  </div>
                  <h3 className="font-sans text-xl font-bold mb-2 text-trust-blue">{value.title}</h3>
                  <p className="font-serif text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 bg-gradient-to-r from-trust-blue/20 to-trust-green/20 rounded-lg p-8 text-center">
          <h2 className="font-sans text-3xl font-bold mb-4">
            <span className="text-gradient">Ready to Start Your</span>{" "}
            <span className="text-trust-blue">Credit Journey?</span>
          </h2>
          <p className="font-serif text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take the first step toward financial freedom today. Schedule your free consultation and discover how we can
            help you achieve your ambitious dreams.
          </p>
          <Link href="/free-consultation">
            <button className="bg-trust-blue hover:bg-trust-blue/90 text-white font-sans font-bold transition-all duration-300 px-8 py-3 rounded-md">
              Schedule Free Consultation
            </button>
          </Link>
        </section>
      </div>
    </main>
  )
}
