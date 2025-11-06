import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import style from './CourseSlug.module.css'
import Link from 'next/link'

type Params = {
  params: { slug: string }
}

export default async function Page({ params }: Params) {
  const { slug } = params
  const payload = await getPayload({ config })

  const queryResults = await payload.find({
    collection: 'main',
    where: {
      'block.slug': {
        equals: slug,
      },
    },
  })

  const home = queryResults.docs[0]
  if (!home) {
    return <h1>Fant ikke siden</h1>
  }

  const course = home.block.find((block) => block.slug === slug)
  if (!course) return <h1>Fant ingen kurs</h1>

  return (
    <article className={style.container}>
      <Link className={style.header} href={'/course'}>
        <header>
          <h1>{course.CourseName}</h1>
        </header>
      </Link>

      <div className={style.main}>
        <h2>Krus: {course.CourseName}</h2>
        <p>Pris: {course.CoursePrice}</p>
        <p>Antall Deltakere: {course.AmoutOfPeople}</p>
      </div>
      <div className={style.content}>
        <RichText data={course.content} />
      </div>
    </article>
  )
}
