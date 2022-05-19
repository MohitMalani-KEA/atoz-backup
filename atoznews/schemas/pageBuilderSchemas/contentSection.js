export default {
  name: 'contentSection',
  title: 'Content Section',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Title to appear in section block',
    },
    {
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string',
      description: 'Subtitle for section block.',
    },
    {
      name: 'sectionImage',
      title: 'Section Image',
      type: 'image',
      description: 'Image to be featured in section block.',
    },
    {
      name: 'sectionContent',
      title: 'Section Content',
      type: 'blockContent',
      description: 'Body copy for section block.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'ctaButton',
    },
  ],
}
