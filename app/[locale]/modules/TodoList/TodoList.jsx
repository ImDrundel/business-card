import { useTranslation } from "react-i18next"

export default function TodoList() {
  const { t } = useTranslation("TodoList")
  return <div>{t("first")}</div>
}
