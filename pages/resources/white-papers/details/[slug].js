import Head from 'next/head'
import { sanityClient, PortableText } from '../../../../src/sanity'
import { whitePaperSlugsQuery, whitePaperQuery } from '../../../../src/queries'
import ParallaxWindow from '../../../../components/layout/ParallaxWindow'
import ContentBlock from '../../../../components/layout/ContentBlock'
import Border from '../../../../components/layout/Border'
import { Typography, styled, Button, Paper } from '@mui/material'
import Parallax from '../../../../components/util/Parallax'
import MainWrap from '../../../../components/layout/MainWrap'
import bgImage from '../../../../public/backgrounds/print8-bg.svg'
import WhitePaperGate from '../../../../components/layout/popups/WhitePaperGate'
import { useState } from 'react'
import theme, { ColorStripe } from '../../../../src/theme'
import { Box } from '@mui/system'

const ctaBg = '/backgrounds/print6-bg.svg'

const WhitePaperLandingPage = ({ landingPageData }) => {
  const [gate, setGate] = useState(false)

  const CtaBox = styled('div')({
    minHeight: 300,
    position: 'relative',
    overflow: 'hidden',
    marginTop: 24,
    background: `url(${ctaBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    '& .wrap': {
      position: 'absolute',
      width: '100%',
    },
  })

  if (landingPageData) {
    const { title, category, updateContent, assetUrl } = landingPageData
    const { body, preview } = updateContent

    return (
      <>
        <Head>
          <title>ATOZ | {title || 'White Paper'}</title>
          <meta name='description' content={preview[0].children[0].text} />
        </Head>
        <WhitePaperGate trigger={gate} setTrigger={setGate} asset={assetUrl} />

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
            <CtaBox bg={ctaBg}>
              <div className='wrap'>
                <TransparentBG>
                  <ColorStripe />
                  <Box>
                    <Typography variant='h4' sx={{ color: 'white' }}>
                      Ready To Learn More?
                    </Typography>
                  </Box>
                  <Box>
                    <Button variant='contained' onClick={() => setGate(true)}>
                      Download White Paper
                    </Button>
                  </Box>
                  <ColorStripe />
                </TransparentBG>
              </div>
            </CtaBox>
          </ContentBlock>
          <Border />
          <ParallaxWindow location='bottom' />
        </MainWrap>
      </>
    )
  }
  return null
}

export default WhitePaperLandingPage

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
const TransparentBG = styled(Paper)({
  minHeight: 300,
  width: '100%',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'rgba( 0, 0, 0, 0.75 )',
})

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(whitePaperSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const landingPageData = await sanityClient.fetch(whitePaperQuery, {
    slug: params.slug,
  })

  return {
    props: {
      landingPageData,
    },
  }
}
