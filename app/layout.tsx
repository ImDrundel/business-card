import type { Metadata } from "next"
import "./globals.scss"

export const metadata: Metadata = {
  title: "Andrew's card",
  description: "Andrew's business card",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
