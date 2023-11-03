const postSchema = {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Content',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
        },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'slug',
      options: {source: 'title'},
    },
    {
      name: 'tag',
      type: 'string',
      title: 'Tag',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'authorImg',
      type: 'image',
      title: 'Author_Image',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
    },
  ],
}

export default postSchema
