import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import "./globals.css"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Ambitious Dreams Credit Repair | Transform Your Credit Score",
    template: "%s | Ambitious Dreams Credit Repair",
  },
  description:
    "Professional credit repair services to help improve your credit score, remove negative items, and achieve your financial goals. Free consultation available.",
  keywords: [
    "credit repair",
    "credit score improvement",
    "fix bad credit",
    "remove negative items",
    "financial freedom",
    "credit building",
    "business credit",
    "credit monitoring",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
        <div className="relative flex min-h-screen flex-col">
          <MainNav />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'