import { getPayload } from 'payload'
import config from '@payload-config'
import TravelCard from '@/app/components/TravelCard/TravelCard'
import style from './BloggPage.module.css'
import Link from 'next/link'

export default async function BlogPage() {
  const payload = await getPayload({ config })
  const queryResults = await payload.find({
    collection: 'posts',
  })
  const post = queryResults.docs
  return (
    <div className={style.container}>
      <header>
        <Link className={style.header} href="/">
          <h1>BLOGG SIDE</h1>{' '}
        </Link>
      </header>
      <main className={style.main}>
        <TravelCard data={post} />
      </main>
    </div>
  )
}
