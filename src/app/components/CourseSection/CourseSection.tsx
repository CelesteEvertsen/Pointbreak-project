import style from './CourseSection.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { IoPersonOutline } from "react-icons/io5";
import { TbMoneybag  } from "react-icons/tb";
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
              <h1>{info.CourseName}</h1>
              <div className={style.courseDescription}>
                <div>
                <IoPersonOutline/> {info.AmoutOfPeople}
                </div>
                <div>
                <TbMoneybag /> {info.CoursePrice}
                </div>
              </div>

              <p className={style.description}>{info.Description}</p>
              <Link className={style.button} href={`course/${info.slug}`}>
                {info.Button}
              </Link>
            </div>
          </section>
        ))}
      </section>
    </div>
  )
}
