import Head from 'next/head'
import ParallaxWindow from '../../components/layout/ParallaxWindow'
import ContentBlock from '../../components/layout/ContentBlock'
import Border from '../../components/layout/Border'
import { Typography } from '@mui/material'
import MainWrap from '../../components/layout/MainWrap'
import { sanityClient, urlFor, PortableText } from '../../src/sanity'
import { leadershipBiosQuery, ourScientistsQuery } from '../../src/queries'
import bgImage from '../../public/backgrounds/print1-bg.svg'
import Parallax from '../../components/util/Parallax'
import dynamic from 'next/dynamic'
import { Loader } from '../../components/util/SkeletonLoader'

const DynamicScientists = dynamic(
  () => import('../../components/layout/ourScientists/GetScientists'),
  {
    ssr: true,
    loading: Loader,
  }
)

const OurScientists = ({ pageData, leadershipData }) => {
  const description = `Combined, our scientists bring nearly 100 years of experience to our
  labs, providing customers with an unparalleled testing experience
  and customer service.`

  if (pageData) {
    const { openContentSection } = pageData

    return (
      <>
        <Head>
          <title>ATOZ | Our Scientists</title>
          <meta name='description' content={description} />
        </Head>

        <Parallax image={bgImage} />

        <MainWrap>
          <ParallaxWindow location='top' />
          <Border />
          {openContentSection && (
            <ContentBlock
              image={urlFor(openContentSection.sectionImage).url()}
              title={openContentSection.sectionTitle}
              subtitle={openContentSection.sectionSubtitle}
              action={
                openContentSection.ctaButton
                  ? openContentSection.ctaButton.ctaBtnText
                    ? openContentSection.ctaButton.ctaBtnText
                    : null
                  : null
              }
              url={
                openContentSection.ctaButton
                  ? openContentSection.ctaButton.ctaUrl.url
                    ? openContentSection.ctaButton.ctaUrl.url
                    : openContentSection.ctaAssetUrl
                  : null
              }>
              <Typography
                component={PortableText}
                blocks={openContentSection.sectionContent}
                paragraph
              />
            </ContentBlock>
          )}
          <Border />
          <ParallaxWindow location='middle' />
          <Border />
          <DynamicScientists leadershipData={leadershipData} />
          <Border />
          <ParallaxWindow location='bottom' />
        </MainWrap>
      </>
    )
  }
  return null
}

export default OurScientists

export const getStaticProps = async () => {
  const pageData = await sanityClient.fetch(ourScientistsQuery)
  const leadershipData = await sanityClient.fetch(leadershipBiosQuery)
  return {
    props: {
      pageData,
      leadershipData,
    },
  }
}
