export default {
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'The frequently asked question to be answered below.',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'blockContent',
      description: 'The answer to the question posed above.',
    },
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description:
        'IMPORTANT: ATOZ FAQs are grouped by these categories. Contact your web developer to request additional categories to choose from if needed.',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'About ATOZ', value: 'About ATOZ' },
          { title: 'Our Testing Services', value: 'Our Testing Services' },
        ],
      },
    },
  ],
}
