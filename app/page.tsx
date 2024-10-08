"use client"
import style from "./page.module.scss"
import { createContext, useState } from "react"
import ButtonThemeSwitch from "./ui/button-theme-switch/buttonThemeSwitch"

interface ThemeContextType {
  theme: string
  toggleTheme: () => void
}
export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function Home() {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr: string) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${style.container} ${style[theme]}`}>
        <header>
          Header
          <ButtonThemeSwitch />
        </header>
        <main>Main</main>
        <footer>Footer</footer>
      </div>
    </ThemeContext.Provider>
  )
}
