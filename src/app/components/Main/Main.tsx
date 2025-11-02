/* import type { Main } from '@/payload-types'
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
           <pre>{JSON.stringify(data, null, 2)}</pre>
        </article>
      ))}
    </main>
  )
}
 */
import type { Main } from '@/payload-types'
import Image from 'next/image'
import style from './Main.module.css'

type Props = {
  data: Main[]
}

export default async function Main({ data }: Props) {
  return (
    <main className={style.main}>
      {data.map((item) => {
        // Sjekk om headerImage er et objekt eller string
        const headerImage =
          typeof item.headerImage === 'object'
            ? {
              url: item.headerImage.url || "",
            alt: item.headerImage.alt || ""}
            : null

        return (
          <article key={item.id} className={style.article}>
            <div className={style.imageContainer}>
              {headerImage && (
                <Image
                  src={headerImage.url}
                  alt={headerImage.alt || ''}
                  height={600}
                  width={600}
                  className={style.image}
                />
              )}
              <div className={style.overlay}>
                <h1>{item.headline}</h1>
                {item.underOverskrift && <h2>{item.underOverskrift}</h2>}
              </div>
            </div>
            <pre>{JSON.stringify(item, null, 2)}</pre>
          </article>
        )
      })}
    </main>
  )
}
