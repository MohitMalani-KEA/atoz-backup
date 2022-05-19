import { styled } from '@mui/material'
import { FC } from 'react'

interface Props {
  location: string
}

const ParallaxWindow: FC<Props> = ({ location }: Props) => {
  const WindowContainerTop = styled('div')({
    width: '100%',
    height: 140,
  })
  const WindowContainerMiddle = styled('div')({
    width: '100%',
    height: 80,
  })
  const WindowContainerBottom = styled('div')({
    width: '100%',
    height: 250,
  })

  if (location === 'top') {
    return <WindowContainerTop />
  }
  if (location === 'middle') {
    return <WindowContainerMiddle />
  }
  if (location === 'bottom') {
    return <WindowContainerBottom />
  }

  return <WindowContainerTop />
}

export default ParallaxWindow
