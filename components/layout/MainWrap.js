import { styled } from '@mui/material'

const MainWrap = ({children}) => {
  return <MainContainer>{children}</MainContainer>
}

export default MainWrap

const MainContainer = styled('main')({
  zIndex: 1,
  position: 'relative',
})
