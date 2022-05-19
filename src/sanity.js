import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity'

const config = {
  dataset: process.env.dataset,
  projectId: process.env.project_id,
  useCdn: process.env.use_cdn,
  apiVersion: process.env.api_version,
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the live preview subsscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    types: {
      image: (props) => (
        <figure>
          <div className='FigWrapper'>
            <img
              src={urlFor(props.node.asset).url()}
              alt={props.node.alt}></img>
            <p>{props.node.caption}</p>
          </div>
        </figure>
      ),
    },
    marks: {
      link: ({ children, mark }) => {
        if (mark.blank) {
          if (mark.upload) {
            const ref = mark.upload.asset._ref
            const endpoint = ref.slice(5).split('-').join('.')
            const href = `https://cdn.sanity.io/files/${process.env.project_id}/production/${endpoint}`
            return (
              <a href={href} target='_blank' rel='noreferrer'>
                {children}
              </a>
            )
          }
          return (
            <a href={mark.url} target='_blank' rel='noreferrer'>
              {children}
            </a>
          )
        }
        return <a href={mark.url}>{children}</a>
      },
    },
  },
})

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
