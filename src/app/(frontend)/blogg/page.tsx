import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link';

export default async function BlogPage() {
  const payload = await getPayload({ config })
  const queryResults = await payload.find({
    collection: 'posts',
  })
  const posts = queryResults.docs;
  return (
    <main>
      <Link href="/">Back home</Link>
      <ul>
        {posts.map(post =>(
          <li key={post.id}>
            <Link href={`blogg/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      {/* <pre>{JSON.stringify(queryResults, null,2)}</pre> */}
    </main>
  )
}
