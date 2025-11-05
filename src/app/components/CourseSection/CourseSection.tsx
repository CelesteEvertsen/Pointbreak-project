import style from './CourseSection.module.css'
import Image from 'next/image'
import Link from 'next/link'

type CourseImage = {
  id: number
  alt?: string
  url: string
  width: number
  height: number
}
type CourseSectionProps = {
  slug: string | null | undefined
  CourseImage: CourseImage | null
  CoursePrice: string
  CourseName: string
  AmoutOfPeople: number
  Description: string
  Button: string
}
type CourseProps = {
  data: CourseSectionProps[]
}

export default function CourseSection({ data }: CourseProps) {
  return (
    <div className={style.container}>
      <section className={style.card}>
        {data.map((info) => (
          <section key={info.Description}>
            <div className={style.imageWrapper}>
              <Image
                src={info.CourseImage?.url || '/fallback.jpg'}
                alt={info.CourseImage?.alt || info.CourseName}
                width={600}
                height={600}
              />
            </div>

            <div className={style.content}>
              <div className={style.courseDescription}>
                <p>
                 Kurs: {info.CourseName} - Pris: {info.CoursePrice} - Personer: {info.AmoutOfPeople}
                </p>
              </div>

              <p className={style.description}>{info.Description}</p>
              <Link href={`course/${info.slug}`}>
                <button type="button" className={style.button}>
                  {info.Button}
                </button>
              </Link>
            </div>
          </section>
        ))}
      </section>
    </div>
  )
}
