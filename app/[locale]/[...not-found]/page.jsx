import Link from "next/link"
import style from "./page.module.scss"

export default function NotFound() {
  return (
    <div className={style.container}>
      <div>Not Found!😥</div>
      {/* <div>Could not find requested resource</div> */}
      <Link href="/" className={style.link}>
        Return Home
      </Link>
    </div>
  )
}
