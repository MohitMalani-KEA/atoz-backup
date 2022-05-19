import Head from 'next/head'
import { sanityClient } from '../../../src/sanity'
import { newsQueryMedia } from '../../../src/queries'
import { Typography } from '@mui/material'
import ParallaxWindow from '../../../components/layout/ParallaxWindow'
import Border from '../../../components/layout/Border'
import ContentBlock from '../../../components/layout/ContentBlock'
import Parallax from '../../../components/util/Parallax'
import MainWrap from '../../../components/layout/MainWrap'
import bgImage from '../../../public/backgrounds/print4-bg.svg'
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

const MediaCoverage = ({ currentPosts, pageCount }) => {
  const description = `See all of ATOZ Laboratories appearances in the media.`

  return (
    <>
      <Head>
        <title>ATOZ | Media Coverage</title>
        <meta name='description' content={description} />
      </Head>
      <Parallax image={bgImage} />

      <MainWrap>
        <ParallaxWindow location='top' />
        <Border />

        <ContentBlock
          title='Media Coverage'
          subtitle='ATOZ Labs in the spotlight'>
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
                urlFilter='media-coverage'
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

export default MediaCoverage

export const getStaticPaths = async () => {
  const updates = await sanityClient.fetch(newsQueryMedia)
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

  const updates = await sanityClient.fetch(newsQueryMedia)

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
