import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vendoxpress.com"), // 👈 THIS LINE FIXES THE WARNING
  title: "VendoXpress - Smart Vending Solutions UAE",
  description:
    "Transform your business with innovative vending machines – massage chairs, photo booths, gaming, and more. Trusted partner across the UAE.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png"
  },
  openGraph: {
    title: "VendoXpress - Smart Vending Solutions UAE",
    description:
      "Premium vending machines and smart solutions across the UAE. Zero investment, fully managed. Start earning passive income today!",
    url: "https://www.vendoxpress.com",
    siteName: "VendoXpress",
    images: [
      {
        url: "/og-image.jpg", // relative path is fine now
        width: 1200,
        height: 630,
        alt: "VendoXpress Smart Vending Solutions"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "VendoXpress - Smart Vending Solutions UAE",
    description:
      "Transform your business with smart vending machines in the UAE. Massage chairs, arcade machines, and more with full support.",
    images: ["/og-image.jpg"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Protest+Riot&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  )
}
