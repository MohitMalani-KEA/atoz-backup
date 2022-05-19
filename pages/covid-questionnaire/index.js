import Head from 'next/head'
import Parallax from '../../components/util/Parallax'
import ParallaxWindow from '../../components/layout/ParallaxWindow'
import ContentBlock from '../../components/layout/ContentBlock'
import Border from '../../components/layout/Border'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import MainWrap from '../../components/layout/MainWrap'
import heroImg from '../../public/backgrounds/print6-bg.svg'
import { Loader } from '../../components/util/SkeletonLoader'

const DynamicSuccess = dynamic(
  () => import('../../components/forms/SuccessMessage'),
  {
    ssr: true,
    loading: Loader,
  }
)
const DynamicReschedule = dynamic(
  () =>
    import(
      '../../components/layout/contact/covid-questionnaire/RescheduleMessage'
    ),
  {
    ssr: true,
    loading: Loader,
  }
)
const DynamicTrueFalse = dynamic(
  () => import('../../components/layout/contact/covid-questionnaire/TrueFalse'),
  {
    ssr: true,
    loading: Loader,
  }
)

const CovidQuestionnaire = () => {
  const description = `Help us prevent the spread of COVID-19 in our workplace. COVID-19 can be spread to others by infected persons who have few or no symptoms, especially between unvaccinated individuals who are physically near each other in enclosed spaces.  Persons who have the COVID 19 virus, even if they show no symptoms, may spread the virus to others who may become seriously ill.  Because this threat is hidden, the virus highly communicable and the consequences of illness potentially severe, all visitors are required to complete this questionnaire and agree to follow the directions incorporated herein.`

  // set state
  const [submitSuccess, setSubmitSuccess] = useState(null)
  const [visitorApproved, setApproved] = useState(null)

  return (
    <>
      <Head>
        <title>ATOZ | Visitor COVID Questionnaire</title>
        <meta name='description' content={description} />
      </Head>

      <Parallax image={heroImg} />

      <MainWrap>
        <ParallaxWindow location='top' />
        <Border />
        <ContentBlock
          title='Visitor COVID Questionnaire'
          subtitle='Help us prevent the spread of this harmful virus'>
          {/* while submit is not successful */}
          {submitSuccess === null && visitorApproved === null && (
            <>
              <Typography paragraph>
                {`The virus that causes COVID-19 can be spread to others by infected persons who have few or no symptoms, especially between unvaccinated individuals who are physically near each other in enclosed spaces.  Persons who have the COVID 19 virus, even if they show no symptoms, may spread the virus to others who may become seriously ill.  Because this threat is hidden, the virus highly communicable and the consequences of illness potentially severe, all visitors are required to complete this questionnaire and agree to follow the directions incorporated herein.`}
              </Typography>
              <Typography paragraph style={{ fontWeight: 'bold' }}>
                {`The CDC issued revised guidance for fully vaccinated individuals on May 13, 2021 allowing for resumption of normal activities without wearing a mask or maintaining 6 feet distance, both indoors and out, except where required by federal, state, local, tribal, or territorial laws, rules, and regulations, including local business and workplace guidance.`}
              </Typography>
              <Typography paragraph style={{ fontWeight: 'bold' }}>
                {`The CDC issued interim health guidance on Tuesday July 27, 2021 in response to data driven evidence related to the Delta Variant recommending fully vaccinated people wear properly fitted masks in public indoor settings in areas of substantial or high transmission rates.  You may be subject to mask requirements on the date of your office visit pursuant to this guidance.`}
              </Typography>
              {/* questionnaire component */}
              <Box mt={3} />
              <DynamicTrueFalse
                setSubmitSuccess={setSubmitSuccess}
                setApproved={setApproved}
              />
            </>
          )}
          {/* if visitor responses do not pass check */}
          {visitorApproved === false && <DynamicReschedule />}
          {/* if form submit is successful */}
          {submitSuccess === true && (
            <DynamicSuccess
              noPaper
              customMessage={`Your Responses Have Been Submitted Successfully`}
            />
          )}
        </ContentBlock>
        <Border />
        <ParallaxWindow location='bottom' />
      </MainWrap>
    </>
  )
}

export default CovidQuestionnaire
