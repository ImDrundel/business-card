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
    <div className={`${style.container} ${style[theme]}`}>
      <div className={style.photoBox}>
        <Image
          className={style.photo}
          src={profilePhoto}
          alt="profile photo"
          height={1920}
        />
      </div>
      <div className={style.info}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        expedita dignissimos repellat impedit atque consequuntur a voluptas
        facere nam praesentium, quae doloribus sequi iusto adipisci quibusdam,
        ab asperiores rerum similique.
      </div>
      <div className={style.achievements}>
        <li>github</li>
        <li>Scss</li>
        <li>NextJS</li>
        <li>Typescript</li>
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
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/ImDrundel"}
          >
            <Image src={github} alt="github" width={18} height={18} />
            GitHub
          </Link>
        </div>

        <div>
          <Link
            className={`${style.linkButton} ${style[theme]}`}
            target="_blank"
            rel="noopener noreferrer"
            href={"https://djinni.co/my/profile/"}
          >
            <Image src={djinni} alt="djinni" height={20} />
            Djinni
          </Link>
        </div>

        <div>
          <Link
            className={`${style.linkButton} ${style[theme]}`}
            href={"mailto:andcher53@gmail.com"}
          >
            <Image src={mail} alt="mail" width={20} height={20} />
            {t("mail")}
          </Link>
        </div>

        <div>
          <Link
            className={`${style.linkButton} ${style[theme]}`}
            target="_blank"
            rel="noopener noreferrer"
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
