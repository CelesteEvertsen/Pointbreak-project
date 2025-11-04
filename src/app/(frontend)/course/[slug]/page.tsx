import { getPayload } from 'payload'
import config from '@payload-config'
import {RichText} from '@payloadcms/richtext-lexical/react'
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
  /*Da vet vi at slug-feltene som brukes faktisk ligger inne i blokken, og ikke i selve main-collectionen — derfor var punktnotasjonen ("block.slug") nødvendig. */

  const home = queryResults.docs[0]
  if (!home) {
    return <h1>Fant ikke siden</h1>
  }

  const course = home.block.find((block )=> block.slug === slug)
  if(!course) return <h1>Fant ingen kurs</h1>

  return (
    <article>
      <h1>Dette er Block slug</h1>
      <h1>{course.CourseName}</h1>
      <p>{course.CoursePrice}</p>
      <p>{course.AmoutOfPeople}</p>
      <RichText data ={course.content}/>
      <Link href="/"/>
    </article>
  )
}
