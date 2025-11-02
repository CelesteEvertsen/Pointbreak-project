import type { Main } from '@/payload-types'
import Image from 'next/image'
import  style  from './Main.module.css'
type HomeData = {
  id: number
  headerImage: {
    url: string
    alt?: string
    width: number
    height: number
  }
  headline: string
  subHeadline?: string
  overlayTekstPosisjon: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  overlayTekstFarge: string
  underOverskrift: string
  width: number
  height: number
}

type Props = {
  data: HomeData[]
}
/*Med egen definer typescript så blir feil meldigen borte på alt og URL. men den dukker opp på page.tsx */
export default async function Main({ data }: Props) {
  return (
    <main className={style.main}>
      {data.map((data) => (
        <article key={data.id} className={`${style.article} ${style[data.overlayTekstPosisjon]} `}>
            <div className={style.imageContainer}>
          <Image
            src={data.headerImage.url}
            alt={data.headerImage.alt || ' '}
            height={600}
            width={600}
            className={style.image}
          />
          <h1>{data.headline}</h1>
          <h2>{data.underOverskrift}</h2>
          </div>
        </article>
      ))}
    </main>
  )
}
