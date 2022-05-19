import GlassPaper from './GlassPaper'
import {
  styled,
  useMediaQuery,
  Container,
  Typography,
  Button,
  Box,
} from '@mui/material'
import theme from '../../src/theme'
import Trail from '../util/Trail'

const GlassWindow = ({ image, icon, title, action, onClick, children }) => {
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const GlassWindowContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '86vh',
    background: `url(${image}) center`,
    backgroundSize: 'cover',
    backgroundAttachment: mobile ? 'none' : 'fixed',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    '& > .container': {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  })

  return (
    <GlassWindowContainer>
      <Container>
        <GlassPaper>
          <Trail>
            {title && icon && (
              <Header>
                <Typography variant='h2' align='center' gutterBottom>
                  {title}
                </Typography>
                <Typography variant='h1'>{icon}</Typography>
              </Header>
            )}
            {children}

            {action && (
              <Box>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={
                    onClick ? onClick : url ? () => handleLink(url) : null
                  }>
                  {action}
                </Button>
              </Box>
            )}
          </Trail>
        </GlassPaper>
      </Container>
    </GlassWindowContainer>
  )
}

export default GlassWindow

const Header = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})
