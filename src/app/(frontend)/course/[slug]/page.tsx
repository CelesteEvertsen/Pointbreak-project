import { getMainslug } from '@/app/data/Main'
import { RichText } from '@payloadcms/richtext-lexical/react'
import style from './CourseSlug.module.css'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Params = {
  params: { slug: string }
}

export default async function CoursePage({ params }: Params) {
  const { slug } = params
  const home = await getMainslug(slug)
  if (!home) {
    return notFound()
  }

  const course = home.block.find((block) => block.slug === slug)
  if (!course) return notFound()

    /* Denne typeGarden, fjerne feil meldingen som typescript klager på, 
    at post er undefined. Grunnen til det er da  jeg "garanterer" 
    at post finnes hvis koden fortsetter etter if-bl0kken
Hei type, post har garanter verdi hvis koden fortsetter forbi her */
  return (
    <article className={style.container}>
      <Link className={style.header} href={'/course'}>
        <header>
          <h1>{course.CourseName}</h1>
        </header>
      </Link>

      <div className={style.main}>
        <p>Krus: {course.CourseName}</p>
        <p>Pris: {course.CoursePrice}</p>
        <p>Antall Deltakere: {course.AmoutOfPeople}</p>
      </div>
      <div className={style.content}>
        <RichText data={course.content} />
      </div>
    </article>
  )
}
