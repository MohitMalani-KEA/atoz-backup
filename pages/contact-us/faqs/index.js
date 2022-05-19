import Head from 'next/head'
import ParallaxWindow from '../../../components/layout/ParallaxWindow'
import ContentBlock from '../../../components/layout/ContentBlock'
import Border from '../../../components/layout/Border'
import Parallax from '../../../components/util/Parallax'
import MainWrap from '../../../components/layout/MainWrap'
import dynamic from 'next/dynamic'
import { sanityClient } from '../../../src/sanity'
import { faqsQuery } from '../../../src/queries'
import bgImage from '../../../public/backgrounds/print3-bg.svg'
import ContentWrap from '../../../components/layout/ContentWrap'
import { Loader } from '../../../components/util/SkeletonLoader'

const DynamicFAQs = dynamic(
  () => import('../../../components/layout/faqs/GetFAQs'),
  {
    ssr: true,
    loading: Loader,
  }
)

const FAQs = ({ faqData, uniqueHeaders }) => {
  const description = `Learn more about ATOZ testing services, business processes, and more`
  return (
    <>
      <Head>
        <title>ATOZ | FAQs</title>
        <meta name='description' content={description} />
      </Head>

      <Parallax image={bgImage} />

      <MainWrap>
        <ParallaxWindow location='top' />
        <Border />
        <ContentBlock
          title='ATOZ FAQs'
          subtitle='Learn more about ATOZ testing services, business processes, and more'
        />
        <Border />
        <ParallaxWindow location='middle' />
        <Border />
        <ContentWrap>
          <DynamicFAQs faqData={faqData} uniqueHeaders={uniqueHeaders} />
        </ContentWrap>

        <Border />
        <ParallaxWindow location='bottom' />
      </MainWrap>
    </>
  )
}

export default FAQs

export const getStaticProps = async () => {
  const faqData = await sanityClient.fetch(faqsQuery)
  const headers = faqData.map((faq) => {
    return faq.sectionTitle
  })
  const uniqueHeaders = [...new Set(headers)]
  return {
    props: {
      faqData,
      uniqueHeaders,
    },
  }
}
