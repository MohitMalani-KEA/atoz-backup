import ParallaxWindow from '../../components/layout/ParallaxWindow'
import Border from '../../components/layout/Border'
import ContentBlock from '../../components/layout/ContentBlock'
import Head from 'next/head'
import { Typography } from '@mui/material'
import MainWrap from '../../components/layout/MainWrap'
import bgImage from '../../public/backgrounds/print4-bg.svg'
import Parallax from '../../components/util/Parallax'
import ContentWrap from '../../components/layout/ContentWrap'
import { Loader } from '../../components/util/SkeletonLoader'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import dynamic from 'next/dynamic'

const DynamicContact = dynamic(
  () => import('../../components/layout/contact/ContactForm'),
  {
    ssr: true,
    loading: Loader,
  }
)

const Connect = () => {
  const description = `If you’re ready to engage with our business development team, please
  fill out the form on this page. We will get back to you to learn
  more about your goals and needs, provide pricing and deliver
  information on how to get started with your first test.`

  return (
    <>
      <Head>
        <title>ATOZ | Contact Us</title>
        <meta name='description' content={description} />
      </Head>

      <Parallax image={bgImage} />
      <MainWrap>
        <ParallaxWindow location='top' />
        <Border />
        <ContentBlock title='Reach Out' subtitle='We want to hear from you'>
          <Typography paragraph>
            {`If you’re ready to engage with our business development team, please
            fill out the form on this page. We will get back to you to learn
            more about your goals and needs, provide pricing and deliver
            information on how to get started with your first test.`}
          </Typography>
          <Typography paragraph>
            {`We encourage you to take your time and let us know specifically what
            you would like to know. This will help us prepare and put you in
            touch with the right person. Please don’t use this form for support.
            If you need support please communicate through the customer portal. You can also call the office directly.`}
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LocalPhoneIcon sx={{ mr: 1, fontSize: '1.5rem' }} />
            <Typography>
              <b>(978) 703-8700</b>
            </Typography>
          </div>
        </ContentBlock>
        <Border />
        <ParallaxWindow location='middle' />
        <Border />
        <ContentWrap>
          <Typography variant='h4' color='secondary'>
            Contact details
          </Typography>
          <DynamicContact />
        </ContentWrap>
        <Border />
        <ParallaxWindow location='bottom' />
      </MainWrap>
    </>
  )
}

export default Connect
