import {
  Container,
  styled,
  Typography,
  Grid,
  Paper,
  Button,
  Box,
} from '@mui/material'
import { ResponsiveStyleValue } from '@mui/system'
import { GridDirection } from '@mui/material'
import theme from '../../src/theme'
import Trail from '../util/Trail'
import Link from 'next/link'
import { ReactNode, FC } from 'react'
import Image from 'next/image'

interface Props {
  title?: string
  subtitle?: string
  image?: StaticImageData
  action?: string
  direction?: ResponsiveStyleValue<GridDirection> | undefined
  url?: string
  paddingBottom?: boolean
  children?: ReactNode
}

const ContentBlock: FC<Props> = ({
  title,
  subtitle,
  image,
  action,
  direction,
  url,
  paddingBottom,
  children,
}: Props) => {
  const ContentContainer = styled('div')({
    width: '100%',
    background: 'white',
    '& > div': {
      padding: theme.spacing(3),
      paddingBottom: paddingBottom === false ? 0 : theme.spacing(3),
    },
    '& .textWrap': {
      '& a': {
        color: theme.palette.primary.dark,
        fontWeight: 'bold',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  })

  // if image available
  if (image) {
    return (
      <ContentContainer>
        <Container>
          <Grid
            container
            spacing={4}
            alignItems='center'
            justifyContent='space-between'
            direction={direction}>
            <Grid item xs={12} md={6}>
              <Trail>
                {/* conditional title */}
                {title && (
                  <Typography
                    variant='h2'
                    color='primary'
                    style={{ textTransform: 'capitalize' }}>
                    {title}
                  </Typography>
                )}

                {/* conditional subtitle */}
                {subtitle && (
                  <Typography variant='h3' color='textSecondary' gutterBottom>
                    {subtitle}
                  </Typography>
                )}

                {/* children */}
                <div className='textWrap'>{children}</div>

                {/* conditional button */}
                {url && (
                  <Box mt={2}>
                    <Link href={url} passHref>
                      <Button variant='contained' color='primary'>
                        {action}
                      </Button>
                    </Link>
                  </Box>
                )}
              </Trail>
            </Grid>
            <Grid item xs={12} md={6}>
              <Trail>
                <ImageWrap>
                  <Image src={image} alt='' layout='fill' />
                </ImageWrap>
              </Trail>
            </Grid>
          </Grid>
        </Container>
      </ContentContainer>
    )
  }

  // if no image
  return (
    <ContentContainer>
      <Container>
        <Trail>
          {title && (
            <Typography
              variant='h2'
              color='primary'
              style={{ textTransform: 'capitalize' }}>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant='h3' color='textSecondary' gutterBottom>
              {subtitle}
            </Typography>
          )}

          <div>{children}</div>
          {url && (
            <Box mt={2}>
              <Link href={url} passHref>
                <Button variant='contained' color='primary'>
                  {action}
                </Button>
              </Link>
            </Box>
          )}
        </Trail>
      </Container>
    </ContentContainer>
  )
}

export default ContentBlock

const ImageWrap = styled(Paper)({
  position: 'relative',
  height: '325px',
  width: '100%',
  overflow: 'hidden',
  '& img': {
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    height: '100%',
  },
})
