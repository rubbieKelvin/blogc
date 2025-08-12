import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'card',
  title: 'Gallary card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
