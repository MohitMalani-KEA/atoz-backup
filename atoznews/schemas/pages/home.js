export default {
  name: 'home',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Title for hero section.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'Subtitle for the hero section.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subcaption',
          title: 'Subcaption',
          type: 'string',
          description: 'Subcaption for the hero section.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'ctaButton',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'sectionBuilder',
      type: 'array',
      title: 'Section Builder',
      description: 'Add as many section blocks as needed.',
      of: [{ type: 'contentSection' }],
    },
  ],
}
