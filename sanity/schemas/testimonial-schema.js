const testimonialSchema = {
  name: 'testimonials',
  type: 'document',
  title: 'Testimonials',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'content',
      type: 'string',
      title: 'Content',
    },
    {
      name: 'userImage',
      type: 'image',
      title: 'User_Image',
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
      name: 'testPosition',
      type: 'string',
      title: 'Position',
    },
  ],
}

export default testimonialSchema
