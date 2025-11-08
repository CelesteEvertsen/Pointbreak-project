import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import style from './PostSlug.module.css'
import Link from 'next/link'

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
  const createDate = new Date(post.createdAt)
  const createString = Intl.DateTimeFormat('no').format(createDate)

  return (
    <div className={style.container}>
      <Link className={style.header} href="/">
        <header >
          <h1>{post.title}</h1>
        </header>
      </Link>
      <main className={style.main}>
        <time>Publisert: {createString}</time>
        <RichText data={post.content} />
      </main>
    </div>
  )
}
