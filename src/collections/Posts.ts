import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  labels:{
    singular: "Blogg",
    plural: "Blogger"
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },
    {
      type: 'text',
      name: 'slug',
      required: true,
    },
    {
      type: 'richText',
      name: 'content',
      required: true,
    },
    {
      type: 'upload',
      name: 'image',
      required: true,
      relationTo: "media"
    },
  ],
}
