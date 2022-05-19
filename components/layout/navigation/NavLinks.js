import { styled, Typography, Button } from '@mui/material'
import { linkData } from '../../../src/linkData'
import AnimatedLink from './AnimatedLink'
import { BiLogIn } from '@react-icons/all-files/bi/BiLogIn'
import { useRouter } from 'next/router'

const NavLinks = () => {
  const router = useRouter()

  const handleClick = (url) => {
    router.push(`${url}`)
  }
  // navbar link render
  return (
    <LinkWrap>
      {linkData.map((link, index) => {
        const { url, label, sublinks } = link

        {
          /* if Customer Portal link */
        }
        if (label === 'Customer Portal') {
          return (
            <div
              key={index}
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
              }}>
              <Button onClick={() => handleClick(url)}>
                <Typography
                  noWrap
                  color='primary'
                  style={{ display: 'flex', alignItems: 'center' }}>
                  <b>{label}</b> <BiLogIn style={{ fontSize: '1.6rem' }} />
                </Typography>
              </Button>
            </div>
          )
        }

        {
          /* if internal link */
        }
        return (
          <AnimatedLink url={url} sublinks={sublinks} key={index}>
            <Typography noWrap>{label}</Typography>
          </AnimatedLink>
        )
      })}
    </LinkWrap>
  )
}

export default NavLinks

// styled components
const LinkWrap = styled('ul')({
  display: 'flex',
  listStyleType: 'none',
  height: '100%',
  padding: 0,
  margin: 0,
  width: '100%',
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },
})
