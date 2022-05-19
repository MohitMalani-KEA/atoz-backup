import Head from 'next/head'
import { Grid } from '@mui/material'
import ParallaxWindow from '../../components/layout/ParallaxWindow'
import Border from '../../components/layout/Border'
import ContentBlock from '../../components/layout/ContentBlock'
import Parallax from '../../components/util/Parallax'
import MainWrap from '../../components/layout/MainWrap'
import bgImage from '../../public/backgrounds/print6-bg.svg'
import ContentWrap from '../../components/layout/ContentWrap'
import { resourcesSublinkData } from '../../src/linkData'
import ActionCard from '../../components/layout/ActionCard'

const News = () => {
  const description = `ATOZ is always making press releases to keep the public in the know. Find out the latest ATOZ news here.`
  const HeaderData = (
    <Head>
      <title>ATOZ | Resources</title>
      <meta name='description' content={description} />
    </Head>
  )

  // if post data has at least one entry
  return (
    <>
      {HeaderData}
      <Parallax image={bgImage} />

      <MainWrap>
        <ParallaxWindow location='top' />
        <Border />

        <ContentBlock title='Resources' subtitle='Stay in the know with ATOZ' />

        <Border />
        <ParallaxWindow location='middle' />
        <Border />

        <ContentWrap>
          <Grid container spacing={3} >
            {resourcesSublinkData.map((link, i) => {
              return (
                <Grid item xs={12} sm={4} key={i}>
                  <ActionCard
                    caption={link.label}
                    internalUrl={link.url}
                    image={link.image}
                  />
                </Grid>
              )
            })}
          </Grid>
        </ContentWrap>

        <Border />
        <ParallaxWindow location='bottom' />
      </MainWrap>
    </>
  )
}

export default News
