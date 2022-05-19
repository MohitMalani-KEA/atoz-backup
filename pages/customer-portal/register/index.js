import Head from 'next/head'
import ParallaxWindow from '../../../components/layout/ParallaxWindow'
import ContentBlock from '../../../components/layout/ContentBlock'
import { Typography } from '@mui/material'
import Border from '../../../components/layout/Border'
import Parallax from '../../../components/util/Parallax'
import MainWrap from '../../../components/layout/MainWrap'
import bgImage from '../../../public/backgrounds/print1-bg.svg'
import dynamic from 'next/dynamic'
import { Loader } from '../../../components/util/SkeletonLoader'
import contentImg1 from '../../../public/customer-portal/sign-up.webp'

const DynamicCustomerForm = dynamic(
  () => import('../../../components/layout/customerPortal/NewCustomerForm'),
  {
    ssr: true,
    loading: Loader,
  }
)

const CustomerRegister = () => {
  const description = `Before we can accept your order, we need some more information from you. Please fill out the form below to submit your account information
  for processing and approval.`

  return (
    <>
      <Head>
        <title>ATOZ | Register </title>
        <meta name='description' content={description} />
      </Head>

      <Parallax image={bgImage} />

      <MainWrap>
        <ParallaxWindow location='top' />

        <Border />
        <ContentBlock
          image={contentImg1}
          title='Create An Account'
          subtitle='Before we can accept your order, we need some more information from you'>
          <Typography>
            Please fill out the form below to submit your account information
            for processing and approval.
          </Typography>
        </ContentBlock>

        <Border />
        <ParallaxWindow location='middle' />
        <Border />

        <ContentBlock>
          <DynamicCustomerForm />
        </ContentBlock>

        <Border />
        <ParallaxWindow location='bottom' />
      </MainWrap>
    </>
  )
}

export default CustomerRegister
