import { groq } from 'next-sanity'

export const jobOpeningsQuery = groq`
    *[_type == "jobOpening"]
`
export const faqsQuery = groq`
    *[_type == "faq"]
`
export const leadershipBiosQuery = groq`
    *[_type == "aboutCard"] | order(displayPosition asc)
`
// pages
export const homeQuery = groq`
    *[_type == "home"][0] {
        "hero": {...hero, "ctaAssetUrl": hero.ctaButton.ctaUrl.upload.asset->url},
        "sectionBuilder": sectionBuilder[]{
            ...,
            "ctaButton": {
                ...,
                "ctaAssetUrl": ctaButton.ctaUrl.upload.asset->url
            },
        }
    }
`
export const testingServicesQuery = groq`
    *[_type == "testingServices"][0]{
        "openContentSection": {...openContentSection, "ctaAssetUrl": openContentSection.ctaButton.ctaUrl.upload.asset->url},
        "sectionBuilder": sectionBuilder[]{
            ...,
            "ctaButton": {
                ...,
                "ctaAssetUrl": ctaButton.ctaUrl.upload.asset->url
            },
        }
    }
`
export const ourScientistsQuery = groq`
    *[_type == "ourScientists"][0]{
        "openContentSection": {...openContentSection, "ctaAssetUrl": openContentSection.ctaButton.ctaUrl.upload.asset->url},
        "sectionBuilder": sectionBuilder[]{
            ...,
            "ctaButton": {
                ...,
                "ctaAssetUrl": ctaButton.ctaUrl.upload.asset->url
            },
        }
    }
`
// resources
export const recentPostsQuery = groq`
    *[_type == "post"] | order(published desc)[0...3]
`
export const newsQuery = groq`
    *[_type == "post" && category != "White Paper"] | order(published desc)
`
export const newsQueryMedia = groq`
    *[_type == "post" && category == "Media Coverage"] | order(published desc)
`
export const newsQueryPress = groq`
    *[_type == "post" && category == "Press Release"] | order(published desc)
`
export const newsQueryBlog = groq`
    *[_type == "post" && category == "Blog"] | order(published desc)
`
export const resourcesWhitePaperQuery = groq`
    *[_type == "post" && category == "White Paper"] | order(published desc)
`
export const whitePaperSlugsQuery = groq`
    *[_type == "post" && category == "White Paper" && defined(updateContent.slug.current)][].updateContent.slug.current
`
export const whitePaperQuery = groq`
    *[_type == "post" && category == "White Paper" && updateContent.slug.current == $slug][0]{
        ...,
        "assetUrl": updateContent.fileUpload.asset->url
    }
`
export const postSlugsQuery = groq`
    *[_type == "post" && defined(updateContent.slug.current)][].updateContent.slug.current
`
export const postQuery = groq`
    *[_type == "post" && category != 'White Paper' && updateContent.slug.current == $slug][0]{
        ...,
        "previousPost": *[_type == "post" && category != 'White Paper' && ^._updatedAt > _updatedAt] | order(_updatedAt desc)[0]{
            title,
            "slug": updateContent.slug.current,
            "url": updateContent.url
        },
        "nextPost": *[_type == "post" && category != 'White Paper' && ^._updatedAt < _updatedAt] | order(_updatedAt asc)[0]{
            title,
            "slug": updateContent.slug.current,
            "url": updateContent.url
        },
    }
`
