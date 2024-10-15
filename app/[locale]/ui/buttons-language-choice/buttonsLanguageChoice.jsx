import style from "./buttonsLanguageChoice.module.scss"
import Image from "next/image"
import Link from "next/link"
import uk from "./img/uk.svg"
import en from "./img/en.svg"

export default function ButtonsLanguageChoice() {
  return (
    <div className={style.container}>
      <Link href={"/en"} className={style.link}>
        <Image src={en} alt="En icon" width={30} height={30} />
      </Link>
      <Link href={"/uk"} className={style.link}>
        <Image src={uk} alt="Uk icon" width={30} height={30} />
      </Link>
    </div>
  )
}
