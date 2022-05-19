import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import theme, { ColorStripe } from '../../../src/theme'
import { useState, useEffect } from 'react'
import { useSpring, animated as a } from '@react-spring/web'
import CancelIcon from '@mui/icons-material/Cancel'

type Props = {
  title: string
}

const Slider: React.FC<Props> = ({ title, children }) => {
  const [show, setShow] = useState<boolean>(false)
  const popupStyles = useSpring({
    opacity: show ? 1 : 0,
    bottom: show ? 0 : -100,
  })

  useEffect(() => {
    setTimeout(() => setShow(true), 2000)
  }, [])

  return (
    <SliderContainer style={popupStyles}>
      <ContentWrap>
        <ColorStripe />
        <CancelButton onClick={() => setShow(false)} />
        <TextWrap>
          <Typography variant='h6'>{title}</Typography>
          <Typography>{children}</Typography>
        </TextWrap>
      </ContentWrap>
    </SliderContainer>
  )
}

export default Slider

const CancelButton = styled(CancelIcon)({
  position: 'absolute',
  right: 8,
  top: 10,
  fontSize: '1.4rem',
  cursor: 'pointer',
})
const SliderContainer = styled(a.div)({
  position: 'fixed',
  right: 16,
  zIndex: 25,
})
const ContentWrap = styled('div')({
  boxShadow: theme.shadows[12],
  borderRadius: '25px 25px 0 0',
  overflow: 'hidden',
  position: 'relative',
  backdropFilter: 'blur( 8px )',
  background: 'rgba( 0, 0, 0, 0.75 )',
  border: '1px solid rgba( 255, 255, 255, 0.1 )',
  color: 'white',
})
const TextWrap = styled('div')({
  padding: '32px 16px 24px 16px',
})
