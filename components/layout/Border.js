import { styled } from '@mui/material'
import theme, { thinBorder } from '../../src/theme'

const Border = () => {
  const Breaker = styled('div')({
    width: '100%',
    background: theme.palette.secondary.dark,
    borderTop: thinBorder,
    borderBottom: thinBorder,
    height: 20,
  })

  return <Breaker />
}

export default Border
