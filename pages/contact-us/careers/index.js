import Head from 'next/head'
import ParallaxWindow from '../../../components/layout/ParallaxWindow'
import Border from '../../../components/layout/Border'
import ContentBlock from '../../../components/layout/ContentBlock'
import Parallax from '../../../components/util/Parallax'
import bgImage from '../../../public/backgrounds/print5-bg.svg'
import MainWrap from '../../../components/layout/MainWrap'
import { sanityClient } from '../../../src/sanity'
import { jobOpeningsQuery } from '../../../src/queries'
import ContentWrap from '../../../components/layout/ContentWrap'
import { Loader } from '../../../components/util/SkeletonLoader'
import dynamic from 'next/dynamic'

const DynamicCareers = dynamic(
  () => import('../../../components/layout/careerCard/CareerCard'),
  {
    ssr: true,
    loading: Loader,
  }
)

const Careers = ({ jobOpenings }) => {
  const description = `Want to build a career with ATOZ Labs? See what positions we currently have available`
  
  return (
    <>
      <Head>
        <title>ATOZ | Careers</title>
        <meta name='description' content={description} />
      </Head>

      <Parallax image={bgImage} />

      <MainWrap>
        <ParallaxWindow location='top' />
        <Border />
        <ContentBlock
          title='Want to build a career with ATOZ Labs?'
          subtitle='See what positions we currently have available'
        />
        <Border />
        <ParallaxWindow location='middle' />
        <Border />
        <ContentWrap>
          {jobOpenings.map((job, i) => {
            return <DynamicCareers jobData={job} key={i} />
          })}
        </ContentWrap>
        <Border />
        <ParallaxWindow location='bottom' />
      </MainWrap>
    </>
  )
}

export default Careers

export const getStaticProps = async () => {
  const jobOpenings = await sanityClient.fetch(jobOpeningsQuery)
  return {
    props: {
      jobOpenings,
    },
  }
}
