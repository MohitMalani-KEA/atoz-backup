const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      {
        source: '/resources/media-coverage',
        destination: '/resources/media-coverage/1',
        permanent: true,
      },
      {
        source: '/resources/press-releases',
        destination: '/resources/press-releases/1',
        permanent: true,
      },
      {
        source: '/resources/blog',
        destination: '/resources/blog/1',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  env: {
    dataset: 'production',
    project_id: 'wxu9irmt',
    use_cdn: 'true',
    api_version: '2021-06-17',
    ga4: 'G-2SSK0BK8G9',
    mailchimp_action: 'https://atoz-labs.us20.list-manage.com/subscribe/post',
    name_u: '0898c2329524cfd4641dd32b0',
    name_id: '20190fac3c',
  },
})
