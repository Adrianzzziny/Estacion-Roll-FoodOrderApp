import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
})

export const metadata: Metadata = {
  title: "Sushi App - Comida Oriental",
  description: "Auténtica comida oriental fresca y deliciosa",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${notoSansJP.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
