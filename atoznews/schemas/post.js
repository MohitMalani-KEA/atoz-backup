export default {
  name: 'post',
  title: 'Resources',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This will be displayed as an H2 at the head of the page.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Update Type',
      name: 'category',
      type: 'string',
      description:
        'Category types are processed different and allow for different input fields. Choose the category that best fits your document type.',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Press Release', value: 'Press Release' },
          { title: 'Media Coverage', value: 'Media Coverage' },
          { title: 'Blog', value: 'Blog' },
          { title: 'White Paper', value: 'White Paper' },
        ],
      },
    },
    {
      title: 'Update Content',
      name: 'updateContent',
      type: 'object',
      hidden: ({ document }) => !document?.category,
      fields: [
        {
          name: 'url',
          title: 'External URL',
          type: 'string',
          hidden: ({ document }) =>
            document?.updateContent.slug || document?.category == 'White Paper',
          description:
            'Only include an external URL if the blog post is hosted on another site. This URL will take priority over any body content provided below.',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          hidden: ({ document }) => document?.updateContent.url,
          description:
            'The Generate button will auto-populate using the title above. This is recommended. **Do not generate a slug if you are using an external link above.**',
          options: {
            source: 'title',
          },
        },
        {
          name: 'fileUpload',
          title: 'File Upload',
          type: 'file',
          hidden: ({ document }) => document?.category != 'White Paper',
          description:
            'Upload a PDF to be linked to when posting White Papers.',
        },
        {
          name: 'published',
          title: 'Publish Date',
          type: 'date',
          validation: (Rule) => Rule.required(),
          description:
            'The date this update will be published. IMPORTANT: Updates are ordered by most recent on the website, so use accurate dates to ensure proper chronology.',
        },
        {
          name: 'preview',
          title: 'Short Description',
          type: 'blockContent',
          description:
            'This is used for update previews and snippets. This can simply be the first paragraph of the update. Keep this on the shorter side.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'body',
          title: 'Body',
          type: 'blockContent',
          hidden: ({ document }) => document?.updateContent.url,
          description:
            'All update content goes here. All formatting, hyperlinks, etc. will appear on the site as you see them here. For the time being, keep image use minimal.',
        },
      ],
    },
  ],
}
