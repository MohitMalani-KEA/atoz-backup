import {
  styled,
  Typography,
  Container,
  Divider,
  useMediaQuery,
  IconButton,
  Hidden,
} from '@mui/material'
import theme, { ColorStripe } from '../../../src/theme'
import FooterTopper from './FooterTopper'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import { linkData } from '../../../src/linkData'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const ATOZ = '/logos/ATOZ-Lab.svg'

const Footer = () => {
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  const router = useRouter()

  const FootContainer = styled(Container)({
    display: 'flex',
    flexDirection: mobile ? 'column' : 'row',
    padding: theme.spacing(2),
  })

  const goHome = () => {
    router.push('/')
  }

  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'white' }}>
      {/* Footer Topper */}
      <FooterTopper
        title='Stay In Touch With Us'
        subtitle={`We're on social media:`}>
        <IconButton
          color='inherit'
          size='small'
          href='https://twitter.com/atozlabs'
          target='_blank'
          rel='noreferrer'>
          <TwitterIcon />
        </IconButton>
        <IconButton
          color='inherit'
          size='small'
          href='https://www.linkedin.com/company/atoz-labs/'
          target='_blank'
          rel='noreferrer'>
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color='inherit'
          size='small'
          href='https://www.instagram.com/atoz_labs/'
          target='_blank'
          rel='noreferrer'>
          <InstagramIcon />
        </IconButton>
      </FooterTopper>

      <FootContainer>
        <Hidden smDown>
          <LogoBlock>
            <Image
              src={ATOZ}
              alt='ATOZ logo'
              height='90px'
              width='210px'
              onClick={goHome}
            />
            <div>
              <Typography variant='subtitle2'>
                &copy; 2021 | ATOZ Laboratories
              </Typography>
            </div>
          </LogoBlock>

          <FootDivider
            flexItem={true}
            orientation='vertical'
            implementation='css'
            light
          />
        </Hidden>

        <LinkBlock>
          {linkData.map((link, index) => {
            return (
              <LinkColumn key={index}>
                <Link href={link.url} passHref>
                  <Typography variant='body2' gutterBottom noWrap>
                    <b>{link.label}</b>
                  </Typography>
                </Link>
                {/* if link contains sublinks */}
                {link.sublinks?.map((sublink, index) => {
                  if (sublink.external) {
                    return (
                      <a
                        href={sublink.url}
                        target='_blank'
                        rel='noreferrer'
                        key={index}>
                        <Typography variant='body2' gutterBottom noWrap>
                          {sublink.label}
                        </Typography>
                      </a>
                    )
                  }
                  return (
                    <Link href={sublink.url} key={index} passHref>
                      <Typography variant='body2' gutterBottom noWrap>
                        {sublink.label}
                      </Typography>
                    </Link>
                  )
                })}
              </LinkColumn>
            )
          })}
        </LinkBlock>

        <Hidden smUp>
          <LogoBlock>
            <Image
              src={ATOZ}
              alt='ATOZ logo'
              height='90px'
              width='210px'
              onClick={goHome}
            />
            <div>
              <Typography variant='subtitle2'>
                &copy; 2021 | ATOZ Laboratories
              </Typography>
            </div>
          </LogoBlock>

          <FootDivider
            flexItem={true}
            orientation='vertical'
            implementation='css'
            light
          />
        </Hidden>
      </FootContainer>
    </div>
  )
}

export default Footer

const LogoBlock = styled('div')({
  padding: theme.spacing(2),
  '& img': {
    cursor: 'pointer',
  },
})
const LinkBlock = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
})
const LinkColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  '& a:first-of-type': {
    fontWeight: 600,
  },
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
  '& b, p': {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
const FootDivider = styled(Divider)({
  display: (props) => props.display,
  margin: theme.spacing(2),
})
