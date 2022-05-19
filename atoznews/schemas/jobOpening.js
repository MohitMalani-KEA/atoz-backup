export default {
  name: 'jobOpening',
  title: 'Career Opportunities',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'The title for the available career opportunity.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descriptionBlock',
      type: 'array',
      title: 'Job Description Builder',
      description:
        'Use this tool to add as many sections and specifications as needed. I.e., Responsibilities, Job Requirements, Desired Characteristics, etc.',
      of: [{ type: 'jobDescriptor' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contactEmail',
      title: 'Contact Email(s)',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'Enter as many default email recipients as needed. Be careful of spelling.',
      validation: (Rule) => Rule.required(),
    },
  ],
}
