import RenderBlocks from '@/renderBlocks/RendeBlocks'
import style from './CoursePage.module.css'
import Link from 'next/link'
import{getMain} from '@/app/data/Main'

export default async function AllCourses() {
  const main = await getMain()
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
