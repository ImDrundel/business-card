import { useContext } from "react"
import Link from "next/link"
import { ThemeContext } from "@/app/[locale]/page"
import { useTranslation } from "react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y } from "swiper/modules"
import style from "./MyProjects.module.scss"
import { slidesInfo } from "./slidesInfo"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/a11y"

export default function MyProjectsTest() {
  const context = useContext(ThemeContext)
  const { theme } = context
  const { t } = useTranslation("MyProjects")
  const translatedItems = slidesInfo.map((info) => ({
    ...info,
    title: t(info.title),
    mainText: t(info.mainText),
    link: t(info.link),
  }))

  return (
    <div className={`${style.container} ${style[theme]}`}>
      <div className={style.title}>{t("block-title")}</div>
      <div>
        <Swiper
          grabCursor="true"
          className={style.swiperContainer}
          modules={[Navigation, A11y]}
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation
        >
          {translatedItems.map((info) => {
            return (
              <SwiperSlide
                className={`${style.slide} ${style[theme]}`}
                key={info.id}
              >
                <div className={style.slideTitle}>{info.title}</div>
                <div className={style.slideText}>{info.mainText}</div>
                <button className={style.button}>
                  <Link
                    className={`${style.linkButton} ${style[theme]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={info.link}
                  >
                    {t("slide-link")}
                  </Link>
                </button>
              </SwiperSlide>
            )
          })}
          <SwiperSlide className={`${style.slide} ${style[theme]}`}>
            <div className={style.slideSoon}>{t("slide-soon")}</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
