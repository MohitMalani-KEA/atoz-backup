export default {
  name: 'ctaButton',
  title: 'CTA Button',
  type: 'object',
  fields: [
    {
      name: 'ctaUrl',
      title: 'CTA URL',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'URL',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
          hidden: ({ parent, value }) => !value && parent?.upload,
        },
        {
          name: 'upload',
          type: 'file',
          title: 'File Upload',
          hidden: ({ parent, value }) => !value && parent?.url,
        },
      ],
      description:
        'Either an URL or file to be placed within CTA button below content. If left blank, a button will not appear.',
    },
    {
      name: 'ctaBtnText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Button text for CTA.',
    },
  ],
}
