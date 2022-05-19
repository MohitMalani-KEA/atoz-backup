export default {
  name: 'aboutCard',
  title: 'Staff Bios',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: `The name to be displayed for the individual.`,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      description: 'The job title to be displayed for the individual.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'portrait',
      type: 'image',
      title: 'Portrait Image',
      description: `Add an image to display in the individual's about card. Standard portrait dimensions will work best.`,
    },
    {
      name: 'bioDetails',
      title: 'About Details',
      type: 'blockContent',
      description:
        'Add all details and description content here. All formatting, hyperlinks, etc. will be displayed on the site as seen here.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'displayPosition',
      title: 'Display Position',
      type: 'number',
      description:
        'IMPORTANT: This number is used to order all about cards displayed on the website. Priority descends from the number 1 (meaning the card with the number 1 will be shown first and so on).',
      validation: (Rule) => Rule.required().min(1),
    },
  ],
}
