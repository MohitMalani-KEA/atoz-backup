import { Paper, styled, Typography } from '@mui/material'
import { useSpring, animated as a } from '@react-spring/web'
import { useState } from 'react'
import router from 'next/router'
import theme, { ColorStripe } from '../../src/theme'
import Trail from '../util/Trail'
import Image from 'next/image'

const ActionCard = ({
  image,
  caption,
  internalUrl,
  externalUrl,
  containImg,
}) => {
  const [isHovered, setHovered] = useState(false)

  const imageStyles = useSpring({
    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
    opacity: isHovered ? 0.75 : 1,
  })
  const textStyles = useSpring({
    color: isHovered
      ? theme.palette.primary.dark
      : theme.palette.secondary.dark,
  })

  const handleClick = () => {
    if (externalUrl) {
      return window.open(`${externalUrl}`, '_blank', 'noopener')
    }
    if (internalUrl) {
      return router.push(`${internalUrl}`)
    }
  }

  return (
    <Trail>
      <PaperWrap>
        <div
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          <ImageWrap>
            <ImageHolder style={imageStyles}>
              <Image
                src={image}
                alt={caption}
                layout='fill'
                objectFit={containImg ? 'contain' : 'cover'}
                placeholder='blur'
              />
            </ImageHolder>
          </ImageWrap>
          <ColorStripe />
          <Caption>
            <Text style={textStyles}>{caption}</Text>
          </Caption>
        </div>
      </PaperWrap>
    </Trail>
  )
}

export default ActionCard

const Text = styled(a(Typography))({
  fontWeight: 'bold',
})
const PaperWrap = styled(Paper)({
  padding: 0,
  overflow: 'hidden',
  cursor: 'pointer',
  flex: '1 1 400px',
})

const ImageWrap = styled('div')({
  height: 275,
  overflow: 'hidden',
  background: 'white',
})
const ImageHolder = styled(a.div)({
  position: 'relative',
  height: '100%',
  width: '100%',
})
const Caption = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: theme.spacing(2),
})
