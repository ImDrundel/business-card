import { useTranslation } from "react-i18next"
// import style from "./TodoLost.module.scss"
export default function TodoList() {
  const { t } = useTranslation("TodoList")
  return <div>{t("first")}</div>
}
