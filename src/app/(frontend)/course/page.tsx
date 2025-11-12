import RenderBlocks from '@/renderBlocks/RendeBlocks'
import { getPayload } from 'payload'
import config from '@/payload.config'
import style from './CoursePage.module.css'
import Link from 'next/link'

export default async function AllCourses() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const queryResults = await payload.find({
    collection: 'main',
  })
  const main = queryResults.docs
  return (
    <>
    <Link className={style.header} href="/">
      <header >
        <h1>Våre Kurs</h1>
      </header>
      </Link>
      <main className={style.main}>
        <RenderBlocks blocks={main[0]?.block} />
      </main>
    </>
  )
}
