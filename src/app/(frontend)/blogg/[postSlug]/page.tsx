import { RichText } from '@payloadcms/richtext-lexical/react'
import style from './PostSlug.module.css'
import Link from 'next/link'
import DateAndTime from '@/app/components/DateAndTime/DateAndTime'
import {notFound} from 'next/navigation'
import {getPostSlug} from '@/app/data/Posts'

 type PageParams = {
  params: Promise<{ postSlug: string }>
}

export default async function BlogPostPage( { params }: PageParams ) {
  const { postSlug } = await params
 const post = await getPostSlug(postSlug)
if(!post){
  return notFound()
}/* Denne typeGarden, fjerne feil meldingen som typescript klager på, at post er undefined. Grunnen til det er da  jeg "garanterer" at post finnes hvis koden fortsetter etter if-bl0kken
Hei type, post har garanter verdi hvis koden fortsetter forbi her */
  return (
    <div className={style.container}>
      <Link className={style.header} href="/">
        <header >
          <h1>{post.title}</h1>
        </header>
      </Link>
      <main className={style.main}>
        <DateAndTime date={post.createdAt} prefix='Publisert'/>
       { post.content && <RichText data={post.content} />}
      </main>
    </div>
    
  )
}
