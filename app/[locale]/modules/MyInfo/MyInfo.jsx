import Link from "next/link"
import Image from "next/image"
import style from "./MyInfo.module.scss"
import github from "./img/github.svg"
import djinni from "./img/djinni.svg"
import linkedin from "./img/linkedin.svg"
import profilePhoto from "./img/profilePhoto.jpg"
import { useTranslation } from "react-i18next"

export default function MyInfo() {
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
            className={style.linkButton}
            href={"https://github.com/ImDrundel"}
          >
            <Image src={github} alt="playlist" width={14} height={14} />
            GitHub
          </Link>
        </div>
        <div>
          <Link
            className={style.linkButton}
            href={"https://djinni.co/my/profile/"}
          >
            <Image src={djinni} alt="djinni" height={20} />
            Djinni
          </Link>
        </div>
        <div className={style.linkButton}>
          <Image src={github} alt="playlist" width={14} height={14} />
          {t("mail")}
        </div>
        <div>
          <Link
            className={style.linkButton}
            href={"https://www.linkedin.com/in/iamdrundel/"}
          >
            <Image src={linkedin} alt="linkedin" width={14} height={14} />
            LinkdIn
          </Link>
        </div>
      </div>
    </div>
  )
}
