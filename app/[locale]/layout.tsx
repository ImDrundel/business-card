import type { Metadata } from "next"
import "./globals.scss"
import initTranstation from "../i18n"
import TranslationsProvider from "@/app/[locale]/components/TranslationsProvider"
import { Nunito_Sans } from "next/font/google"

export const metadata: Metadata = {
  title: "Andrew's card",
  description: "Andrew's business card",
}
const font = Nunito_Sans({
  weight: "400",
  subsets: ["latin"],
})
interface Params {
  locale: string
}
const i18nNamespaces = ["home", "MyInfo", "Games", "MyProjects", "TodoList"]

export default async function RootLayout({
  params: { locale },
  children,
}: Readonly<{
  children: React.ReactNode
  params: Params
}>) {
  const { resources } = await initTranstation(locale, i18nNamespaces)

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <html lang="en" className={font.className}>
        <body>{children}</body>
      </html>
    </TranslationsProvider>
  )
}
