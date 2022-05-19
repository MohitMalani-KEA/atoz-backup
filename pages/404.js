import React from 'react'
import logo from '../public/logos/ATOZ-Lab-small.svg'
import Image from 'next/image'
import { Button, Container, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import Link from 'next/link'

const NotFound = () => {
  return (
    <Container>
      <ContentWrap>
        <Typography variant='h5' component='h1' paragraph>
          Sorry, this page could not be found.
        </Typography>
        <Image src={logo} alt='logo' height={200} width={200} />
        <Box mt={4} />
        <Link href='/' passHref>
          <Button variant='outlined' color='primary' size='large'>
            Return to site
          </Button>
        </Link>
      </ContentWrap>
    </Container>
  )
}

export default NotFound

const ContentWrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '85vh',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 65,
})
