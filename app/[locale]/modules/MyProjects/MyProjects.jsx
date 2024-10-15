import { useTranslation } from "react-i18next"

export default function MyProjects() {
  const { t } = useTranslation("MyProjects")
  return <div>{t("future-projects")}</div>
}
