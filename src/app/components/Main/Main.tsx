import type { Main } from '@/payload-types'
import Image from 'next/image'
import  style  from './Main.module.css'

type Props = {
  data: Main[]
}
export default async function Main({ data }: Props) {
  return (
    <main className={style.main}>
      {data.map((data) => (
        <article key={data.id} className={`${style.article} `}>
            <div className={style.imageContainer}>
          <Image
            src={data.headerImage.url}
            alt={data.headerImage.alt || ' '}
            height={600}
            width={600}
            className={style.image}
          />
          <div className={style.overlay}>
          <h1>{data.headline}</h1>
         { data.underOverskrift && <h2>{data.underOverskrift}</h2>}
          </div>
          <h1>block</h1>
          </div>
        </article>
      ))}
    </main>
  )
}
