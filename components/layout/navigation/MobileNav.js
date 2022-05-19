import { Container, styled } from '@mui/material'
import { useSpring, animated as a } from '@react-spring/web'
import theme from '../../../src/theme'
import MobileNavLinks from './MobileNavLinks'
import { useEffect } from 'react'

const MobileNav = ({ isOpen, setOpen }) => {
  const dropStyles = useSpring({
    height: isOpen ? '95vh' : '0vh',
    opacity: isOpen ? 1 : 0,
  })

  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = 'hidden'
    }
    return () => (window.document.body.style.overflow = 'unset')
  }, [isOpen])

  return (
    <MobileNavContainer style={dropStyles} onClick={() => setOpen(false)}>
      {isOpen && (
        <MobileLinkWrap>
          <MobileNavLinks />
        </MobileLinkWrap>
      )}
    </MobileNavContainer>
  )
}

export default MobileNav

const MobileNavContainer = styled(a.div)({
  width: '100%',
})
const MobileLinkWrap = styled(Container)({
  padding: theme.spacing(4),
})
