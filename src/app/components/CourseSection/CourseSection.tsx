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
  slug: string |null | undefined
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

export default function CourseSection ({data}: CourseProps){
    return(
         <div className={style.container}>
      <section className={style.card}>
        {data.map((info) => (
          <section key={info.Description}>
            <div className={style.imageWrapper}>
              <Image
                src={info.CourseImage?.url || '/fallback.jpg'}
                alt={info.CourseImage?.alt || info.CourseName}
                width={200}
                height={200}
              />
            </div>

            <div className={style.content}>
              <h2 className={style.name}>{info.CourseName}</h2>
              <p className={style.price}>{info.CoursePrice}</p>
              <p className={style.people}> {info.AmoutOfPeople} personer</p>
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