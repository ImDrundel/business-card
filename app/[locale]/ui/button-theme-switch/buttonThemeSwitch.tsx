import { useContext } from "react"
import { ThemeContext } from "@/app/[locale]/page"
import style from "./buttonThemeSwitch.module.scss"

export default function ButtonThemeSwitch() {
  const context = useContext(ThemeContext)
  if (!context) {
    return null
  }
  const { theme, toggleTheme } = context

  return (
    <div className={`${style.themeSwitch} ${style[theme]}`}>
      <button onClick={toggleTheme}>Theme</button>
    </div>
  )
}
