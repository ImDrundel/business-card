import { useContext } from "react"
import { ThemeContext } from "@/app/[locale]/page"
import style from "./buttonThemeSwitch.module.scss"
import { useTranslation } from "react-i18next"

export default function ButtonThemeSwitch() {
  const { t } = useTranslation("Home")
  const context = useContext(ThemeContext)
  if (!context) {
    return null
  }
  const { theme, toggleTheme } = context

  return (
    <div className={`${style.themeSwitch} ${style[theme]}`}>
      <button onClick={toggleTheme}>{t("theme-button")}</button>
    </div>
  )
}
