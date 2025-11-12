import {getPayload} from 'payload'
import config from '@payload-config'
import type {Post} from '@/payload-types'

export async function getPosts(): Promise<Post[]>{
    const payload = await getPayload({config})
    const queryResults = await payload.find({
        collection: 'posts',
    })
    return queryResults.docs
}

export async function getPostSlug(slug:string):Promise<Post | undefined>{
     const payload = await getPayload({config})
    const queryResults = await payload.find({
        collection: 'posts',
        where:{
            slug:{
                equals:slug,
            }
        }
    })
    return queryResults.docs[0]
}