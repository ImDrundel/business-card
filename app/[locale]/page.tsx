"use client"
import style from "./page.module.scss"
import { createContext, useState } from "react"
import ButtonThemeSwitch from "./ui/button-theme-switch/buttonThemeSwitch"
import ButtonsLanguageChoice from "./ui/buttons-language-choice/buttonsLanguageChoice"
import MyInfo from "./modules/MyInfo/MyInfo"
import MyProjectsTest from "./modules/MyProjects/MyProjects"
// import TodoList from "./modules/TodoList/TodoList"
// import Games from "./modules/Games/Games"
import { useTranslation } from "react-i18next"

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

  const { t } = useTranslation()

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${style.container} ${style[theme]}`}>
        <header>
          <div className={style.title}>{t("header")}</div>
          <ButtonsLanguageChoice />
          <ButtonThemeSwitch />
        </header>
        <main>
          <MyInfo />
          <MyProjectsTest />
          {/* <TodoList /> */}
          {/* <Games /> */}
        </main>
        <footer>{t("footer")}</footer>
      </div>
    </ThemeContext.Provider>
  )
}
