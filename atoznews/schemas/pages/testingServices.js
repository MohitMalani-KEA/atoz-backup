export default {
  name: 'testingServices',
  title: 'Testing Services',
  type: 'document',
  fields: [
    {
      name: 'openContentSection',
      title: 'Open Content Section',
      type: 'contentSection',
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
