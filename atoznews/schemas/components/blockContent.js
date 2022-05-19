import React from 'react'

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Superscript',
            value: 'sup',
            blockEditor: {
              icon: () => <div>↑</div>,
              render: ({ children }) => (
                <span>
                  <sup>{children}</sup>
                </span>
              ),
            },
          },
          {
            title: 'Subscript',
            value: 'sub',
            blockEditor: {
              icon: () => <div>↓</div>,
              render: ({ children }) => (
                <span>
                  <sub>{children}</sub>
                </span>
              ),
            },
          },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
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
              {
                title: 'Open in new window',
                name: 'blank',
                type: 'boolean',
                default: 'true',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          title: 'Caption',
          name: 'caption',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          validation: (Rule) =>
            Rule.error('This field is required.').required(),
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
}
