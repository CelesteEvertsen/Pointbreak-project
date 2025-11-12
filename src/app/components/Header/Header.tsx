
import type { Main } from '@/payload-types'
import Image from 'next/image'
import style from './Header.module.css'


type Props = {
  data: Main[]
}

export default async function Header({ data }: Props) {
  return (
    <header className={style.header}>
      {data.map((item) => {
        // Sjekk om headerImage er et objekt eller string
        const headerImage =
          typeof item.headerImage === "object"
            ? {
              url: item.headerImage.url || "",
            alt: item.headerImage.alt || ""}
            : null
const textColor = item.overlayTekstFarge || 'white';

        return (
          <article key={item.id} className={style.article}>
            <div className={style.imageContainer}>
              {headerImage && (
                <Image
                  src={headerImage.url}
                  alt={headerImage.alt || ""}
                  height={600}
                  width={600}
                  className={style.image}
                />
              )}
              <div className={style.overlay} style={{"--textColor": textColor}  as React.CSSProperties}>
                <h1>{item.headline}</h1>
                {item.underOverskrift && <h2>{item.underOverskrift}</h2>}
              </div>
            </div>
          </article>
        )
      })}
    </header>
  )
}
