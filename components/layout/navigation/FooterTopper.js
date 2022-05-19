import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import theme, { ColorStripe, thinBorder } from '../../../src/theme'

const FooterTopper = ({ title, subtitle, children }) => {
  return (
    <div>
      <FooterTopperWrap bgcolor='secondary.main'>
        <FooterTopperContainer>
          <div>
            {title && <Typography variant='h4'>{title}</Typography>}
            <SubtitleWrap>
              {subtitle && <Typography variant='h6'>{subtitle}</Typography>}
              {children}
            </SubtitleWrap>
          </div>
        </FooterTopperContainer>
      </FooterTopperWrap>
      <ColorStripe />
    </div>
  )
}

export default FooterTopper

const FooterTopperContainer = styled(Container)({
  display: 'flex',
  color: theme.palette.secondary.light,
})
const FooterTopperWrap = styled(Box)({
  padding: theme.spacing(2),
  borderTop: thinBorder,
})
const SubtitleWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& h6': {
    marginRight: theme.spacing(1),
  },
})
