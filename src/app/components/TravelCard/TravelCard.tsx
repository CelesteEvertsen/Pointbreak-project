 import type { Post } from '@/payload-types' 
import Image from 'next/image'
import style from './TravelCard.module.css' 



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
                alt: post.image.alt || ''
              }
            : null

        return (
          <article key={post.id} className={style.card}>
             <div className={style.content}>
              <h3 className={style.title}>{post.title}</h3> 
            
            </div>
            <div className={style.imageWrapper}>
              {cardImage && (
                <Image
                  src={cardImage.url}
                  alt={cardImage.alt || `Bilde for posten: ${post.title}`}
                  height={300} 
                  width={400} 
                  className={style.image}
                 
                />
              )}
            </div>
           
          </article>
        )
      })}
    </div>
  )
}