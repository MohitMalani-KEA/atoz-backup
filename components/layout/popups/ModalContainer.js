import { styled } from '@mui/system'
import { Container } from '@mui/material'
import { useSpring, animated as a } from '@react-spring/web'

const Modal = ({ children }) => {
  const modalStyles = useSpring({
    from: {
      opacity: 0,
      height: '0vh',
    },
    to: {
      opacity: 1,
      height: '100vh',
    },
  })
  
  return (
    <ModalContainer style={modalStyles}>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {children}
      </Container>
    </ModalContainer>
  )
}

export default Modal

const ModalContainer = styled(a.div)({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba( 0, 0, 0, 0.75 )',
  width: '100vw',
  backdropFilter: 'blur( 12px )',
  zIndex: 25,
})
