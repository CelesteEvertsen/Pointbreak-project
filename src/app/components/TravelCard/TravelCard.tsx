import type { Post } from '@/payload-types'
import Image from 'next/image'
import style from './TravelCard.module.css'
import Link from 'next/link'

type Props = {
  data: Post[]
}

export default function TravelCard({ data }: Props) {
  return (
    <div className={style.travelCardContainer}>
      {data.map((post) => {
        const cardImage =
          typeof post.image === 'object'
            ? {
                url: post.image.url || '',
                alt: post.image.alt || '',
              }
            : null

        return (
          <article key={post.id} className={style.card}>
              {cardImage && (
              <Image
                src={cardImage.url}
                alt={cardImage.alt || `Bilde for posten: ${post.title}`}
                height={300}
                width={400}
                className={style.image}
              />
            )}
            <div className={style.content}>
              <h3 className={style.title}>{post.title}</h3>
              <p>{post.Description}</p>
              <Link className={style.button} href={`/blogg/${post.slug}`}>
                Les mer
              </Link>
            </div>

          {/*   {cardImage && (
              <Image
                src={cardImage.url}
                alt={cardImage.alt || `Bilde for posten: ${post.title}`}
                height={300}
                width={400}
                className={style.image}
              />
            )} */}
          </article>
        )
      })}
    </div>
  )
}
