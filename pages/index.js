import Head from 'next/head'
import Hero from '../components/layout/Hero'
import ContentBlock from '../components/layout/ContentBlock'
import Border from '../components/layout/Border'
import ParallaxWindow from '../components/layout/ParallaxWindow'
import { Typography } from '@mui/material'
import Parallax from '../components/util/Parallax'
import MainWrap from '../components/layout/MainWrap'
import heroImg from '../public/backgrounds/hero-bg.svg'
import { sanityClient, urlFor, PortableText } from '../src/sanity'
import { homeQuery } from '../src/queries'

const Home = ({ pageData }) => {
  const description = `ATOZ provides exceptional cannabis testing services to
  organizations and individuals in the medical and adult-use cannabis
  industry.`

  if (pageData) {
    const { hero, sectionBuilder } = pageData
    const { title, subtitle, subcaption } = hero

    return (
      <>
        <Head>
          <title>ATOZ Laboratories | Home</title>
          <meta name='description' content={description} />
        </Head>

        <Parallax image={heroImg} />

        <MainWrap>
          
          {hero && (
            <Hero
              title={title}
              subtitle={subtitle}
              action={
                hero.ctaButton
                  ? hero.ctaButton.ctaBtnText
                    ? hero.ctaButton.ctaBtnText
                    : null
                  : null
              }
              url={
                hero.ctaButton
                  ? hero.ctaButton.ctaUrl
                    ? hero.ctaButton.ctaUrl.url
                    : hero.ctaAssetUrl
                  : null
              }>
              <Typography>{subcaption}</Typography>
            </Hero>
          )}

          {sectionBuilder && (
            <>
              <Border />
              <a className='anchor' id='our-lab-tech' />
              {sectionBuilder.map((contentSection, i) => {
                const {
                  sectionTitle,
                  sectionSubtitle,
                  ctaButton,
                  sectionContent,
                  sectionImage,
                } = contentSection
                return (
                  <ContentBlock
                    key={i}
                    direction={i % 2 == 0 ? 'row' : 'row-reverse'}
                    image={urlFor(sectionImage).url()}
                    title={sectionTitle}
                    subtitle={sectionSubtitle}
                    action={
                      ctaButton
                        ? ctaButton.ctaBtnText
                          ? ctaButton.ctaBtnText
                          : null
                        : null
                    }
                    url={
                      ctaButton
                        ? ctaButton.ctaUrl
                          ? ctaButton.ctaUrl.url
                          : ctaButton.ctaAssetUrl
                        : null
                    }>
                    <Typography
                      component={PortableText}
                      blocks={sectionContent}
                      paragraph
                    />
                  </ContentBlock>
                )
              })}
              <Border />
            </>
          )}

          <ParallaxWindow location='bottom' />
        </MainWrap>
      </>
    )
  }
  return null
}

export default Home

export const getStaticProps = async () => {
  const pageData = await sanityClient.fetch(homeQuery)
  return {
    props: {
      pageData,
    },
  }
}
