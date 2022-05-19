import {
  Box,
  styled,
  Typography,
  Button,
  Container,
  Hidden,
} from '@mui/material'
import Trail from '../util/Trail'
import DownArrow from './DownArrow'
import Link from 'next/link'

const Hero = ({ title, subtitle, children, action, url }) => {
  const HeroContainer = styled('div')({
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    color: 'white',
    maxWidth: 700,
  })

  return (
    <HeroWrap>
      <Container>
        <HeroContainer>
          <Trail>
            <Box mt='65px' />
            {title && (
              <Typography variant='h3' component='h1' gutterBottom>
                {title}
              </Typography>
            )}
            {/* conditional subtitle */}
            {subtitle && (
              <Typography variant='h4' component='h2' gutterBottom>
                {subtitle}
              </Typography>
            )}
            {children}
            {url && (
              <Box mt={4}>
                <Link href={url} passHref>
                  <Button variant='outlined' size='large' color='inherit'>
                    {action}
                  </Button>
                </Link>
              </Box>
            )}
          </Trail>
        </HeroContainer>
        <Hidden smDown>
          <DownArrow />
        </Hidden>
      </Container>
    </HeroWrap>
  )
}

export default Hero

const HeroWrap = styled('div')({
  position: 'relative',
})
