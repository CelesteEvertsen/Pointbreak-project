import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Header from "@/app/components/Header/Header"
import RenderBlocks from '@/renderBlocks/RendeBlocks'
import TravelCard from '../components/TravelCard/TravelCard'
import './styles.css'


export default async function HomePage() {

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
 
  const queryResults = await payload.find({
    collection: 'main', 
  })
  const queryResultsPost = await payload.find({
    collection: 'posts', 
  })
  const main = queryResults.docs;
  const post = queryResultsPost.docs

  return (
    <div className='home'>
        <Header data={main}/>
        <main className='main'>
          <div className="course">
          <h2>Våre kurs</h2>
        <RenderBlocks blocks={main[0]?.block}/>
        </div>
        <div className='blog'>
        <h2>Les bloggen</h2>
        <TravelCard data={post}/>
        </div>
        </main>
      {/*  <pre>{JSON.stringify(queryResults, null,2)}</pre>  */}
        
    </div>
  )
}
