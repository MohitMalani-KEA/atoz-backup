import Head from 'next/head'
import ParallaxWindow from '../../components/layout/ParallaxWindow'
import ContentBlock from '../../components/layout/ContentBlock'
import Border from '../../components/layout/Border'
import ActionCard from '../../components/layout/ActionCard'
import { Box, Grid, Typography } from '@mui/material'
import bgImage from '../../public/backgrounds/print7-bg.svg'
import Parallax from '../../components/util/Parallax'
import MainWrap from '../../components/layout/MainWrap'
import labware from '../../public/customer-portal/labware.webp'
import register from '../../public/customer-portal/register.webp'

const CustomerPortal = () => {
  const description = `This page will help guide you through the ATOZ customer
  journey. If you are a new customer looking to create an account,
  click 'Create An Account' and fill out the form. If you are a
  returning customer looking for the status of your order, follow the
  'Customer Login' link.`

  return (
    <>
      <Head>
        <title>ATOZ | Customer Portal</title>
        <meta name='description' content={description} />
      </Head>

      <Parallax image={bgImage} />

      <MainWrap>
        <ParallaxWindow location='top' />
        <Border />
        <ContentBlock
          title='ATOZ Customer Portal'
          subtitle='Place an order, check its status, or make a payment'>
          <Typography paragraph>
            {`The options below will help guide you through the ATOZ customer
            journey. If you are a new customer looking to create an account,
            click 'Create An Account' and fill out the form. If you are a
            returning customer looking for the status of your order, follow the
            'Customer Login' link.`}
          </Typography>

          <Box mt={6} mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <ActionCard
                  image={register}
                  caption={'Create An Account'}
                  internalUrl={'/customer-portal/register'}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <ActionCard
                  image={labware}
                  containImg
                  caption={'Customer Login'}
                  externalUrl='https://atoz-labs.grow.labware.cloud/login.form'
                />
              </Grid>
            </Grid>
          </Box>
        </ContentBlock>

        <Border />
        <ParallaxWindow location='bottom' />
      </MainWrap>
    </>
  )
}

export default CustomerPortal
