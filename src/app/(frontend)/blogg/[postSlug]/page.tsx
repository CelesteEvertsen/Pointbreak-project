import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import style from './PostSlug.module.css'
import Link from 'next/link'
import DateAndTime from '@/app/components/DateAndTime/DateAndTime'

type PageParams = {
  params: Promise<{ postSlug: string }>
}

export default async function BlogPostPage({ params }: PageParams) {
  const { postSlug } = await params
  const payload = await getPayload({ config })

  const queryResults = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: postSlug,
      },
    },
  })

  const post = queryResults.docs[0]

  return (
    <div className={style.container}>
      <Link className={style.header} href="/">
        <header >
          <h1>{post.title}</h1>
        </header>
      </Link>
      <main className={style.main}>
        <DateAndTime date={post.createdAt} prefix='Publisert'/>
        <RichText data={post.content} />
      </main>
    </div>
    
  )
}
