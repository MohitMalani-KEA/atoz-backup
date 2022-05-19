import Head from 'next/head'
import { sanityClient, PortableText } from '../../../src/sanity'
import { postSlugsQuery, postQuery } from '../../../src/queries'
import ParallaxWindow from '../../../components/layout/ParallaxWindow'
import ContentBlock from '../../../components/layout/ContentBlock'
import Border from '../../../components/layout/Border'
import { Typography, styled } from '@mui/material'
import Parallax from '../../../components/util/Parallax'
import MainWrap from '../../../components/layout/MainWrap'
import theme from '../../../src/theme'
import bgImage from '../../../public/backgrounds/print8-bg.svg'
import { Box } from '@mui/system'
import GetMoreContent from '../../../components/layout/resources/GetMoreContent'

const Post = ({ post }) => {
  if (post) {
    const { title, category, updateContent, nextPost, previousPost } = post
    const { body, preview } = updateContent

    return (
      <>
        <Head>
          <title>ATOZ | {title || 'Update'}</title>
          <meta name='description' content={preview[0].children[0].text} />
        </Head>

        <Parallax image={bgImage} />

        <MainWrap>
          <ParallaxWindow location='top' />
          <Border />
          <ContentBlock title={title} subtitle={category}>
            <ContentWrap>
              {body.map((p, index) => {
                return (
                  <Typography
                    key={index}
                    component={PortableText}
                    blocks={p}
                    paragraph
                  />
                )
              })}
            </ContentWrap>

            <Box mt={2}>
              <GetMoreContent nextPost={nextPost} previousPost={previousPost} />
            </Box>
          </ContentBlock>
          <Border />
          <ParallaxWindow location='bottom' />
        </MainWrap>
      </>
    )
  }
  return null
}

export default Post

const ContentWrap = styled('div')({
  '& p': {
    fontSize: 16,
  },
  '& a': {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await sanityClient.fetch(postQuery, { slug: params.slug })

  return {
    props: {
      post,
    },
  }
}
