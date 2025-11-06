import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Main from "@/app/components/Main/Main"
import RenderBlocks from '@/renderBlocks/RendeBlocks'
import Footer from "@/app/components/Footer/Footer"
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
    <>
    <Main data={main}/>
    <RenderBlocks blocks={main[0]?.block}/>
    <TravelCard data={post}/>
    <Footer/>
   {/*  <pre>{JSON.stringify(queryResults, null,2)}</pre>  */}
     
    </>
  )
}
