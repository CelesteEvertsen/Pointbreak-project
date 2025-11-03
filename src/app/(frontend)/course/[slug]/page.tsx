import { getPayload } from 'payload'
import config from '@payload-config'
import RenderBlocks from '@/renderBlocks/RendeBlocks'

type Params = {
  params: { slug: string }
}

export default async function Page({ params }: Params) {
  const { slug } = params
  const payload = await getPayload({ config })

  const queryResults = await payload.find({
    collection: 'main',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const home = queryResults.docs[0]
    if (!home) {
    return <h1>Fant ikke siden</h1>
  }

  return (
    <article>
      <h1>Dette er Block slug</h1>
      <RenderBlocks blocks={home.block} />
    </article>
  )
}