export default {
  name: 'jobDescriptor',
  title: 'Job Description',
  type: 'object',
  fields: [
    {
      name: 'descriptionTitle',
      title: 'Section Title',
      description: `The title or category for this set of requirements. I.e., Job Requirements.`,
      type: 'string',
    },
    {
      name: 'sectionDetails',
      title: 'Section Details',
      description:
        'Detail all specifications related to the Section Title here. This will be displayed as-is on the website.',
      type: 'blockContent',
    },
  ],
}
