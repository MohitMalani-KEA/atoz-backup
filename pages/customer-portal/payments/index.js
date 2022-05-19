import React from 'react'
import Head from 'next/head'
import Parallax from '../../../components/util/Parallax'
import MainWrap from '../../../components/layout/MainWrap'
import ParallaxWindow from '../../../components/layout/ParallaxWindow'
import ContentBlock from '../../../components/layout/ContentBlock'
import Border from '../../../components/layout/Border'
import { Typography } from '@mui/material'
import bgImage from '../../../public/backgrounds/print1-bg.svg'

const Payments = () => {
  const description = `Make a payment for your outstanding ATOZ Labs balance here.`
  return (
    <>
      <Head>
        <title>ATOZ | Payments</title>
        <meta name='description' content={description} />
      </Head>

      <Parallax image={bgImage} />

      <MainWrap>
        <ParallaxWindow location='top' />
        <Border />
        <ContentBlock
          title='Make A Payment'
          subtitle='Settle your outstanding balance'>
          <Typography paragraph>
            {`Enter the amount owed as detailed in your invoice into the field
            below and press 'Submit'. Follow the instructions on the following
            pages to complete your payment.`}
          </Typography>
          <Typography paragraph>
            <b>Important: </b>
            {`When you reach the 'Check Memo' field, please
            input your invoice number. This will help ensure your payment is
            associated with the appropriate invoice.`}
          </Typography>
        </ContentBlock>
        <Border />
        <ParallaxWindow location='bottom' />
      </MainWrap>
    </>
  )
}

export default Payments
