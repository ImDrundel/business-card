import { useContext } from "react"
import { ThemeContext } from "@/app/[locale]/page"
import Link from "next/link"
import Image from "next/image"
import style from "./MyInfo.module.scss"
import github from "./img/github.svg"
import linkedin from "./img/linkedin.svg"
import djinni from "./img/djinni.svg"
import mail from "./img/mail.svg"
import profilePhoto from "./img/profilePhoto.jpg"
import { useTranslation } from "react-i18next"

export default function MyInfo() {
  const context = useContext(ThemeContext)
  const { theme } = context

  const { t } = useTranslation("MyInfo")
  return (
    <div className={style.container}>
      <div className={style.photo}>
        <Image src={profilePhoto} alt="profile photo" height={1920} />
      </div>
      <div className={style.info}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        expedita dignissimos repellat impedit atque consequuntur a voluptas
        facere nam praesentium, quae doloribus sequi iusto adipisci quibusdam,
        ab asperiores rerum similique.
      </div>
      <div className={style.achievements}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        ducimus ipsam necessitatibus doloremque praesentium atque a maxime, hic
        delectus esse qui eius quia voluptates assumenda molestiae totam! Illo,
        corrupti fugit?
      </div>
      <div className={style.experience}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
        quibusdam modi corporis eius minus! Eaque cum culpa, quo id soluta
        labore ab dicta, vitae debitis ullam consectetur iste expedita!
      </div>
      <div className={style.links}>
        <div>
          <Link
            className={`${style.linkButton} ${style[theme]}`}
            href={"https://github.com/ImDrundel"}
          >
            <Image src={github} alt="playlist" width={18} height={18} />
            GitHub
          </Link>
        </div>
        <div>
          <Link
            className={`${style.linkButton} ${style[theme]}`}
            href={"https://djinni.co/my/profile/"}
          >
            <Image src={djinni} alt="djinni" height={20} />
            Djinni
          </Link>
        </div>
        <div className={`${style.linkButton} ${style[theme]}`}>
          <Image src={mail} alt="playlist" width={20} height={20} />
          {t("mail")}
        </div>
        <div>
          <Link
            className={`${style.linkButton} ${style[theme]}`}
            href={"https://www.linkedin.com/in/iamdrundel/"}
          >
            <Image src={linkedin} alt="linkedin" width={20} height={20} />
            LinkdIn
          </Link>
        </div>
      </div>
    </div>
  )
}
