import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";

type PageParams = {
  params: Promise<{postSlug: string}>
};

export default async function BlogPostPage({ params }: PageParams) {
  const { postSlug } = await params;
  const payload = await getPayload({ config });

  const queryResults = await payload.find({
    collection: "posts",
    where: {
      slug: {
        equals: postSlug
      }
    }
  });

  const post = queryResults.docs[0];
  const createDate = new Date (post.createdAt)
  const createString = Intl.DateTimeFormat("no").format(createDate)

  return (
    <main>
      <h1>{post.title}</h1>
      <time>{createString}</time>
      <RichText data={post.content} />
    </main>
  );
}