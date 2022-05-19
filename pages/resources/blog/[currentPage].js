import Head from 'next/head'
import { sanityClient } from '../../../src/sanity'
import { newsQueryBlog } from '../../../src/queries'
import { Typography } from '@mui/material'
import ParallaxWindow from '../../../components/layout/ParallaxWindow'
import Border from '../../../components/layout/Border'
import ContentBlock from '../../../components/layout/ContentBlock'
import Parallax from '../../../components/util/Parallax'
import MainWrap from '../../../components/layout/MainWrap'
import bgImage from '../../../public/backgrounds/print3-bg.svg'
import ContentWrap from '../../../components/layout/ContentWrap'
import dynamic from 'next/dynamic'
import { Loader } from '../../../components/util/SkeletonLoader'

const DynamicResources = dynamic(
  () => import('../../../components/layout/resources/ResourceContainer'),
  {
    ssr: true,
    loading: Loader,
  }
)

const Blog = ({ currentPosts, pageCount }) => {
  const description = `A more intimate look into the ATOZ Laboratory. Here's what we're working on right now.`

  return (
    <>
      <Head>
        <title>ATOZ | Blog</title>
        <meta name='description' content={description} />
      </Head>
      <Parallax image={bgImage} />

      <MainWrap>
        <ParallaxWindow location='top' />
        <Border />

        <ContentBlock
          title='ATOZ Blog'
          subtitle={`A behind-the-scenes peek into the ATOZ Laboratory`}>
          {(currentPosts?.length === 0 || !currentPosts) && (
            <Typography variant='h4' color='secondary' sx={{ mt: 3, mb: 2 }}>
              {`Thanks for your interest, but we don't have anything to report just yet. 
              Check back soon for our latest developments.`}
            </Typography>
          )}
        </ContentBlock>
        <Border />

        {currentPosts?.length > 0 && (
          <>
            <ParallaxWindow location='middle' />
            <Border />

            <ContentWrap>
              <DynamicResources
                urlFilter='blog'
                currentPosts={currentPosts}
                pageCount={pageCount}
              />
            </ContentWrap>

            <Border />
            <ParallaxWindow location='bottom' />
          </>
        )}
      </MainWrap>
    </>
  )
}

export default Blog

export const getStaticPaths = async () => {
  const updates = await sanityClient.fetch(newsQueryBlog)
  const totalPosts = updates.length
  const pageCount = Math.ceil(totalPosts / 6)

  const paths = Array(pageCount)
    .fill('')
    .map((_, index) => {
      return { params: { currentPage: (index + 1).toString() } }
    })

  return {
    paths: paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const currentPage = params?.currentPage
  const currentPageNumber = +(currentPage || 1)

  const updates = await sanityClient.fetch(newsQueryBlog)

  const totalUpdates = updates.length

  const pageMin = (currentPageNumber - 1) * 6
  const pageMax = currentPageNumber * 6

  const currentPosts = updates.slice(pageMin, pageMax)

  const pageCount = Math.ceil(totalUpdates / 6 || 1)

  const notFound = currentPageNumber ? false : true

  return {
    props: {
      currentPosts,
      pageCount,
    },
    notFound,
  }
}
