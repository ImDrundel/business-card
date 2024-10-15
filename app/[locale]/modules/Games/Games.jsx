import { useTranslation } from "react-i18next"

export default function Games() {
  const { t } = useTranslation("Games")
  return <div>{t("short-description")}</div>
}
