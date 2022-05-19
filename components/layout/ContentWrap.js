import React from 'react'
import { Container, styled } from '@mui/material'
import theme from '../../src/theme'
import Trail from '../util/Trail'

const ContentWrap = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Trail>{children}</Trail>
      </Container>
    </Wrapper>
  )
}

export default ContentWrap

const Wrapper = styled('div')({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  background: 'white',
})
