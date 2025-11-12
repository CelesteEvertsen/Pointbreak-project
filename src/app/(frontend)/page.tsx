import React from 'react'
import { getPosts } from '@/app/data/Posts'
import { getMain } from '@/app/data/Main'
import Header from '@/app/components/Header/Header'
import RenderBlocks from '@/renderBlocks/RendeBlocks'
import TravelCard from '../components/TravelCard/TravelCard'
import './styles.css'

export default async function HomePage() {
  const main = await getMain()
  const post = await getPosts()
  return (
    <div className="home">
      <Header data={main} />
      <main className="main">
        <div className="course">
          {main[0]?.block?.length > 0 && <h2>Våre kurs</h2>}
          <RenderBlocks blocks={main[0]?.block} />
        </div>
        <div className="blog">
          {post.length > 0 && <h2>Les bloggen</h2>}
          <TravelCard data={post} />
        </div>
      </main>
    </div>
  )
}
