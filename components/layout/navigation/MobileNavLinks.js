import { styled, Typography } from '@mui/material'
import { BiLogIn } from '@react-icons/all-files/bi/BiLogIn'
import Link from 'next/link'
import theme from '../../../src/theme'
import { linkData } from '../../../src/linkData'
import { useRouter } from 'next/router'

const MobileNavLinks = () => {
  const router = useRouter()

  return (
    <MobileLinkContainer>
      {linkData.map((link, index) => {
        {
          /* if Customer Portal */
        }
        if (link.label === 'Customer Portal') {
          return (
            <li key={index}>
              <Typography
                noWrap
                color='primary'
                style={{ display: 'flex', alignItems: 'center' }}>
                <b>
                  <Link href={link.url}>{link.label}</Link>
                </b>
                <BiLogIn style={{ fontSize: '1.6rem' }} />
              </Typography>
            </li>
          )
        }

        {
          /* if external link */
        }
        if (link.external) {
          return (
            <li key={index}>
              <Typography noWrap>
                <a href={link.url} target='_blank' rel='noreferrer'>
                  {link.label}
                </a>
              </Typography>
            </li>
          )
        }

        {
          /* if internal link */
        }
        return (
          <li key={index}>
            <Typography noWrap>
              <Link href={link.url}>{link.label}</Link>
            </Typography>
          </li>
        )
      })}
    </MobileLinkContainer>
  )
}

export default MobileNavLinks

const MobileLinkContainer = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  '& li': {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& p': {
      fontSize: '1.2rem',
      '& a': {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
  },
})
