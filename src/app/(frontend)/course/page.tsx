import RenderBlocks from '@/renderBlocks/RendeBlocks'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function AllCourses(){
      const payloadConfig = await config
      const payload = await getPayload({ config: payloadConfig })
     
      const queryResults = await payload.find({
        collection: 'main', 
      })
      const main = queryResults.docs;
    return(
<>
<h1>Her finner du alle kursene vi har å tilby</h1>
 <RenderBlocks blocks={main[0]?.block}/>
</>
    )
}