import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallarycard',
  title: 'Gallary card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
    }),
    defineField({
      name: 'priority',
      type: 'number',
      description: "0 (higher priority) - Inf (lesser prioirty)",
    }),
    defineField({
      name: 'reference',
      title: 'Reference',
      type: 'reference',
      to: [
        {
          title: 'Author',
          type: 'author',
        },
        {
          title: 'Post',
          type: 'post',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
