import { useState } from 'react'
import { Container, styled, Box, Hidden } from '@mui/material'
import NavLinks from './NavLinks'
import theme, { ColorStripe } from '../../../src/theme'
import { useRouter } from 'next/router'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const DynamicMobileNav = dynamic(() => import('./MobileNav'))
const DynamicHamburger = dynamic(() => import('hamburger-react'))

const ATOZ = '/logos/ATOZ-Lab-small.svg'

const Navbar = () => {
  const router = useRouter()
  const [isOpen, setOpen] = useState(false)

  const handleLogoClick = () => {
    router.push('/')
    setOpen(false)
  }

  return (
    <NavContainer>
      {/* nav bar gradient */}
      <ColorStripe />
      <NavContent>
        {/* logo */}
        <LogoWrap onClick={handleLogoClick}>
          <Image src={ATOZ} alt='ATOZ logo' height={35} width={35} />
        </LogoWrap>
        {/* conditional navigation links */}
        <Hidden mdDown>
          <NavLinks />
        </Hidden>
        {/* conditional hamburger menu */}
        <Hidden mdUp>
          <DynamicHamburger toggled={isOpen} toggle={setOpen} />
        </Hidden>
      </NavContent>

      {/* mobile nav menu */}
      <Hidden mdUp>
        <DynamicMobileNav isOpen={isOpen} setOpen={setOpen} />
      </Hidden>
    </NavContainer>
  )
}

export default Navbar

const NavContainer = styled('nav')({
  width: '100%',
  position: 'fixed',
  boxShadow:
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  zIndex: 10,
  backgroundColor: theme.palette.background.default,
})
const NavContent = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 60,
  justifyContent: 'space-between',
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
})
const LogoWrap = styled(Box)({
  padding: theme.spacing(1),
  marginRight: theme.spacing(1),
  cursor: 'pointer',
})
