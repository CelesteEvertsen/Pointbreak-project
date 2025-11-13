import {getPayload} from 'payload'
import config from '@payload-config'
import type {Main} from '@/payload-types'

export async function getMain(): Promise<Main[]>{
    const payload = await getPayload({config})
    const queryResults = await payload.find({
        collection: 'main',
    })
    return queryResults.docs
}

export async function getMainslug(slug:string):Promise<Main | undefined>{
   const payload = await getPayload({ config })

  const queryResults = await payload.find({
    collection: 'main',
    where: {
      'block.slug': {
        equals: slug,
      },
    },
  })
  return queryResults.docs[0]
}