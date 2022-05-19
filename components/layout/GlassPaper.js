import { Paper, styled } from '@mui/material'
import theme from '../../src/theme'

const GlassPaper = ({ children, style }) => {
  return <GlassPaperWrap style={style}>{children}</GlassPaperWrap>
}

export default GlassPaper

export const GlassPaperWrap = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  backdropFilter: 'blur( 8px )',
  background: 'rgba( 0, 0, 0, 0.75 )',
  border: '1px solid rgba( 255, 255, 255, 0.1 )',
})
